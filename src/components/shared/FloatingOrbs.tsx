/**
 * Subtle, premium floating background orbs.
 * Purely decorative, non-interactive, GPU-friendly.
 */
interface FloatingOrbsProps {
  variant?: "light" | "dark";
  className?: string;
}

export const FloatingOrbs = ({ variant = "light", className = "" }: FloatingOrbsProps) => {
  const primary =
    variant === "dark"
      ? "hsla(210, 95%, 55%, 0.22)"
      : "hsla(210, 95%, 55%, 0.10)";
  const secondary =
    variant === "dark"
      ? "hsla(205, 100%, 65%, 0.16)"
      : "hsla(205, 100%, 65%, 0.08)";

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div
        className="absolute -top-24 -left-24 w-[32rem] h-[32rem] rounded-full blur-3xl animate-orb-drift-a"
        style={{ background: primary }}
      />
      <div
        className="absolute -bottom-32 -right-24 w-[36rem] h-[36rem] rounded-full blur-3xl animate-orb-drift-b"
        style={{ background: secondary }}
      />
    </div>
  );
};
