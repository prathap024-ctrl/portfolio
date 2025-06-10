"use client";

import { PaperclipIcon } from "lucide-react";
import Link from "next/link";

const about = {
  title: {
    fullname: "Full Name",
    role: "Role",
    mobile: "Phone",
    email: "Email",
    about: "About",
    objective: "Objective",
    attachments: "Attachments",
  },
  info: {
    name: "Prathap L",
    role: "Full Stack Developer",
    mobile: "+91 8105871804",
    email: "prathaplokesh04@gmail.com",
    about:
      "I’m a full-stack developer with a focus on building fast, scalable web apps. Skilled in the MERN stack and various modern frameworks and libraries. I blend clean UI with smart backend logic to deliver seamless user experiences. Currently building tools, products, and digital solutions that make an impact.",
    objective:
      "To build a career in a growing organization, where I can get the opportunities to prove my abilities by accepting challenges, fulfilling the organizational goal and climb the career ladder through continuous learning and commitment.",
    attachments: "Resume.pdf",
  },
};

const Objective = () => {
  return (
    <div className="w-full h-auto border-b-2 border-t-2 border-settheme" id="objective">
      <div className="w-[90%] mx-auto py-5 ">
        <div>
          <div className="px-4 sm:px-0">
            <h3 className="text-base/7 font-semibold text-setTheme">
              Personal details and application.
            </h3>
          </div>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium text-setTheme">
                  {about.title.fullname}
                </dt>
                <dd className="mt-1 text-sm/6 text-setTheme sm:col-span-2 sm:mt-0">
                  {about.info.name}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium text-setTheme">
                  {about.title.role}
                </dt>
                <dd className="mt-1 text-sm/6 text-setTheme sm:col-span-2 sm:mt-0">
                  {about.info.role}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium text-setTheme">
                  {about.title.mobile}
                </dt>
                <dd className="mt-1 text-sm/6 text-setTheme sm:col-span-2 sm:mt-0">
                  {about.info.mobile}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium text-setTheme">
                  {about.title.email}
                </dt>
                <dd className="mt-1 text-sm/6 text-setTheme sm:col-span-2 sm:mt-0">
                  {about.info.email}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium text-setTheme">
                  {about.title.about}
                </dt>
                <dd className="mt-1 text-sm/6 text-setTheme sm:col-span-2 sm:mt-0">
                  {about.info.about}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium text-setTheme">
                  {about.title.objective}
                </dt>
                <dd className="mt-1 text-sm/6 text-setTheme sm:col-span-2 sm:mt-0">
                  {about.info.objective}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium text-setTheme">
                  {about.title.attachments}
                </dt>
                <dd className="mt-2 text-sm text-setTheme sm:col-span-2 sm:mt-0">
                  <ul
                    role="list"
                    className="divide-y divide-gray-100 rounded-md border border-gray-200"
                  >
                    <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                      <div className="flex w-0 flex-1 items-center">
                        <PaperclipIcon
                          aria-hidden="true"
                          className="size-5 shrink-0 text-gray-400"
                        />
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          <span className="truncate font-medium">
                            {about.info.attachments}
                          </span>
                        </div>
                      </div>
                      <div className="ml-4 shrink-0">
                        <Link
                          href="https://docs.google.com/document/d/1OhWam8qt1aHFI8sXRK0D0PvzN8v7zO-oTXtlsoPVKfE/edit?usp=sharing"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Download
                        </Link>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objective;
