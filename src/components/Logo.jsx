// Custom portfolio logo using my initials.
const INITIALS = "CS";

export default function Logo() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      role="img"
      aria-label="Chris Sojio logo"
    >
      <rect
        x="1"
        y="1"
        width="20"
        height="20"
        rx="5"
        fill="#e3b341"
      />

      <text
        x="11"
        y="15"
        textAnchor="middle"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        fontWeight="700"
        fill="#0d1117"
      >
        {INITIALS}
      </text>
    </svg>
  );
}