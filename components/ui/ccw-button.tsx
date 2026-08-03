"use client";

import Link from "next/link";
import { CSSProperties, ReactNode, useState } from "react";

type Variant = "default" | "secondary" | "outline" | "ghost" | "destructive" | "link";
type Size = "default" | "sm" | "lg" | "icon";

const VARIANT: Record<Variant, CSSProperties> = {
  default: { background: "var(--ccw-yellow)", color: "var(--ccw-black)", border: "1px solid transparent" },
  secondary: { background: "var(--ccw-black)", color: "var(--ccw-white)", border: "1px solid transparent" },
  outline: { background: "var(--ccw-white)", color: "var(--ccw-black)", border: "1px solid var(--border-default)" },
  ghost: { background: "transparent", color: "var(--ccw-black)", border: "1px solid transparent" },
  destructive: { background: "var(--ccw-red-100)", color: "var(--ccw-red-600)", border: "1px solid transparent" },
  link: { background: "transparent", color: "var(--ccw-black)", border: "1px solid transparent", textDecoration: "underline" },
};

const SIZE: Record<Size, CSSProperties> = {
  default: { height: 32, padding: "0 12px", fontSize: "var(--text-body-sm)" },
  sm: { height: 28, padding: "0 10px", fontSize: "var(--text-caption)" },
  lg: { height: 38, padding: "0 18px", fontSize: "var(--text-body)" },
  icon: { height: 32, width: 32, padding: 0 },
};

const HOVER_BG: Record<Variant, string> = {
  default: "var(--ccw-yellow-600)",
  secondary: "#2b2b2b",
  outline: "var(--surface-sunken)",
  ghost: "var(--surface-sunken)",
  destructive: "var(--ccw-red-100)",
  link: "transparent",
};

type CcwButtonProps = {
  variant?: Variant;
  size?: Size;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export function CcwButton({
  variant = "default",
  size = "default",
  href,
  type = "button",
  onClick,
  disabled,
  className = "",
  style = {},
  children,
}: CcwButtonProps) {
  const [hover, setHover] = useState(false);
  const v = VARIANT[variant];
  const s = SIZE[size];

  const composed: CSSProperties = {
    fontFamily: "var(--font-body)",
    fontWeight: "var(--weight-semibold)" as CSSProperties["fontWeight"],
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    borderRadius: "var(--radius-none)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    whiteSpace: "nowrap",
    textDecoration: v.textDecoration,
    ...v,
    ...s,
    background: hover && !disabled ? HOVER_BG[variant] : v.background,
    ...style,
  };

  const shared = {
    className: `btn-lift ${className}`.trim(),
    style: composed,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
  };

  if (href) {
    return (
      <Link href={href} {...shared}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} {...shared}>
      {children}
    </button>
  );
}
