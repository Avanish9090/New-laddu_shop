import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import axios from "axios";

function Contact() {
  const [msg, setMsg] = useState("");
  const [msg1, setMsg1] = useState("");
  const [concData, setConcdata] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  useEffect(() => {
    if (msg) {
      const timer = setTimeout(() => {
        setMsg(""); // Clear the message after 5 seconds
      }, 2000);

      return () => clearTimeout(timer); // Cleanup if component unmounts or msg changes
    }
  }, [msg]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    let oldData = { ...concData };
    oldData[name] = value;
    setConcdata(oldData);
  };

  const handleSubmit = () => {
    if (
      concData.name == "" ||
      concData.email == "" ||
      concData.number == "" ||
      concData.message == ""
    ) {
      setMsg("Please! fill the all feild");
      return;
    }

    axios.post("http://localhost:8000/contacts", concData);
    setMsg1("Message send successfully !");

    setConcdata({
      name: "",
      email: "",
      number: "",
      message: "",
    });
  };
  return (
    <div>
      <Header />

      <div className="hero bg-base-200 min-h-screen mt-25">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Reach Out to us!</h1>
            <p className="py-6">
              We'd love to hear from you! Send us a message and we'll get back
              to you as soon as possible.
            </p>
            <h1 className="text-xl font-bold">Our Details:</h1>
            <p>Find us, call us, or connect with us on social media.</p>
            <p>
              {" "}
              <FaLocationDot />
              <span className="font-bold">Address:</span>Get Saddu Ghurpur,
              Prayagraj, Uttar Pradesh, 212107 India
            </p>
            <p className="mt-4">
              <MdMarkEmailUnread />
              <span className="font-bold">Email:</span>
              <a className="text-blue-400 underline">info.getladdu@gmail.com</a>
            </p>
            <p>
              <FaPhoneAlt />
              <span className="font-bold">Phone:</span>
              <a className="text-blue-400 underline">+91 9118997628</a>-
              Mon-Sat, 9 AM – 6 PM IST
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <p className="text-xl text-red-400">{msg}</p>
              <p className="text-xl text-green-400">{msg1}</p>
              <feildset className="fieldset">
                <label className="label text-xl">Name</label>
                <input
                  type="text"
                  name="name"
                  value={concData.name}
                  onChange={handleChange}
                  className="input"
                  placeholder="Enter Your name"
                />

                <label className="label text-xl">Email</label>
                <input
                  type="email"
                  name="email"
                  value={concData.email}
                  onChange={handleChange}
                  className="input"
                  placeholder="Example@123"
                />

                <label className="label text-xl">Number</label>
                <input
                  type="Number"
                  name="number"
                  value={concData.number}
                  onChange={handleChange}
                  className="input"
                  placeholder="+91 9999999999"
                />

                <label className="label text-xl">Message</label>
                <textarea
                  type="text"
                  name="message"
                  value={concData.message}
                  onChange={handleChange}
                  className="input h-20"
                  placeholder="Enter your enquiry.."
                />

                <button className="btn btn-neutral mt-4" onClick={handleSubmit}>
                  Send Message
                </button>
              </feildset>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
