import React from "react";

interface GradientSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientSection({ children, className = "" }: GradientSectionProps) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-brand-darkblue to-brand-teal z-0" />
      <div className="relative z-10">{children}</div>
    </section>
  );
} 