import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full md:h-screen bg-[#0a192f] flex justify-center items-center  pt-[100px] p-4"
    >
      <form
        action="https://getform.io/f/a2dda926-5b2a-464a-bf7f-5865cfc508d8"
        method="POST"
        className="flex flex-col max-w-[600px] w-full "
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below OR shoot me an email -
            ghoshashutosh01@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          name="email"
          placeholder="Email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows={10}
          placeholder="Message"
        ></textarea>
        <button type="submit" className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
