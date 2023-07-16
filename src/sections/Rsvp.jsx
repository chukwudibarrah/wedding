import { useState } from "react";
import axios from "axios";
import couple from "../../images/africancouple.png";
import { motion } from "framer-motion";
import Section from "../components/Section";
import SuccessModal from "../components/SuccessModal";
import ErrorModal from "../components/ErrorModal";

export default function Rsvp() {
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attendance: "",
    guests: "",
    message: "",
  });

  const openModal = () => {
    setSuccessModalOpen(true);
    setErrorModalOpen(true);
  };

  const closeModal = () => {
    setSuccessModalOpen(false);
    setErrorModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonLoading(true);
    try {
      await axios.post("http://localhost:3001/api/sendmail", formData);
      setSuccessModalOpen(true)
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
      setErrorModalOpen(true);
      setButtonLoading(false);
      setFormData({
        name: "",
        email: "",
        attendance: "",
        guests: "",
        message: "",
      });
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
    <section id="rsvp">
      <div className="bg-brown pt-48 w-screen">
        <div className="text-center flex flex-col items-center justify-center mb-32">
          <h2 className="font-openSans text-3xl uppercase font-light tracking-tight text-gold">
            See you there?
          </h2>
        </div>
        <SuccessModal isOpen={successModalOpen} onClose={closeModal} />
        <ErrorModal isOpen={errorModalOpen} onClose={closeModal} />
        <div className="w-screen flex flex-col md:flex-row">
          <div className="grid md:grid-flow-col items-center md:w-full">
            <Section>
          <form className="md:px-28" onSubmit={handleSubmit}>
            <div className="my-7 md:mx-0 mx-10 group transition-all duration-300 ease-in-out">
              <input
                required
                id="name"
                type="text"
                value={formData.name}
                placeholder="Name"
                className="py-3 placeholder:text-center placeholder:text-slate-500 bg-inherit w-full outline-none bg-left-bottom bg-gradient-to-r from-gold to-gold bg-[length:100%_4px] bg-no-repeat group-hover:bg-[length:0%_4px] transition-all duration-500 ease-out"
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
                className="py-3 placeholder:text-center placeholder:text-slate-500 bg-inherit w-full outline-none bg-left-bottom bg-gradient-to-r from-gold to-gold bg-[length:100%_4px] bg-no-repeat group-hover:bg-[length:0%_4px] transition-all duration-500 ease-out"
                onChange={handleChange}
              />
            </div>
            <div className="my-7 md:mx-0 mx-10 group transition-all duration-300 ease-in-out">
              <select
                required
                id="attendance"
                type="text"
                value={formData.attendance}
                className="py-3 placeholder:text-center placeholder:text-slate-500 text-center text-slate-500 bg-inherit w-full outline-none"
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
                className="py-3 placeholder:text-center placeholder:text-slate-500 bg-inherit w-full outline-none bg-left-bottom bg-gradient-to-r from-gold to-gold bg-[length:100%_4px] bg-no-repeat group-hover:bg-[length:0%_4px] transition-all duration-500 ease-out"
                onChange={handleChange}
              />
            </div>
            <div className="my-7 md:mx-0 mx-10 group transition-all duration-300 ease-in-out">
              <textarea
                id="message"
                type="text"
                value={formData.message}
                onChange={handleChange}
                className="py-3 placeholder:text-center placeholder:text-slate-500 bg-inherit w-full outline-none bg-left-bottom bg-gradient-to-r from-gold to-gold bg-[length:100%_4px] bg-no-repeat group-hover:bg-[length:0%_4px] transition-all duration-500 ease-out"
                placeholder="Additional information"
              ></textarea>
            </div>
            <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              type="submit"
              disabled={buttonLoading && true}
              className="text-slate-500 my-10 md:mx-0 mx-10 text-sm uppercase border-8 border-dotted hover:font-extrabold hover:border-double border-gold rounded-full lg:px-[15%] lg:py-[19%] px-[8%] py-[12%] "
            >
              {buttonLoading ? "Submitting..." : "Submit"}
            </motion.button>
            </div>
          </form>
          </Section>
          </div>
          <div className="grid w-full items-end justify-items-end">
          <img src={couple} className="" />
          </div>
        </div>
      </div>
    </section>
  );
}
