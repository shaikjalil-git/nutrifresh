"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  speed?: number; // Percentage offset to shift (e.g. 15 means -15% to 15%)
  children?: React.ReactNode;
}

export default function ParallaxImage({ 
  src, 
  alt, 
  className = "", 
  containerClassName = "", 
  speed = 12,
  children
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the specific element's viewport intersection
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Calculate translation range in pure real-time based on scroll progress (zero-lag!)
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed}%`, `${speed}%`]);

  return (
    <div 
      ref={containerRef} 
      className={`relative overflow-hidden bg-muted ${containerClassName}`}
    >
      <motion.img
        style={{ 
          y,
          top: `-${speed}%`,
          height: `${100 + speed * 2}%`
        }}
        src={src}
        alt={alt}
        className={`absolute left-0 w-full object-cover ${className}`}
      />
      {children}
    </div>
  );
}
