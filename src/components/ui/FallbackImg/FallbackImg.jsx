import { useState } from "react";

/**
 * <img> that swaps to a styled placeholder div if the file is missing,
 * so layouts never show a broken image before real assets are added.
 */
export default function FallbackImg({ src, alt = "", className = "", fallbackClassName = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className={`${className} ${fallbackClassName}`} role="img" aria-label={alt} />;
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
