/**
 * Sprite SVG único (sin fuentes de íconos externas). Se renderiza una vez en el layout
 * y cada ícono se referencia con <Icon name="…" />.
 */
export function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
      <symbol id="i-check" viewBox="0 0 24 24">
        <path
          d="M5 12.5l4.2 4.2L19 7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </symbol>
      <symbol id="i-arrow" viewBox="0 0 24 24">
        <path
          d="M5 12h14M13 6l6 6-6 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </symbol>
      <symbol id="i-wa" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"
        />
      </symbol>
      <symbol id="i-lock" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="5" y="11" width="14" height="9" rx="2" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        </g>
      </symbol>
      <symbol id="i-chev" viewBox="0 0 24 24">
        <path
          d="M6 9l6 6 6-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </symbol>
      <symbol id="i-plus" viewBox="0 0 24 24">
        <path
          d="M12 5v14M5 12h14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </symbol>
      <symbol id="i-buy" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
          <path d="M4 11l8-6 8 6v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
          <path d="M9 15l2 2 4-4" />
        </g>
      </symbol>
      <symbol id="i-sell" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
          <path d="M3 12V4h8l10 10-8 8z" />
          <circle cx="7.5" cy="8.5" r="1.5" />
        </g>
      </symbol>
      <symbol id="i-doc" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
          <path d="M6 3h8l4 4v14H6z" />
          <path d="M14 3v4h4M9 12h6M9 16h6" />
        </g>
      </symbol>
      <symbol id="i-brief" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M9 7V5h6v2M3 13h18" />
        </g>
      </symbol>
      <symbol id="s-g" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="11" fill="currentColor" />
        <path
          d="M7 12.4l3.2 3.2L17 8.8"
          fill="none"
          stroke="#fff"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </symbol>
      <symbol id="s-a" viewBox="0 0 24 24">
        <path
          d="M12 2.2L22.6 21H1.4z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M12 9.2v5.4" stroke="#1a1300" strokeWidth="2.3" strokeLinecap="round" />
        <circle cx="12" cy="17.7" r="1.35" fill="#1a1300" />
      </symbol>
      <symbol id="s-n" viewBox="0 0 24 24">
        <circle
          cx="12"
          cy="12"
          r="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="3.2 2.6"
        />
        <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      </symbol>
      <symbol id="s-r" viewBox="0 0 24 24">
        <path d="M7.4 1h9.2L23 7.4v9.2L16.6 23H7.4L1 16.6V7.4z" fill="currentColor" />
        <path d="M8 8l8 8M16 8l-8 8" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
      </symbol>
    </svg>
  );
}

export type IconName =
  "check" | "arrow" | "wa" | "lock" | "chev" | "plus" | "buy" | "sell" | "doc" | "brief";

export function Icon({
  name,
  className,
  size,
}: {
  name: IconName;
  className?: string;
  size?: number;
}) {
  return (
    <svg className={className} aria-hidden="true" focusable="false" width={size} height={size}>
      <use href={`#i-${name}`} />
    </svg>
  );
}
