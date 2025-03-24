
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ProjectCard({ title }: { title: string }) {
  // Define the type explicitly for useRef
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const card = cardRef.current;
    
    // Ensure card is not null before adding event listeners
    if (!card) return;

    const handleMouseEnter = () => gsap.to(card, { scale: 1.1, duration: 0.3 });
    const handleMouseLeave = () => gsap.to(card, { scale: 1, duration: 0.3 });

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup event listeners to avoid memory leaks
    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={cardRef} className="w-64 h-40 bg-white shadow-lg p-5 text-center">
      {title}
    </div>
  );
}
