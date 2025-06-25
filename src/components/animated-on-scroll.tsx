"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

interface AnimatedOnScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  classNameIn: string;
  classNameOut: string;
  threshold?: number;
}

export function AnimatedOnScroll({ 
    children, 
    className, 
    classNameIn, 
    classNameOut, 
    threshold = 0.1,
    ...props
}: AnimatedOnScrollProps) {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={cn(className, isIntersecting ? classNameIn : classNameOut)}
      {...props}
    >
      {children}
    </div>
  );
}
