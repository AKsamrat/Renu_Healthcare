import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from './Variant';

const Donate = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleChange = event => {
    const { value } = event.target;
    const regex = /^\d{10}$/;
    const isValidPhoneNumber = regex.test(value);
    setPhoneNumber(value);
    setIsValid(isValidPhoneNumber);
  };
  const loadScript = src => {
    return new Promise(resolve => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  const handleDonate = async e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const amounts = form.amounts.value;
    const currency = 'INR';
    const receiptId = '1234567890';

    const donateData = {
      name,
      email,
      phone,
      amounts,
      currency,
      receipt: receiptId,
    };
    console.log(donateData);
    try {
      const response = await fetch('http://localhost:5000/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          amounts,
          currency,
          receipt: receiptId,
        }),
      });

      const order = await response.json();
      console.log('order', order);

      var option = {
        key: process.env.AZORPAY_KEY_ID,
        amounts,
        currency,
        name: 'Web Codder',
        description: 'Test Transaction',
        image: 'https://i.ibb.co/5Y3m33n/test.png',
        order_id: order.id,

        handler: async function (response) {
          const body = { ...response };

          try {
            const validateResponse = await fetch(
              'http://localhost:5000/validate',
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
              }
            );
            const jsonResponse = await validateResponse.json();

            console.log('jsonResponse', jsonResponse);
          } catch (error) {
            console.log(error);
          }
        },
        prefill: {
          name: 'Web Coder',
          email: 'webcoder@example.com',
          contact: '9000000000',
        },
        fallback: { crypto: false },

        notes: {
          address: 'Razorpay Corporate Office',
        },
        theme: {
          color: '#3399cc',
        },
      };
      console.log(window.Razorpay);
      console.log('order', order);

      const res = await loadScript(
        'https://checkout.razorpay.com/v1/checkout.js'
      );

      if (!res) {
        alert('Razropay failed to load!!');
        return;
      }
      var rzp1 = new window.Razorpay(option);
      rzp1.on('payment.failed', function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });

      rzp1.open();
    } catch (error) {
      console.error(error);
      alert('Payment Failed');
    }
    e.target.reset();
  };

  return (
    <>
      <div className="sm:w-11/12 m-auto bg-gray-100">
        {/* Hero Section */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className="relative h-52 sm:h-96 md:h-[40rem] rounded-sm flex flex-col justify-center sm:px-14 lg:px-32 px-5 text-white bg-no-repeat bg-cover opacity-90"
          style={{
            backgroundImage: `url("/Donate/main3.png")`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative w-full lg:w-4/5 content-center space-y-5 text-center">
            <motion.img
              variants={fadeIn('down', 0.8)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }}
              src="/Donate/logo-give.png"
              alt="Donate Logo"
              className="mx-auto"
            />
            <p className="font-bold text-lg md:text-2xl tracking-widest">
              Your support can make a difference! Help us make the world a
              better place.
            </p>
          </div>
        </motion.div>

        {/* Donation Categories */}
        <div className="max-w-7xl mx-auto my-8 px-8">
          <h1 className="text-4xl text-center font-bold text-dGrey hover:text-bPrimary tracking-widest font-serif mb-8">
            Choose Your Donation
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
            <div className="text-center shadow-xl mb-11 rounded-xl overflow-hidden transition-transform transform hover:scale-105">
              <img
                src="/Donate/img1.png"
                className="h-96 object-cover"
                alt="Education"
              />
              <div className="p-4 bg-white">
                <h2 className="text-xl font-bold text-amber-700 py-2">
                  Help Educate Children
                </h2>
                <p className="text-gray-700">
                  Contribute to providing educational resources and
                  opportunities to underprivileged children.
                </p>
              </div>
            </div>
            <div className="text-center shadow-xl mb-11 rounded-xl overflow-hidden transition-transform transform hover:scale-105">
              <img
                src="/Donate/img2.png"
                className="h-96 object-cover"
                alt="Health"
              />
              <div className="p-4 bg-white">
                <h2 className="text-xl font-bold text-amber-700 py-2">
                  Support Health Initiatives
                </h2>
                <p className="text-gray-700">
                  Help us provide essential healthcare services to those in
                  need.
                </p>
              </div>
            </div>
            <div className="text-center shadow-xl mb-11 rounded-xl overflow-hidden transition-transform transform hover:scale-105">
              <img
                src="/Donate/img4.png"
                className="h-96 object-cover"
                alt="Housing"
              />
              <div className="p-4 bg-white">
                <h2 className="text-xl font-bold text-amber-700 py-2">
                  Build Safe Homes
                </h2>
                <p className="text-gray-700">
                  Contribute to building secure and sustainable housing for
                  families in need.
                </p>
              </div>
            </div>
            <div className="text-center shadow-xl mb-11 rounded-xl overflow-hidden transition-transform transform hover:scale-105">
              <img
                src="/Donate/mainimg.png"
                className="h-96 object-cover"
                alt="Food"
              />
              <div className="p-4 bg-white">
                <h2 className="text-xl font-bold text-amber-700 py-2">
                  Provide Nutritious Food
                </h2>
                <p className="text-gray-700">
                  Support initiatives aimed at providing healthy and nutritious
                  food to those in need.
                </p>
              </div>
            </div>
            <div className="text-center shadow-xl mb-11 rounded-xl overflow-hidden transition-transform transform hover:scale-105">
              <img
                src="/Donate/mainimg2.png"
                className="h-96 object-cover"
                alt="Food"
              />
              <div className="p-4 bg-white">
                <h2 className="text-xl font-bold text-amber-700 py-2">
                  Improve Food Security
                </h2>
                <p className="text-gray-700">
                  Help us tackle food insecurity through targeted programs and
                  support.
                </p>
              </div>
            </div>
            <div className="text-center shadow-xl mb-11 rounded-xl overflow-hidden transition-transform transform hover:scale-105">
              <img
                src="/Donate/education.png"
                className="h-96 object-cover"
                alt="Education"
              />
              <div className="p-4 bg-white">
                <h2 className="text-xl font-bold text-amber-700 py-2">
                  Advance Education
                </h2>
                <p className="text-gray-700">
                  Assist in providing educational materials and scholarships to
                  underprivileged students.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Donation Form */}
        <motion.div className="w-full flex items-center justify-center min-h-screen bg-gray-100">
          <motion.div className="relative flex flex-col m-4 space-y-4 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 p-4 md:p-8">
            <motion.div
              variants={fadeIn('down', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }}
              className="flex flex-col justify-center mt-0 p-4 md:p-8"
            >
              <img src="/logo.png" className="h-20 w-20 mx-auto" alt="logo" />
              <h1 className="text-3xl font-bold text-bPrimary text-center mb-4">
                Support Us Today!
              </h1>
              <p className="text-center mb-6 text-gray-600">
                Fill in your details and make a difference. Your contribution
                matters!
              </p>
              <form className="space-y-4" onSubmit={handleDonate}>
                <div className="flex flex-col">
                  <label className="text-md tracking-wider mb-2">Name</label>
                  <input
                    name="name"
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="Full Name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-md tracking-wider mb-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="Email Address"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-md tracking-wider mb-2">
                    Mobile Number
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="Mobile Number"
                    value={phoneNumber}
                    onChange={handleChange}
                  />
                  {!isValid && (
                    <p className="text-red-500 mt-2">
                      Please enter a valid 10-digit phone number.
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label className="text-md tracking-wider mb-2">
                    Donation Amount
                  </label>
                  <input
                    name="amounts"
                    type="number"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="Amount"
                  />
                </div>
                <div className="flex justify-center">
                  <button className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800">
                    Donate Now
                  </button>
                </div>
              </form>
            </motion.div>
            <motion.div
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }}
              className="relative hidden md:block"
            >
              <img
                src="/Donate/donate.png"
                alt="Donation"
                className="w-full h-full object-cover rounded-r-2xl"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Donate;
