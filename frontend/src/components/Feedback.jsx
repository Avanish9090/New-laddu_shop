import axios from "axios";
import React, { useState, useEffect } from "react";

function Feedback() {
  const [msg, setMsg] = useState("");
  const [msg1, setMsg1] = useState("");
  const [fData, setFdata] = useState({
    name: "",
    says: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;

    let oldData = { ...fData };
    oldData[name] = value;
    setFdata(oldData);
  };
  useEffect(() => {
    if (msg) {
      const timer = setTimeout(() => {
        setMsg(""); // Clear the message after 5 seconds
      }, 2000);

      return () => clearTimeout(timer); // Cleanup if component unmounts or msg changes
    }
  }, [msg]);

  const handleSubmit = () => {
    if (fData.name == "" || fData.says == "") {
      setMsg("Oops!fill all the feild");
      return;
    }

    if (fData.says.split(" ").filter((w) => w.trim() !== "").length <= 4) {
      setMsg("Please ! Atleast five words");
      return;
    }
    try {
      axios.post("http://localhost:8000/review", fData);
      setMsg1("Submitted Thanks! For review 😊");
      setFdata({
        name: "",
        says: "",
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div>
        <dialog
          id="feedback_modal"
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box">
            <div className=" flex flex-col items-center justify-center border border-gray-100 rounded shadow-lg  bg-white  space-y-4 text-left">
              <h1 className="text-2xl font-bold text-orange-400">Feedback</h1>
              <p className="text-xl text-red-500 ">{msg}</p>
              <p className="text-xl text-green-500 ">{msg1}</p>
              <h1 className="text-xl my-1">Name:</h1>
              <input
                type="text"
                name="name"
                value={fData.name}
                onChange={handleChange}
                placeholder="Enter your text"
                className="input input-neutral"
              />

              <h1 className="text-xl my-1">What you say:</h1>
              <textarea
                type="text"
                name="says"
                value={fData.says}
                onChange={handleChange}
                placeholder="Enter your text"
                className="input input-neutral h-20"
              />
              <br />
            </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn bg-orange-400">close</button>
              </form>
              <button className="btn mr-2 bg-orange-400" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Feedback;
