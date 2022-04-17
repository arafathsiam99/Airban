import React, { useState } from 'react';
import emailjs from "@emailjs/browser";
const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    const handleEmailSend = () => {
      console.log(templateParams);
      emailjs
        .send(
          "service_zx2u09n",
          "template_sscvhgv",
          templateParams,
          "yLCysxKqY7Yy2hj7D"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    }; 
    return (
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-coolGray-800 dark:text-coolGray-100">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl text-blue-800">
              Let's talk!
            </h2>
          </div>
          <img
            src="https://i.ibb.co/YZZrJcP/logo-cassavania.png"
            alt=""
            className="p-6 h-52 md:h-64"
          />
        </div>
        <form
          novalidate=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div>
            <label for="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              onBlur={(e) => setName(e.target.value)}
              placeholder="Enter Your Full Name Here"
              className="w-full p-3 rounded dark:bg-coolGray-800 border-2"
            />
          </div>
          <div>
            <label for="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              onBlur={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email Here"
              className="w-full p-3 rounded dark:bg-coolGray-800 border-2"
            />
          </div>
          <div>
            <label for="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              onBlur={(e) => setMessage(e.target.value)}
              rows="3"
              placeholder="Enter Your Message Here"
              className="w-full p-3 rounded dark:bg-coolGray-800 border-2"
            ></textarea>
          </div>
          <button
            onClick={handleEmailSend}
            className="w-1/2 p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-orange-500 dark:text-coolGray-900"
          >
            Send Message
          </button>
        </form>
      </div>
    );
};

export default Contact;