import React, { useRef, useState } from "react";
import swal from "sweetalert";
import emailjs from "@emailjs/browser";
import SectionHeading from "./ui/SectionHeading";
import GradientOrbs from "./ui/GradientOrbs";

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
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          params,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          (response) => {
            swal("Sent!", "Email sent successfully!", "success");
            setLoading(false);
            form.current.name.value = "";
            form.current.email.value = "";
            form.current.message.value = "";
          },
          (err) => {
            setLoading(false);
            swal("Oops!", "Something went wrong!", "error");
            console.log("FAILED...", err);
          }
        );
    } else {
      swal("Oops!", "Please type a correct email!", "error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-line bg-white/5 px-4 py-3.5 text-heading placeholder:text-muted/70 outline-none transition-all duration-300 focus:border-accent-violet focus:ring-2 focus:ring-accent-violet/40";

  return (
    <section
      name="contact"
      className="relative flex w-full items-center justify-center overflow-hidden bg-bg section-pad px-6"
    >
      <GradientOrbs className="opacity-60" />

      <div className="relative z-10 w-full max-w-2xl">
        <SectionHeading
          eyebrow="Let's talk"
          title="Contact"
          subtitle="Submit the form below, email ghoshashutosh01@gmail.com, or connect with me on LinkedIn!"
          align="center"
        />

        <form
          method="POST"
          name="contact v1"
          ref={form}
          onSubmit={submitForm}
          className="mt-12 flex flex-col gap-4 rounded-3xl glass p-6 sm:p-8"
        >
          <input type="hidden" name="form-name" value="contact v1" />
          <input
            className={inputClass}
            type="text"
            name="name"
            placeholder="Your name"
          />
          <input
            className={inputClass}
            type="email"
            name="email"
            placeholder="Your email"
          />
          <textarea
            className={inputClass}
            name="message"
            rows={6}
            placeholder="Your message"
          />
          <button
            type="submit"
            disabled={loading}
            className="mt-2 flex items-center justify-center rounded-full bg-accent-gradient px-6 py-3.5 font-semibold text-white shadow-glow transition-transform duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? <div className="loader" /> : "Let's Collaborate"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
