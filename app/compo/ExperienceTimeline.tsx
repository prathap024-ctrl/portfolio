"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MapPinIcon } from "lucide-react";

const ExperienceTimeline = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const experiences = [
    {
      id: 1,
      companyName: "NoxAlgo LLP",
      jobTitle: "Content Writer - Internship",
      startDate: "Nov 2024",
      endDate: "Feb 2025",
      location: "Remote",
      description: [
        "Research and Topic Development: Conducted in-depth research on assigned topics to create engaging and informative content, ensuring accuracy and relevance for the target audience.",
        "Content Creation: Wrote and edited articles, blog posts, or social media content tailored to the company’s tone and style guidelines, meeting deadlines consistently.",
        "Collaboration and Feedback: Worked remotely with team members, incorporating feedback from editors or supervisors to refine content and improve writing quality.",
      ],
      companyLogo: "",
    },
    {
      id: 2,
      companyName: "Saandipini Hi-tech School",
      jobTitle: "System Administrator",
      startDate: "July 2023",
      endDate: "Jan 2024",
      location: "Nagadevanahalli Bengaluru",
      description: [
        "Managed WordPress websites and social media platforms.",
        "Promoted posts on social media to drive engagement.",
        "Developed creative social media posts that enhanced brand visibility.",
        "Monitored system health and optimized performance.",
      ],
      companyLogo: "",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 border-t-2 border-b-2 border-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Professional Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block w-0.5 bg-gray-200 absolute h-full left-1/2 transform -translate-x-1/2"></div>

          {/* Experience cards */}
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`mb-8 flex justify-between items-center w-full ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              } md:flex`}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
            >
              <div className="w-full md:w-5/12">
                <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {experience.jobTitle}
                      </h3>
                      <p className="text-gray-600 font-medium">
                        {experience.companyName}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-500 text-sm">
                      {experience.startDate} - {experience.endDate}
                    </p>
                    <div className="flex items-center text-gray-500 text-sm mt-1">
                      <MapPinIcon className="mr-1" />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {experience.description.map((item, idx) => (
                      <li key={idx} className="text-gray-600 text-sm">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="hidden md:block w-6 h-6 absolute left-1/2 transform -translate-x-1/2 bg-blue-600 rounded-full border-4 border-white shadow"></div>
            </div>
          ))}
        </div>

        {experiences.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No experience entries available
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
