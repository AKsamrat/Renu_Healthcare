import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "081a2add-f083-4d05-ab18-74d7baa4c29a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Message sent successfully!!");
    } else {
      toast.error("Something went wrong. Please try again.");
    }
    event.target.reset();
  };

  return (
    <>
      <div className="sm:w-11/12 m-auto">
        <ToastContainer />

        {/* Hero Section */}
        <div
          className="relative mb-4 h-52 sm:h-96 md:h-[40rem] flex items-center justify-center w-full bg-cover rounded-lg bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("/Contact/contact-hero-1.jpg")`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>
          <h1 className="relative text-4xl font-semibold text-white drop-shadow-lg">
            Contact Us
          </h1>
        </div>

        {/* Input Form and Location */}
        <div className="contact-section w-full mx-4 sm:mx-12 mt-12 mb-12 flex flex-col md:flex-row md:justify-between lg:flex-row lg:justify-around">
          {/* Contact Form */}
          <div className="contact-input md:w-1/2 md:px-4">
            <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">
              Have any questions? We're here to help!
            </h2>
            <form onSubmit={onSubmit} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <input
                name="name"
                className="mb-4 w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                type="text"
                placeholder="Your Name"
                required
              />
              <input
                name="email"
                className="mb-4 w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                type="email"
                placeholder="Your Email"
                required
              />
              <input
                name="subject"
                className="mb-4 w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                type="text"
                placeholder="Subject"
                required
              />
              <textarea
                name="message"
                className="mb-4 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                placeholder="Message"
                required
                rows="4"
              ></textarea>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full rounded-lg p-3 font-semibold text-xl bg-green-500 text-white shadow-md hover:bg-orange-600 hover:scale-105 transition-transform duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Location */}
          <div className="contact-location md:w-1/2 md:px-4 flex justify-center">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com/maps/search/1+branch---479,+(Baspadamka,+Tehsil+Pataudi,+Gurugram,+Haryana+-+122503,+India/@28.3379119,76.7788465,15z/data=!3m1!4b1?entry=ttu"
            >
              <img
                src="/Contact/contact-location.png"
                className="rounded-lg border border-gray-300 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                alt="contact location"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

// GSAP functionalities
gsap.to(".contact-hero h1", {
  y: -100,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".contact-section",
    scroller: "body",
    scrub: 1,
  },
});

export default ContactUs;
