import Link from "next/link";
import { ReactNode } from "react";

interface GradientButtonProps {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  external?: boolean;
  disabled?: boolean;
}

export default function GradientButton({
  href,
  onClick,
  type = "button",
  children,
  variant = "primary",
  className = "",
  external,
  disabled = false,
}: GradientButtonProps) {
  const baseClass =
    variant === "primary" ? "btn-gradient" : "btn-outline";

  const content = <span>{children}</span>;

  if (href) {
    if (external || href.startsWith("http") || href.startsWith("mailto")) {
      return (
        <a
          href={href}
          className={`${baseClass} ${className}`}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={`${baseClass} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} ${className} disabled:cursor-not-allowed disabled:opacity-60`}
    >
      {content}
    </button>
  );
}
