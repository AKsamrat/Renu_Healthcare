import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="sm:w-11/12 m-auto">
      {/* Main section */}
      <div className="bg-gray-100 overflow-hidden">
        {/* Hero Image Section */}
        <div
          className="mb-4 flex rounded-sm items-center h-52 sm:h-96 md:h-[40rem] justify-center w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("/About-img/about-page-img-1.jpg")`,
          }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
            About Us
          </h1>
        </div>

        {/* Content Section */}
        <div id="2" className="lg:px-20 lg:flex my-24 sm:mx-4 overflow-hidden">
          <div className="lg:w-1/2 px-4">
            <img
              className="w-full rounded-lg shadow-lg"
              src="./About-img/about-page-img-2.jpg"
              alt="About us"
            />
          </div>

          <div className="lg:w-1/2 px-4 mt-6 lg:mt-0">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Welcome To Our Welfare Organization Established Since{' '}
              <span className="text-green-600">2015</span>
            </h3>
            <p className="mt-4 text-md md:text-lg text-gray-600 leading-relaxed">
              Our mission is to create a world where everyone has access to
              basic human rights, education, healthcare, and opportunities for
              sustainable livelihoods. We envision empowered communities working
              together to overcome poverty, injustice, and environmental
              degradation, fostering a global society built on dignity,
              equality, and compassion.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div
          id="3"
          className="lg:px-20 flex flex-col md:flex-row justify-center my-12 mx-4 gap-6 overflow-hidden"
        >
          <div className="bg-gradient-to-br from-green-500 to-teal-500 text-white lg:w-1/3 p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-semibold">Served Over</h3>
            <p className="text-4xl font-bold mt-2">1,432,804</p>
            <p className="mt-2 text-lg">
              Children in 190 countries around the world
            </p>
          </div>
          <div className="bg-gradient-to-br from-teal-400 to-blue-500 text-white lg:w-1/3 p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-semibold">Donate Money</h3>
            <p className="mt-2 text-lg opacity-80">
              Your contributions make a difference. Even small donations can
              have a significant impact.
            </p>
            <div className="mt-8">
              <Link
                to={'/Donate'}
                className="mt-4 bg-white text-teal-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                Donate Now
              </Link>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-400 to-indigo-500 text-white lg:w-1/3 p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-semibold">Be a Volunteer</h3>
            <p className="mt-2 text-lg opacity-80">
              Join us in making a difference. Your time and skills can help us
              achieve our mission.
            </p>
            <div className="mt-8">
              <Link
                to={'/Donate'}
                className="mt-4 bg-white text-teal-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                Volunteer
              </Link>
            </div>
          </div>
        </div>

        {/* Latest Donations Section */}
        <div
          id="4"
          className="lg:px-20 flex flex-col items-center my-20 mx-4 overflow-hidden"
        >
          <h3 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Latest Donations
          </h3>
          <p className="my-8 text-center text-lg text-gray-600 opacity-70">
            Far away, behind the word mountains, far from the countries Vokalia
            and Consonantia, live the blind texts.
          </p>
        </div>

        {/* Reviews Section */}
        <div
          id="5"
          className="lg:px-20 flex flex-col md:flex-row gap-6 my-10 mx-4 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center bg-white mb-8 shadow-lg rounded-lg p-6">
            <img
              className="w-16 h-16 rounded-full mr-4"
              src="./About-img/dp2.jpeg"
              alt="Himanshu"
            />
            <div>
              <p className="text-xl font-semibold">Himanshu</p>
              <p className="text-gray-500">Donated Just Now</p>
              <p className="text-lg mt-2">
                Donated <span className="text-green-600">₹500</span> for
              </p>
              <button className="mt-2 text-teal-600 underline">
                Children's Needs Food
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center mb-8  bg-white shadow-lg rounded-lg p-6">
            <img
              className="w-16 h-16 rounded-full mr-4"
              src="./About-img/dp3.jpg"
              alt="Geetika"
            />
            <div>
              <p className="text-xl font-semibold">Geetika</p>
              <p className="text-gray-500">Donated Just Now</p>
              <p className="text-lg mt-2">
                Donated <span className="text-green-600">₹300</span> for
              </p>
              <button className="mt-2 text-teal-600 underline">
                Children's Needs Food
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center mb-8  bg-white shadow-lg rounded-lg p-6">
            <img
              className="w-16 h-16 rounded-full mr-4"
              src="./About-img/dp1.jpeg"
              alt="Farhan"
            />
            <div>
              <p className="text-xl font-semibold">Farhan</p>
              <p className="text-gray-500">Donated Just Now</p>
              <p className="text-lg mt-2">
                Donated <span className="text-green-600">₹400</span> for
              </p>
              <button className="mt-2 text-teal-600 underline">
                Children's Needs Food
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center bg-white mb-8 shadow-lg rounded-lg p-6">
            <img
              className="w-16 h-16 rounded-full mr-4"
              src="./About-img/dp2.jpeg"
              alt="Himanshu"
            />
            <div>
              <p className="text-xl font-semibold">Himanshu</p>
              <p className="text-gray-500">Donated Just Now</p>
              <p className="text-lg mt-2">
                Donated <span className="text-green-600">₹500</span> for
              </p>
              <button className="mt-2 text-teal-600 underline">
                Children's Needs Food
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
