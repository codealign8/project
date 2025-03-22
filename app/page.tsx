
"use client";  // ✅ Add this at the top

import { useState } from "react";
import Head from "next/head";
import projectsData from "../data/projects.json";

export default function Home() {
  const [projects] = useState(projectsData);

  return (
    <>
      <Head>
        <title>Abhishek Yadav | Portfolio</title>
        <meta name="description" content="Portfolio of Abhishek Yadav, Data Scientist, Machine Learning Expert, and Researcher." />
      </Head>

      {/* Home Section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-10 text-center">
        <h1 className="text-6xl font-extrabold text-blue-400">Abhishek Yadav</h1>
        <p className="text-2xl mt-4 text-gray-300">Data Scientist | Machine Learning | Researcher</p>
        <p className="mt-6 max-w-2xl text-gray-300 leading-relaxed">
          Passionate about deep learning, AI-driven solutions, and real-world AI applications.
        </p>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen p-10 bg-gray-900 text-white">
        <h2 className="text-5xl font-bold text-center mb-10 border-b-4 border-blue-500 pb-4">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-blue-400">{project.title}</h3>
              <p className="mt-2 text-gray-300">{project.description}</p>
              <div className="mt-4">
                {project.liveDemo && (
                  <a href={project.liveDemo} target="_blank" className="text-blue-400 hover:underline">Live Demo</a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" className="ml-4 text-blue-400 hover:underline">GitHub</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-10 text-center">
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-blue-500 pb-4">Contact Me</h2>
        <p className="text-lg text-gray-300">📩 Email: ayabhid78@gmail.com</p>
        <p className="text-lg text-gray-300">🔗 <a href="https://github.com/codealign8" className="text-blue-400 hover:underline">GitHub</a></p>
        <p className="text-lg text-gray-300">🔗 <a href="https://www.linkedin.com/in/abhishek-yadav-756660146" className="text-blue-400 hover:underline">LinkedIn</a></p>
      </section>
    </>
  );
}
