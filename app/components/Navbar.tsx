
import Link from "next/link";
import { useEffect } from "react";
import anime from "animejs";

export default function Navbar() {
  useEffect(() => {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("mouseover", () => {
        anime({
          targets: link,
          scale: 1.1,
          duration: 200,
          easing: "easeOutQuad",
        });
      });
      link.addEventListener("mouseout", () => {
        anime({
          targets: link,
          scale: 1,
          duration: 200,
          easing: "easeOutQuad",
        });
      });
    });
  }, []);

  return (
    <nav className="p-4 bg-white shadow-md flex gap-6 justify-center">
      <Link className="nav-link text-lg font-medium hover:underline" href="#projects">
        Projects
      </Link>
      <Link className="nav-link text-lg font-medium hover:underline" href="#blog">
        Blog & Research
      </Link>
    </nav>
  );
}
