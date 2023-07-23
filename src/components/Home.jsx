import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "MERN Stack Dev...", "Full Stack Developer"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div name="home" className="w-full h-screen bg-[#08192f] ">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Ashutosh Ghosh
        </h2>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a <span ref={el}></span>
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Seeking a growth-oriented career to contribute skills, enhance
          experience, and embrace continuous learning in a collaborative
          environment. Dedicated to personal and professional development for
          shared success.
        </p>
        <div>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="w-[160px] cursor-pointer text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 "
          >
            View Work{" "}
            <span className="group-hover:rotate-90 duration-300">
              {" "}
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
