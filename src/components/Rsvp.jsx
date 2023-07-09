import { useState } from "react";
import couple from "../../images/africancouple.png";
import { motion } from "framer-motion";

export default function Rsvp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attendance, setAttendance] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAttendanceChange = (e) => {
    setAttendance(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const formData = {
    name,
    email,
    attendance,
  };

  return (
    <section>
      <div className="bg-brown pt-48">
        <div className="text-center flex flex-col items-center justify-center mb-32">
          <h2 className="font-merriweather text-3xl uppercase font-light tracking-widest">
            See you there?
          </h2>
        </div>
        <div className="grid md:grid-flow-col justify-evenly items-center">
          <form onSubmit={handleSubmit}>
            <div className="my-7 md:mx-0 mx-10 group transition-all duration-300 ease-in-out">
              <input
                type="text"
                placeholder="Name"
                className="bg-inherit w-full outline-none bg-left-bottom bg-gradient-to-r from-gold to-gold bg-[length:100%_4px] bg-no-repeat group-hover:bg-[length:0%_4px] transition-all duration-500 ease-out"
                onChange={handleNameChange}
              />
            </div>
            <div className="my-7 md:mx-0 mx-10 group transition-all duration-300 ease-in-out">
              <input
                type="email"
                placeholder="Email"
                className="bg-inherit w-full outline-none bg-left-bottom bg-gradient-to-r from-gold to-gold bg-[length:100%_4px] bg-no-repeat group-hover:bg-[length:0%_4px] transition-all duration-500 ease-out"
                onChange={handleEmailChange}
              />
            </div>
            <div className="my-7 md:mx-0 mx-10 group transition-all duration-300 ease-in-out">
              <select
                type="text"
                className="bg-inherit w-full outline-none bg-left-bottom bg-gradient-to-r from-gold to-gold bg-[length:100%_4px] bg-no-repeat group-hover:bg-[length:0%_4px] transition-all duration-500 ease-out"
                onChange={handleAttendanceChange}
              >
                <option value="">Will you be attending? </option>
                <option value="attending">Attending</option>
                <option value="not_attending">Not Attending</option>
              </select>
            </div>
            <div className="my-7 md:mx-0 mx-10 group transition-all duration-300 ease-in-out">
              <input
                type="number"
                placeholder="Number of attendees"
                className="bg-inherit w-full outline-none bg-left-bottom bg-gradient-to-r from-gold to-gold bg-[length:100%_4px] bg-no-repeat group-hover:bg-[length:0%_4px] transition-all duration-500 ease-out"
                onChange={handleNameChange}
              />
            </div>
            <div className="my-7 md:mx-0 mx-10 group transition-all duration-300 ease-in-out">
              <textarea
                type="text"
                className="bg-inherit w-full outline-none bg-left-bottom bg-gradient-to-r from-gold to-gold bg-[length:100%_4px] bg-no-repeat group-hover:bg-[length:0%_4px] transition-all duration-500 ease-out"
                placeholder="Additional information"
              ></textarea>
            </div>
            <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            type="submit" 
            className="my-10 md:mx-0 mx-10 uppercase border-8 border-dotted hover:font-extrabold hover:border-double border-gold rounded-full px-6 py-11">
              Submit
            </motion.button>
          </form>
          <img src={couple} className="w-[35rem] " />
        </div>
      </div>
    </section>
  );
}