import { gsap } from "gsap";
import { useEffect, useRef } from "react";

/**
 * A canvas of little "peeps" that walk back and forth along the bottom edge,
 * sampled from a sprite sheet. Adapted for Wowstack (JSX) from Skiper UI's
 * Crowd Canvas, itself inspired by codepen.io/zadvorsky/pen/xxwbBQV.
 * Illustrations: openpeeps.com. Independent recreation — no ownership claimed.
 */
export default function CrowdCanvas({ src, rows = 15, cols = 7, className }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const config = { src, rows, cols };

    const randomRange = (min, max) => min + Math.random() * (max - min);
    const randomIndex = (array) => randomRange(0, array.length) | 0;
    const removeFromArray = (array, i) => array.splice(i, 1)[0];
    const removeItemFromArray = (array, item) => removeFromArray(array, array.indexOf(item));
    const removeRandomFromArray = (array) => removeFromArray(array, randomIndex(array));
    const getRandomFromArray = (array) => array[randomIndex(array) | 0];

    const resetPeep = ({ stage, peep }) => {
      const direction = Math.random() > 0.5 ? 1 : -1;
      // Scatter each figure across the available height. The nearest figures sit
      // a touch BELOW the bottom edge (bias) so the crowd fills to the bottom
      // with no gap (their feet just crop, like the reference); the farthest sit
      // with their heads at the very top — always full-height, never top-cropped.
      // Feet now equal the drawn bottom edge (padding cropped above), so only a
      // small bias is needed so the front row sits flush past the bottom and the
      // walk-bob never opens a gap. Farthest figures rise to the top, full-height.
      const available = Math.max(0, stage.height - peep.height);
      const bias = 16;
      const offsetY = bias - (available + bias) * gsap.parseEase("power2.in")(Math.random());
      const startY = stage.height - peep.height + offsetY;
      let startX;
      let endX;

      if (direction === 1) {
        startX = -peep.width;
        endX = stage.width;
        peep.scaleX = 1;
      } else {
        startX = stage.width + peep.width;
        endX = 0;
        peep.scaleX = -1;
      }

      peep.x = startX;
      peep.y = startY;
      peep.anchorY = startY;

      return { startX, startY, endX };
    };

    const normalWalk = ({ peep, props }) => {
      const { startY, endX } = props;
      const xDuration = 10;
      const yDuration = 0.25;

      const tl = gsap.timeline();
      tl.timeScale(randomRange(0.5, 1.5));
      tl.to(peep, { duration: xDuration, x: endX, ease: "none" }, 0);
      tl.to(
        peep,
        { duration: yDuration, repeat: xDuration / yDuration, yoyo: true, y: startY - 10 },
        0
      );
      return tl;
    };

    const walks = [normalWalk];

    const createPeep = ({ image, rect }) => {
      const peep = {
        image,
        rect: [],
        width: 0,
        height: 0,
        x: 0,
        y: 0,
        anchorY: 0,
        scaleX: 1,
        walk: null,
        setRect: (r) => {
          peep.rect = r;
          peep.width = r[2];
          peep.height = r[3];
        },
        render: (context) => {
          context.save();
          context.translate(peep.x, peep.y);
          context.scale(peep.scaleX, 1);
          context.drawImage(
            peep.image,
            peep.rect[0],
            peep.rect[1],
            peep.rect[2],
            peep.rect[3],
            0,
            0,
            peep.width,
            peep.height
          );
          context.restore();
        },
      };
      peep.setRect(rect);
      return peep;
    };

    const img = document.createElement("img");
    const stage = { width: 0, height: 0 };

    const allPeeps = [];
    const availablePeeps = [];
    const crowd = [];

    const createPeeps = () => {
      const { rows: r, cols: c } = config;
      const { naturalWidth: width, naturalHeight: height } = img;
      const total = r * c;
      const rectWidth = width / r;
      const rectHeight = height / c;
      // Each sprite cell has ~34px of transparent space below the feet. Crop it
      // from the source so a figure's "feet" line up with its drawn bottom edge,
      // letting the crowd sit flush on the band's bottom with no white gap.
      const FOOT_PAD = 34;

      for (let i = 0; i < total; i++) {
        allPeeps.push(
          createPeep({
            image: img,
            rect: [(i % r) * rectWidth, ((i / r) | 0) * rectHeight, rectWidth, rectHeight - FOOT_PAD],
          })
        );
      }
    };

    const initCrowd = () => {
      while (availablePeeps.length) {
        addPeepToCrowd().walk.progress(Math.random());
      }
    };

    const addPeepToCrowd = () => {
      const peep = removeRandomFromArray(availablePeeps);
      const walk = getRandomFromArray(walks)({
        peep,
        props: resetPeep({ peep, stage }),
      }).eventCallback("onComplete", () => {
        removePeepFromCrowd(peep);
        addPeepToCrowd();
      });

      peep.walk = walk;
      crowd.push(peep);
      crowd.sort((a, b) => a.anchorY - b.anchorY);
      return peep;
    };

    const removePeepFromCrowd = (peep) => {
      removeItemFromArray(crowd, peep);
      availablePeeps.push(peep);
    };

    const render = () => {
      canvas.width = canvas.width;
      ctx.save();
      ctx.scale(devicePixelRatio, devicePixelRatio);
      crowd.forEach((peep) => peep.render(ctx));
      ctx.restore();
    };

    let ready = false;

    const resize = () => {
      stage.width = canvas.clientWidth;
      stage.height = canvas.clientHeight;
      canvas.width = stage.width * devicePixelRatio;
      canvas.height = stage.height * devicePixelRatio;

      crowd.forEach((peep) => peep.walk && peep.walk.kill());
      crowd.length = 0;
      availablePeeps.length = 0;

      // Only populate once the sprite is decoded AND the band has real width.
      if (!ready || stage.width === 0 || stage.height === 0) return;
      availablePeeps.push(...allPeeps);
      initCrowd();
    };

    const init = () => {
      createPeeps();
      ready = true;
      resize();
      gsap.ticker.add(render);
    };

    img.onload = init;
    img.src = config.src;

    // Re-run resize whenever the canvas gets a real size (fixes the case where
    // the footer is laid out at 0-width when the sprite first loads).
    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas);

    return () => {
      ro.disconnect();
      gsap.ticker.remove(render);
      crowd.forEach((peep) => peep.walk && peep.walk.kill());
    };
  }, [src, rows, cols]);

  return <canvas ref={canvasRef} className={className} />;
}
