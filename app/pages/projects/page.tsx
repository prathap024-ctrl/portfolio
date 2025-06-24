// src/components/ProjectsPage.jsx
import React from "react";

const projects = [
  {
    title: "AI Resume Analyzer",
    liveDemo: "https://craft-my-cv-nu.vercel.app/",
    github: "https://github.com/prathap024-ctrl/CraftMyCV.git",
    stack: "React, Node.js, LangChain, Gemini AI, PDF.js",
    overview:
      "Built an AI-powered web tool that parses resumes and offers feedback for ATS optimization.",
    features: [
      "Parses uploaded PDF resumes",
      "Generates basic ATS score using Gemini and LangChain prompts",
      "Provides improvement suggestions",
      "Option to export improved resume",
    ],
    challenges: [
      "Learned how to extract basic text content from PDFs using PDF.js",
      "Structuring prompt responses for clean feedback",
    ],
    outcome: [
      "Gained hands-on experience integrating LLMs with file inputs and scoring logic",
      "Learned how ATS-friendly language and layout work",
    ],
  },
  {
    title: "AI Blog URL to Social Media Post Generator",
    liveDemo: "https://sm-post-generator.vercel.app/",
    github: "https://github.com/prathap024-ctrl/SM-Post-Generator.git",
    stack: "Express.js, LangChain, Gemini AI",
    overview:
      "Tool that converts blog articles into short-form social media content using LLMs.",
    features: [
      "Fetches content from a provided URL",
      "Summarizes blog content and generates posts",
      "Allows tone customization and audience targeting",
      "Supports real-time post editing",
    ],
    challenges: [
      "Parsing HTML content from blogs reliably",
      "Tuning LLM output for brevity and tone",
    ],
    outcome: [
      "Learned how to build step-by-step content pipelines using LangChain to improve output relevance.",
      "Learned to balance UX with generative AI output quality",
    ],
  },
  {
    title: "AI Cold Email Writer",
    liveDemo: "https://flare-mail.vercel.app/",
    github: "https://github.com/prathap024-ctrl/FlareMail.git",
    stack: "Express.js, LangChain, Gemini AI",
    overview:
      "An application that generates personalized cold emails for different job roles and industries.",
    features: [
      "User input-driven email generation",
      "Supports multiple templates and tones",
      "Editable preview before copy/export",
    ],
    challenges: [
      "Avoiding generic or repetitive responses",
      "Maintaining professional and role-specific tone",
    ],
    outcome: [
      "Developed logic for dynamic prompt building",
      "Improved understanding of LLM input-output tuning",
    ],
  },
  {
    title: "Paytm Clone",
    liveDemo: "https://paytm-clone-black.vercel.app/",
    github: "#",
    stack: "React.js, Tailwind CSS",
    overview:
      "Frontend clone of the Paytm interface focusing on visual design and layout replication.",
    features: [
      "Replicated homepage and wallet dashboard",
      "Responsive across devices",
      "Used React components and Tailwind utility classes",
    ],
    challenges: [
      "Maintaining pixel precision",
      "Structuring components for scalability",
    ],
    outcome: [
      "Strengthened UI/UX design skills in React",
      "Practiced mobile-first responsive design",
    ],
  },
];

const ProjectsPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10" id="projects">
      <h1 className="text-4xl font-bold mb-8 text-center">💻 Projects</h1>
      <div className="space-y-16">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-lg p-6 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-setTheme mb-2">
              {project.title}
            </h2>
            <p className="text-sm mb-4 text-setTheme">{project.stack}</p>
            <div className="flex flex-wrap gap-4 mb-4">
              <a
                href={project.liveDemo}
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
            <p className="mb-4">
              <strong>Overview:</strong> {project.overview}
            </p>
            <ul className="mb-4 list-disc list-inside">
              <strong>Features:</strong>
              {project.features.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <ul className="mb-4 list-disc list-inside">
              <strong>Challenges:</strong>
              {project.challenges.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <ul className="list-disc list-inside">
              <strong>Outcome:</strong>
              {project.outcome.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
