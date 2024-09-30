import gsap from "gsap";
import { useEffect, useRef } from "react";
import React from "react";

const Home = () => {
  const carouselRef = useRef(null); // to ref particular div
  const volunteerCarouselRef = useRef(null);

  // GSAP image carousel animation
  useEffect(() => {
    const images = carouselRef.current.children;
    const timeline = gsap.timeline({ repeat: -1 });

    gsap.set(images, { opacity: 0 });
    gsap.set(images[0], { opacity: 1 });

    for (let i = 0; i < images.length; i++) {
      const nextImage = images[(i + 1) % images.length];
      timeline.to(images[i], { opacity: 0, duration: 1, delay: 2 });
      timeline.to(nextImage, { opacity: 1, duration: 1 });
    }
  }, []);

  // GSAP volunteer carousel animation
  useEffect(() => {
    const images = volunteerCarouselRef.current.children;
    const timeline = gsap.timeline({ repeat: -1 });

    gsap.set(images, { opacity: 0 });
    gsap.set(images[0], { opacity: 1 });

    for (let i = 0; i < images.length; i++) {
      const nextImage = images[(i + 1) % images.length];
      timeline.to(images[i], { opacity: 0, duration: 1, delay: 2 });
      timeline.to(nextImage, { opacity: 1, duration: 1 });
    }
  }, []);

  return (
    <div className="bg-gray-100 pb-10">
      {/* Main carousel section */}
      <div className="w-11/12 mx-auto my-6">
        <div
          ref={carouselRef}
          className="h-64 sm:h-96 md:h-[40rem] relative overflow-hidden rounded-lg shadow-lg bg-gradient-to-r from-blue-500 via-green-600 to-purple-700"
        >
          {[...Array(8).keys()].map((idx) => (
            <img
              key={idx}
              src={`./HomepageImages/Corousel/Home${idx + 1}.jpg`}
              alt={`slide-${idx}`}
              className="absolute inset-0 object-cover w-full h-full opacity-0 transition-opacity duration-1000 ease-in-out"
            />
          ))}
        </div>
      </div>

      {/* Donation, Volunteer, Sponsorship section */}
      <div className="w-11/12 mx-auto grid gap-8 grid-cols-1 md:grid-cols-3 text-center py-10">
        {[{
          title: "Make a Donation",
          image: "donation.gif",
          description: "Your donation holds the power to create ripples of hope and transform lives.",
        },
        {
          title: "Become a Volunteer",
          image: "volunteer.gif",
          description: "Join hands with us to paint a brighter tomorrow, one act of service at a time.",
        },
        {
          title: "Sponsorship",
          image: "sponsor.gif",
          description: "Invest in communities and create a legacy of empowerment and transformation.",
        }].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              className="w-24 h-24 mb-4 border-4 border-green-600 p-2 rounded-full shadow-lg"
              src={`./HomepageImages/ThreeSlogans/${item.image}`}
              alt={item.title}
            />
            <h2 className="text-2xl font-semibold mb-2 text-green-500">{item.title}</h2>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Volunteer Ideas Form */}
      <div className="w-11/12 mx-auto bg-white rounded-lg shadow-lg overflow-hidden my-8">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-green-500">
              Share Your Volunteering Ideas
            </h3>
            <form
              className="space-y-4"
              action="mailto:info@admedusociety.org"
              method="post"
              encType="text/plain"
            >
              <input
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                type="text"
                name="Name"
                placeholder="Your Name"
                required
              />
              <input
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                type="email"
                name="Mail"
                placeholder="Your Email-ID"
                required
              />
              <textarea
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                name="Feedback"
                placeholder="Your Volunteering Ideas"
                rows="5"
                required
              />
              <div className="flex justify-between">
                <input
                  className="bg-green-600 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-green-500 transition"
                  type="Submit"
                  value="Send"
                />
                <input
                  className="bg-red-600 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-red-700 transition"
                  type="reset"
                  value="Reset"
                />
              </div>
            </form>
          </div>

          <div className="relative h-64 md:h-auto" ref={volunteerCarouselRef}>
            {[...Array(7).keys()].map((idx) => (
              <img
                key={idx}
                src={`./HomepageImages/volunteerform/volunteer${idx + 1}.jpg`}
                alt={`volunteer-${idx}`}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000 ease-in-out"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-11/12 mx-auto bg-gray-100 rounded-lg shadow-lg py-10 my-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-800">What People Are Saying</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[{
            name: "John Doe",
            testimonial: "The organization has truly transformed our community. I'm proud to be a part of such a meaningful cause.",
          },
          {
            name: "Jane Smith",
            testimonial: "Volunteering here has been one of the most rewarding experiences of my life. The team is fantastic!",
          },
          {
            name: "Sam Wilson",
            testimonial: "A wonderful place to donate and support. Every contribution makes a significant impact.",
          
          }].map((testi, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 transition-transform transform hover:scale-105 hover:shadow-xl"
            >
             
              <p className="text-gray-600 mb-2 text-center">{testi.testimonial}</p>
              <p className="font-semibold text-green-500">{testi.name}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;
