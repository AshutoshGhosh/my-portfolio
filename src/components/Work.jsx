import React from "react";

import synthesis from "../assets/projects/synthesis.png";
import plantPreFAb from "../assets/projects/plantprefab.png";
import pilkhuwa from "../assets/projects/pilkhuwa.png";
import litiLegal from "../assets/projects/litilegal.png";
import rh from "../assets/projects/rh.png";
import theincircle from "../assets/projects/theIncircle-e.png";

let projects = [
  {
    name: "Synthesis(A/V conferencing portal)",
    url: "https://www.asergiscloud.com/free-trial",
    image: synthesis,
  },
  {
    name: "Plant PreFab",
    url: "https://www.plantprefab.com/",
    image: plantPreFAb,
  },
  {
    name: "Pilkhuwa Handlooms(eStore)",
    // url: "https://www.plantprefab.com/",
    note: "WebURL currently unavailable due to legal reasons.",
    image: pilkhuwa,
  },
  {
    name: "Restoration Hardware",
    url: "https://rh.com/us/en/",
    image: rh,
  },
  {
    name: "LitiLegal",
    // url: "https://www.plantprefab.com/",
    note: "WebURL currently unavailable due to legal reasons.",
    image: litiLegal,
  },
  {
    name: "TheIncircle(Job Portal)",
    url: "https://www.theincircle.com/employerzone/",
    image: theincircle,
  },
];

const Work = () => {
  const goto = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto pt-[100px] p-4 flex flex-col justify-center  w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Work
          </p>
          <p className="py-6">Check out some of my recent works</p>
        </div>
        {/* CArd container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Card */}

          {projects.map((data, i) => {
            return (
              <div
              key={i}
                style={{ backgroundImage: `url(${data.image})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              >
                {/* Hover Effect */}
                <div className="opacity-0 group-hover:opacity-100 duration-100 text-center">
                  <span className="text-2xl font-bold tracking-wider">
                    {data.name}
                  </span>
                  <div className="pt-8 text-center">
                    {data.url ? (
                      <a href="/">
                        <button
                          onClick={() => {
                            goto(data.url);
                          }}
                          className="animate-bounce text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                        >
                          Web URL
                        </button>
                      </a>
                    ) : (
                      <span className="text-sm  text-red-500">{data.note}</span>
                    )}
                    {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
