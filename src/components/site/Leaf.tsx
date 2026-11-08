export function Leaf({ className = "", draw = false }: { className?: string; draw?: boolean }) {
  return (
    <svg viewBox="0 0 100 140" className={className} fill="none" aria-hidden>
      <path
        className={draw ? "draw" : ""}
        d="M50 135 C50 100 50 70 50 40 M50 130 C10 110 5 50 50 8 C95 50 90 110 50 130 Z M50 60 L30 45 M50 85 L70 68 M50 105 L28 92"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
