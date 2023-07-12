import { useState } from "react";
import axios from "axios";
import couple from "../../images/africancouple.png";
import { motion } from "framer-motion";
import Toast from "../components/Toast";
import { ToastContainer, toast } from 'react-toastify';
import Modal from "../components/Modal";

export default function Rsvp() {
  const [modalOpen, setModalOpen] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attendance: "",
    guests: "",
    message: "",
  });

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonLoading(true);
    try {
      await axios.post("http://localhost:3001/api/sendmail", formData);
      setModalOpen(true)
      setButtonLoading(false);
      setFormData({
        name: "",
        email: "",
        attendance: "",
        guests: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting RSVP:", error);
      toast("Error submitting RSVP. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <section>
      <div className="bg-brown pt-48">
        <div className="text-center flex flex-col items-center justify-center mb-32">
          <h2 className="font-merriweather text-3xl uppercase font-light tracking-widest">
            See you there?
          </h2>
        </div>
        <Modal isOpen={modalOpen} onClose={closeModal} />
        <div className="grid md:grid-flow-col justify-evenly items-center">
          <form onSubmit={handleSubmit}>
            <div className="my-7 md:mx-0 mx-10 group transition-all duration-300 ease-in-out">
              <input
                required
                id="name"
                type="text"
                value={formData.name}
                placeholder="Name"
                className="bg-inherit w-full outline-none bg-left-bottom bg-gradient-to-r from-gold to-gold bg-[length:100%_4px] bg-no-repeat group-hover:bg-[length:0%_4px] transition-all duration-500 ease-out"
                onChange={handleChange}
              />
            </div>
            <div className="my-7 md:mx-0 mx-10 group transition-all duration-300 ease-in-out">
              <input
                required
                id="email"
                type="email"
                value={formData.email}
                placeholder="Email"
                className="bg-inherit w-full outline-none bg-left-bottom bg-gradient-to-r from-gold to-gold bg-[length:100%_4px] bg-no-repeat group-hover:bg-[length:0%_4px] transition-all duration-500 ease-out"
                onChange={handleChange}
              />
            </div>
            <div className="my-7 md:mx-0 mx-10 group transition-all duration-300 ease-in-out">
              <select
                required
                id="attendance"
                type="text"
                value={formData.attendance}
                className="bg-inherit w-full outline-none"
                onChange={handleChange}
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
                value={formData.guests}
                placeholder="Number of guests"
                className="bg-inherit w-full outline-none bg-left-bottom bg-gradient-to-r from-gold to-gold bg-[length:100%_4px] bg-no-repeat group-hover:bg-[length:0%_4px] transition-all duration-500 ease-out"
                onChange={handleChange}
              />
            </div>
            <div className="my-7 md:mx-0 mx-10 group transition-all duration-300 ease-in-out">
              <textarea
                id="message"
                type="text"
                value={formData.message}
                onChange={handleChange}
                className="bg-inherit w-full outline-none bg-left-bottom bg-gradient-to-r from-gold to-gold bg-[length:100%_4px] bg-no-repeat group-hover:bg-[length:0%_4px] transition-all duration-500 ease-out"
                placeholder="Additional information"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              type="submit"
              disabled={buttonLoading && true}
              className="my-10 md:mx-0 mx-10 text-sm uppercase border-8 border-dotted hover:font-extrabold hover:border-double border-gold rounded-full lg:px-[15%] lg:py-[24%] px-[8%] py-[12%] "
            >
              {buttonLoading ? "Submitting..." : "Submit"}
            </motion.button>
          </form>
          <img src={couple} className="w-[35rem] " />
        </div>
      </div>
    </section>
  );
}
