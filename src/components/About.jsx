import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#08192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid  sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Ashutosh, nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p>
              I am a skilled and detail-oriented Software Engineer specializing
              in web development, with a focus on JavaScript technologies. With
              expertise in ReactJS, React Native, Vue.js, and Ionic, I create
              robust and user-friendly web and mobile applications. My backend
              proficiency includes Node.js and GraphQL, enabling me to build
              scalable server-side solutions. Experienced in MongoDB, I utilize
              it for efficient data storage and retrieval. Holding a Bachelor of
              Technology degree in Computer Science, I combine strong
              theoretical knowledge with practical experience. Proactive and
              dedicated, I consistently deliver high-quality projects within
              deadlines. Let's connect and collaborate on remarkable software
              solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
