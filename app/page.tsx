"use client";

import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import anime from "animejs";
import ScrollReveal from "scrollreveal";
import projectsData from "../data/projects.json";

export default function Home() {
  useEffect(() => {
    // Scroll Reveal Animations
    ScrollReveal().reveal(".reveal", {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
      delay: 200,
      easing: "ease-in-out",
      reset: true,
    });

    // Navbar Hover Effects
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("mouseover", () => {
        anime({ targets: link, scale: 1.1, duration: 200, easing: "easeOutQuad" });
      });
      link.addEventListener("mouseout", () => {
        anime({ targets: link, scale: 1, duration: 200, easing: "easeOutQuad" });
      });
    });
  }, []);

  return (
    <>
      <Head>
        <title>Abhishek Yadav | Portfolio</title>
        <meta name="description" content="Portfolio of Abhishek Yadav, Data Scientist, AI Researcher, and ML Expert." />
      </Head>

      {/* Navbar */}
      <nav className="p-4 bg-gray-900 shadow-lg text-white flex justify-center gap-6 fixed w-full top-0 z-50">
        <a href="#projects" className="nav-link text-lg font-medium hover:underline">Projects</a>
        <a href="#blog" className="nav-link text-lg font-medium hover:underline">Blog & Research</a>
        <a href="#contact" className="nav-link text-lg font-medium hover:underline">Contact</a>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white p-10 animate__animated animate__fadeIn">
        <h1 className="text-5xl font-extrabold text-blue-400">Abhishek Yadav</h1>
        <p className="text-xl mt-4 text-gray-300">Data Scientist | AI Researcher | ML Expert</p>
        <p className="mt-6 max-w-2xl text-gray-300 leading-relaxed">
          AI researcher specializing in deep learning, computer vision, and real-world ML applications. Passionate about building AI-driven chatbots, image processing models, and publishing research in hybrid AI systems.
        </p>
        <div className="mt-6 flex gap-4">
          <a href="#projects" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">View My Projects</a>
          <a href="#blog" className="px-6 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition">Read My Blogs</a>
          <a href="#contact" className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">Contact Me</a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen p-10 bg-gray-900 text-white reveal">
        <h2 className="text-5xl font-bold text-center mb-10 border-b-4 border-blue-500 pb-4">Projects</h2>

        <h3 className="text-3xl font-semibold text-blue-400 mb-6">Completed Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.previous.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition">
              <h3 className="text-2xl font-semibold text-blue-400">{project.title}</h3>
              <p className="mt-2 text-gray-300">{project.description}</p>
              <div className="mt-4">
                {project.liveDemo && <a href={project.liveDemo} className="text-blue-400 hover:underline">Live Demo</a>}
                {project.github && <a href={project.github} className="ml-4 text-blue-400 hover:underline">GitHub</a>}
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-3xl font-semibold text-yellow-400 mt-12 mb-6">Ongoing Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.ongoing.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition">
              <h3 className="text-2xl font-semibold text-yellow-400">{project.title}</h3>
              <p className="mt-2 text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="min-h-screen p-10 bg-gray-800 text-white reveal">
        <h2 className="text-5xl font-bold text-center mb-10 border-b-4 border-blue-500 pb-4">Blog & Research</h2>
        <div className="flex justify-center">
          <Link href="https://community.analyticsvidhya.com/u/8c599efa" target="_blank" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Read My Blogs</Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-10 text-center reveal">
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-blue-500 pb-4">Contact Me</h2>
        <p className="text-lg text-gray-300">📩 Email: ayabhid78@gmail.com</p>
        <p className="text-lg text-gray-300">🔗 <a href="https://github.com/codealign8" className="text-blue-400 hover:underline">GitHub</a></p>
        <p className="text-lg text-gray-300">🔗 <a href="https://www.linkedin.com/in/abhishek-yadav-756660146" className="text-blue-400 hover:underline">LinkedIn</a></p>
        <p className="text-lg text-gray-300">📝 <a href="https://community.analyticsvidhya.com/u/8c599efa" className="text-blue-400 hover:underline">Analytics Vidhya Blogs</a></p>
        <p className="text-lg text-gray-300">📊 <a href="https://www.kaggle.com/jhonmac98" className="text-yellow-400 hover:underline">Kaggle Profile</a></p>
      </section>
    </>
  );
}