import React from "react";

import { TbMapShare } from "react-icons/tb";
import { FaRegClock } from "react-icons/fa";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Event = () => {
  return (
    <>
      {/* hero section */}
      <div className="bg-gray-100 m-auto sm:w-11/12">
        <div
          className="mb-4 contact-hero flex items-center justify-center w-full h-52 sm:h-96  md:h-[40rem] rounded-sm bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("/Events/event-hero-modified.jpg")`,
          }}
        >
          <h1 className="event-heading text-6xl font-semibold text-white ">
            Events
          </h1>
        </div>
        {/* Events */}
        <div className="events-box flex flex-wrap mx-10 mt-20 space-y-2 mb-20">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

/* Single event */
const Card = () => {
  return (
    <>
      <div className="card w-full md:w-1/2 lg:w-1/3 p-4  bg-white rounded-lg shadow-md overflow-hidden">
        {/* event image */}
        <div className="h-40 md:h-48 lg:h-56 ">
          <img
            className="object-cover w-full h-full"
            src="/Events/Medical-Camp.jpg"
            alt="Medical-Camp"
          />
        </div>
        {/* event discription */}
        <div className="flex flex-col justify-around h-40 md:h-48 lg:h-56 p-4">
          <p className="text-sm">Sep. 10, 2018</p>
          <h3 className="text-xl font-semibold">World Wide Donation</h3>
          <div className="flex justify-between">
            <div className="flex ">
              <FaRegClock className="text-orange-500 w-5 h-5 mr-2" />
              <p className="event-time text-sm">10:30AM-03:30PM</p>
            </div>
            <div className="flex">
              <TbMapShare className="text-orange-500 w-6 h-6 mr-2" />
              <p className="event-venue text-sm">Venue:</p>
            </div>
          </div>
          <p className="event-content">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
        </div>
      </div>
    </>
  );
};

//gsap functionalites
gsap.from(".card", {
  y: 20,
  opacity: 0,
  duration: 1,
  scale: 0.2,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    scrub: 1,
  },
});

gsap.to(".event-heading", {
  y: -100,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".events-box",
    scroller: "body",
    scrub: 1,
  },
});

export default Event;
