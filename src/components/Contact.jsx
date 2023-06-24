import React, { useRef, useState } from "react";
import swal from "sweetalert";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const submitForm = (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (form.current.email.value && form.current.email.value.match(regex)) {
      setLoading(true);
      let params = {
        name: form.current.name.value,
        email: form.current.email.value,
        message: form.current.message.value,
      };
      emailjs
        .send(
          process.env.EMAILJS_SERVICE_ID,
          process.env.EMAILJS_TEMPLATE_ID,
          params,
          process.env.EMAILJS_PUBLIC_KEY
        )
        .then(
          (response) => {
            swal("Sent!", "Email sent successfully!", "success");
            setLoading(false);
            form.current.name.value = "";
            form.current.email.value = "";
            form.current.message.value = "";
            console.log("SUCCESS!", response.status, response.text);
          },
          (err) => {
            setLoading(false);
            swal("Oops!", "Something went wrong!", "error");
            console.log("FAILED...", err);
          }
        );
    } else {
      swal("Oops!", "Please type correct Email!", "error");
    }
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
        <input type="hidden" name="form-name" value="contact v1" />
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
        <button
          type="submit"
          disabled={loading}
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
        >
          {loading ? <div class="loader"></div> : "Let's Collaborate"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
