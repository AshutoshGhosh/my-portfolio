import React, { useRef } from "react";
import swal from "sweetalert";

const Contact = () => {
  const form = useRef();

  const submitForm = (e) => {
    e.preventDefault();
    // window.Email.send({
    //   SecureToken: "1fc9621a-1a88-4a0e-8fa2-60b2b2dc3891",
    //   To: "ghoshashutosh01@gmail.com",
    //   From: "ghoshashutosh1@gmail.com",
    //   Subject: "My Portfolio || Contact FORM",
    //   Body: `<p>name : ${form.current.name.value}</p><br /><p>name : ${form.current.email.value}</p><br /><p>name : ${form.current.message.value}</p><br />`,
    // })
    //   .then((message) => {
    //     swal("Sent!", `Email sent successfully!!`, "success");
    setTimeout(() => {
      form.current.name.value = "";
      form.current.email.value = "";
      form.current.message.value = "";
    }, 1000);

    //     console.log("Email sent successfully", message);
    //   })
    //   .catch((error) => {
    //     swal("Oops!", `Something went wrong!!`, "error");
    //     console.error("Error sending email", error);
    //   });
  };
  return (
    <div
      name="contact"
      className="w-full md:h-screen bg-[#0a192f] flex justify-center items-center  pt-[100px] p-4"
    >
      <form
        // action="https://getform.io/f/a2dda926-5b2a-464a-bf7f-5865cfc508d8"
        method="POST"
        name="contact v1"
        ref={form}
        onSubmit={submitForm}
        className="flex flex-col max-w-[600px] w-full "
        netlify
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
        <input type="hidden" name="form-name" value="contact v1" />
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
        <button
          type="submit"
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
