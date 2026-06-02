interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "muted";
}

const variants = {
  default:
    "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
  accent:
    "border-violet-500/30 bg-violet-500/10 text-violet-300",
  muted:
    "border-slate-600/40 bg-slate-800/50 text-slate-300",
};

export default function Badge({
  children,
  variant = "default",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
