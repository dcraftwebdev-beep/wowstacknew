/** Scattered-dot glyph — a small triangular cluster of dots. Inherits color
    via currentColor; size it with CSS on the passed className. */
export default function DotMark({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 12" width="24" height="12" fill="currentColor" aria-hidden="true">
      <circle cx="2" cy="10" r="1.1" />
      <circle cx="7" cy="10" r="1.1" />
      <circle cx="7" cy="6" r="1.1" />
      <circle cx="12" cy="10" r="1.1" />
      <circle cx="12" cy="6" r="1.1" />
      <circle cx="12" cy="2" r="1.1" />
      <circle cx="17" cy="6" r="1.1" />
      <circle cx="17" cy="2" r="1.1" />
      <circle cx="22" cy="2" r="1.1" />
    </svg>
  );
}
