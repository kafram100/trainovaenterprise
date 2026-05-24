"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const slides = [
  {
    src: "/images/students-collaborating.jpg",
    alt: "African students collaborating on laptops in a modern classroom",
  },
  {
    src: "/images/it-class-coding.jpg",
    alt: "African students learning coding in a modern IT class",
  },
  {
    src: "/images/computer-lab.jpg",
    alt: "African students learning programming in a computer lab",
  },
  {
    src: "/images/teacher-students.jpg",
    alt: "Cheerful African teacher interacting with students in a classroom",
  },
];

export function ImageSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl group">
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-all duration-700 ease-in-out"
          style={{
            opacity: index === current ? 1 : 0,
            transform: `scale(${index === current ? 1 : 1.05})`,
          }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 50vw"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={cn(
              "rounded-full transition-all duration-500",
              index === current
                ? "w-8 h-2 bg-white shadow-md"
                : "w-2 h-2 bg-white/50 hover:bg-white/80 hover:scale-125"
            )}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute top-3 right-3">
        <span className="inline-flex items-center gap-1 rounded-full bg-black/30 px-2.5 py-1 text-[10px] font-medium text-white/90 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
          {String(current + 1).padStart(2, "0")}
          <span className="text-white/40">/</span>
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
