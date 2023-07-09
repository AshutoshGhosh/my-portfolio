import React from "react";

import accenture from "../assets/firms/Accenture-logo.png";
import diverse from "../assets/firms/diverse-logo.png";
import smartdata from "../assets/firms/smartdata-logo.png";
import ith from "../assets/firms/ith-logo.png";

const Experience = () => {
  let experiences = [
    {
      name: "Accenture Technology",
      logo: accenture,
      designation: "App/Cloud Support Analyst",
      duration: "Jan 2022 – Present",
      location: "Noida, India",
      jobIncludes: [
        "Collaborated in the entire development lifecycle of web applications using ReactJS and AWS services, contributing as a Software/Application Developer.",
        "Developed responsive and user-friendly UI components, ensuring seamless user interactions and optimal performance.",
        "Implemented data management and integration solutions, leveraging RESTful APIs and modern web technologies.",
        "Worked closely with cross-functional teams to identify project requirements, troubleshoot issues, and deliver high-quality solutions within strict timelines.",
      ],
    },
    {
      name: "Diverselynx India Pvt. Ltd",
      logo: diverse,
      designation: "Senior Software Engineer (MERN)",
      duration: "Jul 2021 – Jan 2022",
      location: "Noida, India",
      jobIncludes: [
        "Led the development of a crypto trading web application, responsible for backend APIs and frontend designs using ReactJS, NodeJS, Kafka, ExpressJs, MongoDB, DynamoDB, and WebSockets.",
        "Collaborated with stakeholders to gather requirements, define project scope, and prioritize feature development.",
        "Implemented real-time data streaming and integration, ensuring seamless synchronization across multiple platforms and devices.",
        "Conducted code reviews, mentored junior developers, and implemented best practices to enhance code quality and team productivity.",
      ],
    },
    {
      name: "SmartData Enterprices Inc",
      logo: smartdata,
      designation: "Associate Delivery Level III",
      duration: "Oct 2020 – Jul 2021",
      location: "Dehradun, India",
      jobIncludes: [
        "Spearheaded the end-to-end development lifecycle of web applications using the MERN stack, taking ownership of various aspects and delivering high-quality solutions.",
        "Designed and implemented scalable architecture, optimizing application performance and ensuring smooth functionality.",
        "Collaborated closely with product owners and stakeholders, translating business requirements into technical specifications.",
        "Mentored and coached junior developers, fostering a collaborative and growth-oriented team environment.",
      ],
    },
    {
      name: "IT Hours Solutions LTD",
      logo: ith,
      designation: "Software Developer",
      duration: "Jul 2019 – Sep 2020",
      location: "Noida, India",
      jobIncludes: [
        "Developed web applications using JavaScript, with a focus on ReactJS, VueJs, and AngularJs for frontend development.",
        "Successfully delivered three mobile applications using React Native and Ionic, incorporating best practices in UI/UX design.",
        "Implemented efficient and secure API endpoints using NodeJS, integrating MongoDB and MySQL databases.",
        "Collaborated with cross-functional teams to analyze requirements, design solutions, and ensure seamless integration of front-end and back-end components.",
      ],
    },
  ];

  return (
    <div name="experience" className="w-full  text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto pt-[100px] p-4 flex flex-col justify-center  w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Experience
          </p>
          <p className="py-6">
            Experienced collaborating with notable companies in web and mobile
            development.
          </p>
        </div>
        {/* Skelton Loader */}
        {/* <div className="shadow-md shadow-[#040c16] rounded-md p-4 max-w-sm w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-700 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div> */}

        {experiences.map((exp, i) => {
          return (
            <div className="w-full rounded-lg shadow-md shadow-[#040c16]  dark:bg-gray-800 dark:border-gray-700 mt-5 hover:scale-105 duration-500">
              <ul
                className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
                id="defaultTab"
                data-tabs-toggle={`#defaultTabContent-${i}`}
                role="tablist"
              >
                <li className="mr-2">
                  <button
                    id={`synosis-tab-${i}`}
                    data-tabs-target={`#synosis-${i}`}
                    type="button"
                    role="tab"
                    aria-controls={`synosis-${i}`}
                    aria-selected="true"
                    className="inline-block p-4 text-blue-600 rounded-tl-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500"
                  >
                    Job Synosis
                  </button>
                </li>
                <li className="mr-2">
                  <button
                    id={`services-tab-${i}`}
                    data-tabs-target={`#services-${i}`}
                    type="button"
                    role="tab"
                    aria-controls={`services-${i}`}
                    aria-selected="false"
                    className="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  >
                    Job Includes
                  </button>
                </li>
              </ul>
              <div id={`#defaultTabContent-${i}`}>
                <div
                  className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 "
                  id={`synosis-${i}`}
                  role="tabpanel"
                  aria-labelledby={`synosis-tab-${i}`}
                >
                  <div className="flex items-center">
                    <div className="hidden md:block w-48 h-full rounded bg-gray-100 mr-5 px-2">
                      <img className=" m-auto" src={exp?.logo} alt="HTML_icn" />
                    </div>
                    <div>
                      <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                        {exp?.name}
                      </h2>
                      <p className="mb-3 text-gray-500 dark:text-gray-400">
                        {exp?.designation} | {exp?.duration} <br />
                        {exp?.location}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
                  id={`services-${i}`}
                  role="tabpanel"
                  aria-labelledby={`services-tab-${i}`}
                >
                  <h2 className="mb-5 text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    These are the accomplishments achieved during the specified
                    timeframe.
                  </h2>
                  {/* <!-- List --> */}
                  <ul
                    role="list"
                    className="space-y-4 text-gray-500 dark:text-gray-400"
                  >
                    {exp?.jobIncludes.map((ji) => {
                      return (
                        <li className="flex space-x-2 items-center">
                          <svg
                            className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                          </svg>
                          <span className="leading-tight">{ji}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
