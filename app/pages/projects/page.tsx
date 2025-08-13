// src/components/ProjectsPage.jsx
import React from "react";

const projects = [
  {
    title: "PDF RAG App",
    liveDemo: "",
    github: "https://github.com/prathap024-ctrl/pdf-rag.git",
    stack: "React, Node.js, LangChain, Gemini AI, ChromaDB, PDF-parser",
    overview:
      "Built an AI-powered web app that allows users to upload PDFs and ask questions, generating answers using a RAG (Retrieval-Augmented Generation) pipeline with Gemini AI.",
    features: [
      "Upload and parse PDF files using PDF.js",
      "Chunk content and store embeddings in ChromaDB",
      "Perform similarity search with LangChain and Gemini AI",
      "Generate context-aware answers from retrieved chunks",
      "Supports large file input with chunking & fallback",
    ],
    challenges: [
      "Designing efficient PDF chunking for semantic search",
      "Handling async embedding and retrieval workflows",
      "Ensuring accurate context mapping during RAG pipeline",
    ],
    outcome: [
      "Deepened understanding of RAG pipelines and vector databases",
      "Gained experience with embedding models, PDF parsing, and query optimization using LLMs",
    ],
  },
  {
    title: "Web Search Tool",
    liveDemo: "https://browser-streamlit-02.onrender.com/",
    github: "https://github.com/prathap024-ctrl/browser_streamlit",
    stack: "Next.js, Node.js, LangChain, Google/Bing Search APIs",
    overview:
      "Developed an AI-powered web search interface that integrates search APIs with LLM-based summarization for quick, context-rich answers.",
    features: [
      "Real-time search results from multiple APIs",
      "LLM summarization of top results",
      "Filtering and sorting options",
      "Minimal, mobile-friendly UI",
      "Supports multi-query refinement",
    ],
    challenges: [
      "Integrating multiple search APIs and normalizing data",
      "Handling API rate limits efficiently",
      "Ensuring accurate LLM summarization without hallucinations",
    ],
    outcome: [
      "Improved skills in API integration and query optimization",
      "Enhanced experience in prompt engineering for search summarization",
    ],
  },
  {
    title: "AutoPixel Digital Website",
    liveDemo: "https://autopixel-in.vercel.app/",
    github: "https://github.com/prathap024-ctrl/autopixel.in",
    stack: "Next.js, Tailwind CSS, Framer Motion",
    overview:
      "Designed and developed the official website for AutoPixel Digital, showcasing services, portfolio, and lead generation funnels.",
    features: [
      "Responsive, modern UI with smooth animations",
      "Dedicated service and portfolio sections",
      "Lead capture forms integrated with email automation",
      "SEO-optimized structure for better search rankings",
      "Fast load times with optimized assets",
    ],
    challenges: [
      "Balancing aesthetics with performance optimization",
      "Structuring the site for easy future expansion",
      "Ensuring brand consistency across all pages",
    ],
    outcome: [
      "Delivered a functional and visually appealing website",
      "Boosted brand presence and online credibility for AutoPixel Digital",
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
              {project.github && (
                <a
                  href={project.github}
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
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
