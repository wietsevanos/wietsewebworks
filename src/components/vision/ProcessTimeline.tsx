import { useEffect, useRef, useState } from "react";
import { Check, ArrowRight } from "lucide-react";

export type Step = {
  number: string;
  title: string;
  description: string;
};

type Props = {
  steps: Step[];
  /** optional extra node rendered inside a specific step card */
  extras?: Record<string, React.ReactNode>;
};

export const ProcessTimeline = ({ steps, extras }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [progress, setProgress] = useState(0); // 0..1 of the line
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const container = containerRef.current;
      if (!container) return;

      const anchorY = window.innerHeight * 0.45;
      const rect = container.getBoundingClientRect();
      const raw = (anchorY - rect.top) / Math.max(rect.height, 1);
      setProgress(Math.min(1, Math.max(0, raw)));

      let current = 0;
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top <= anchorY) current = i;
      });
      setActiveIndex(current);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [steps.length]);

  return (
    <div ref={containerRef} className="relative pl-10 sm:pl-14">
      {/* Rail */}
      <div className="absolute left-[13px] sm:left-[19px] top-2 bottom-2 w-[2px] rounded-full bg-[hsl(var(--brand-light))]/20 overflow-hidden">
        <div
          className="w-full rounded-full bg-gradient-to-b from-[hsl(var(--brand-blue))] via-[hsl(var(--brand-light))] to-[hsl(var(--accent-orange))]/70 transition-[height] duration-300 ease-out"
          style={{ height: `${progress * 100}%` }}
        />
      </div>

      <div className="space-y-6">
        {steps.map((step, i) => {
          const isActive = i === activeIndex;
          const isDone = i < activeIndex;
          return (
            <div
              key={step.number}
              ref={(el) => (itemRefs.current[i] = el)}
              className="relative"
            >
              {/* Node */}
              <span
                className={`absolute -left-10 sm:-left-14 top-8 flex items-center justify-center rounded-full transition-all duration-500 ${
                  isActive
                    ? "w-7 h-7 -translate-x-[3px] bg-[hsl(var(--brand-blue))] text-white shadow-[0_0_0_6px_hsl(var(--brand-light)/0.18)]"
                    : isDone
                      ? "w-6 h-6 bg-[hsl(var(--accent-orange))] text-white"
                      : "w-6 h-6 bg-background ring-1 ring-[hsl(var(--brand-light))]/35 text-transparent"
                }`}
                style={{ marginLeft: isActive ? 0 : 2 }}
                aria-hidden
              >
                {isDone ? (
                  <Check size={12} strokeWidth={3} />
                ) : (
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isActive ? "bg-white" : "bg-[hsl(var(--brand-light))]/50"
                    }`}
                  />
                )}
              </span>

              <div
                className={`group flex gap-6 md:gap-10 p-8 rounded-2xl glass transition-all duration-500 ${
                  isActive
                    ? "-translate-y-1 ring-1 ring-[hsl(var(--brand-light))]/40 shadow-[0_28px_70px_-40px_hsl(var(--brand-navy)/0.55)]"
                    : isDone
                      ? "opacity-95"
                      : "opacity-80"
                }`}
              >
                <div className="flex-shrink-0">
                  <span
                    className={`block text-4xl md:text-5xl font-semibold transition-all duration-500 ${
                      isActive
                        ? "text-primary scale-105"
                        : isDone
                          ? "text-[hsl(var(--accent-orange))]/70"
                          : "text-primary/25"
                    }`}
                  >
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-[0.9375rem]">
                    {step.description}
                  </p>
                  {extras?.[step.number] && (
                    <div className="mt-4">{extras[step.number]}</div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const StepLink = ({
  targetId,
  children,
}: {
  targetId: string;
  children: React.ReactNode;
}) => (
  <button
    type="button"
    onClick={() =>
      document
        .getElementById(targetId)
        ?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-[hsl(var(--accent-orange))] transition-colors group/link"
  >
    {children}
    <ArrowRight
      size={14}
      className="transition-transform duration-300 group-hover/link:translate-x-1"
    />
  </button>
);
