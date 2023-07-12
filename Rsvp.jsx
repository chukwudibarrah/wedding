import { useState, useEffect } from "react";
import couple from "../../images/africancouple.png";
import { motion } from "framer-motion";
import { SendEmail } from "../API";
import Toast from "../components/Toast";
import { toast } from "react-toastify";

export default function Rsvp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attendance, setAttendance] = useState("");
  const [guests, setGuests] = useState("");
  const [message, setMessage] = useState("");
  const [send, setSend] = useState("");

  useEffect(() => {
    if (send) {
      toast.success("Your RSVP has been submitted.");
      setName("");
      setEmail("");
      setAttendance("");
      setGuests("");
      setMessage("");
      setSend();
    }
  }, [name, email, attendance, guests, message, send]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    SendEmail({ name, email, attendance, guests, message, setSend });
    console.log("Email sent...!");
  };

  return (
    <section>
      <Toast />
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
                required
                id="name"
                type="text"
                value={name}
                placeholder="Name"
                className="bg-inherit w-full outline-none bg-left-bottom bg-gradient-to-r from-gold to-gold bg-[length:100%_4px] bg-no-repeat group-hover:bg-[length:0%_4px] transition-all duration-500 ease-out"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="my-7 md:mx-0 mx-10 group transition-all duration-300 ease-in-out">
              <input
                required
                id="email"
                type="email"
                value={email}
                placeholder="Email"
                className="bg-inherit w-full outline-none bg-left-bottom bg-gradient-to-r from-gold to-gold bg-[length:100%_4px] bg-no-repeat group-hover:bg-[length:0%_4px] transition-all duration-500 ease-out"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="my-7 md:mx-0 mx-10 group transition-all duration-300 ease-in-out">
              <select
                required
                id="attendance"
                type="text"
                value={attendance}
                className="bg-inherit w-full outline-none"
                onChange={(e) => setAttendance(e.target.value)}
              >
                <option value="">Will you be attending? </option>
                <option value="attending">Attending</option>
                <option value="not_attending">Not Attending</option>
              </select>
            </div>
            <div className="my-7 md:mx-0 mx-10 group transition-all duration-300 ease-in-out">
              <input
                required
                id="guests"
                type="number"
                value={guests}
                placeholder="Number of guests"
                className="bg-inherit w-full outline-none bg-left-bottom bg-gradient-to-r from-gold to-gold bg-[length:100%_4px] bg-no-repeat group-hover:bg-[length:0%_4px] transition-all duration-500 ease-out"
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>
            <div className="my-7 md:mx-0 mx-10 group transition-all duration-300 ease-in-out">
              <textarea
                id="message"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-inherit w-full outline-none bg-left-bottom bg-gradient-to-r from-gold to-gold bg-[length:100%_4px] bg-no-repeat group-hover:bg-[length:0%_4px] transition-all duration-500 ease-out"
                placeholder="Additional information"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              type="submit"
              className="my-10 md:mx-0 mx-10 uppercase border-8 border-dotted hover:font-extrabold hover:border-double border-gold rounded-full px-6 py-11"
            >
              Submit
            </motion.button>
          </form>
          <img src={couple} className="w-[35rem] " />
        </div>
      </div>
    </section>
  );
}
