import { useState } from "react";
import axios from "axios";
import FirebaseConfig from "../firebase/firebaseConfig";

export default function Confirm() {
  const [formData, setFormData] = useState({});

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail();
    setFormData({
      name: "",
      email: "",
      yes_no: "",
      number: "",
      vegetarian: "",
      vegan: "",
      everything: "",
      other: "",
      message: "",
    });
  };
  const sendEmail = () => {
    axios.post(
      "https://us-central1-wedding-rsvp-8d286.cloudfunctions.net/submit",
      formData
    )
      .then((res) => {
        db.collection("emails").add({
          name: formData.name,
          email: formData.email,
          yes_no: formData.yes_no,
          number: formData.number,
          vegetarian: formData.vegetarian,
          vegan: formData.vegan,
          everything: formData.everything,
          other: formData.other,
          message: formData.message,
          time: new Date(),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="">
      <div className="bg-white p-10 w-11/12 md:w-4/12 rounded-lg">
        <div className="font-merriweather text-3xl uppercase font-light tracking-widest my-10">
          <h4>Will you attend our wedding?</h4>
        </div>

        <form onSubmit={handleSubmit} className="">
          <div className="font-merriweather text-sm leading-6 font-thin mb-7 text-slate-500 placeholder:text-slate-100">
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={updateInput}
              value={formData.name || ""}
              className="border-b-2 outline-orange-300 w-full"
              required
            />
          </div>
          <div className="font-merriweather text-sm leading-6 font-thin mb-7 text-slate-500 placeholder:text-slate-100">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={updateInput}
              value={formData.email || ""}
              className="border-b-2 outline-orange-300 w-full"
              required
            />
          </div>
          <div className="font-merriweather text-sm leading-6 font-thin mb-1 text-slate-500 placeholder:text-slate-100">
            <input
              type="radio"
              name="yes_no"
              onChange={updateInput}
              value={formData.yes_no || ""}
              checked
            />
            <label htmlFor="yes_no" className="mx-2">
              Yes, I'll be there
            </label>
          </div>
          <div className="font-merriweather text-sm leading-6 font-thin mb-7 text-slate-500 placeholder:text-slate-100">
            <input
              type="radio"
              name="yes_no"
              onChange={updateInput}
              value={formData.yes_no || ""}
            />
            <label htmlFor="yes_no" className="mx-2  outline-orange-300">
              Sorry, I can't make it
            </label>
          </div>
          <div className="font-merriweather text-sm leading-6 font-thin mb-7 text-slate-500 placeholder:text-slate-100">
            <p>Number of guests:</p>
            <input
              type="number"
              name="number"
              onChange={updateInput}
              value={formData.number || ""}
              placeholder="e.g., 2"
              className="border-b-2 outline-orange-300 w-full"
            />
          </div>
          <div className="font-merriweather text-sm leading-6 font-thin mb-7 text-slate-500 placeholder:text-slate-100">
            <p>Meal preferences:</p>
            <select
              className="font-merriweather outline-orange-300 text-sm leading-6 font-thin text-slate-500 placeholder:text-slate-100 w-full"
              required
            >
              <option
                name="vegetarian"
                onChange={updateInput}
                value={formData.vegetarian || ""}
              >
                Vegetarian
              </option>
              <option
                name="vegan"
                onChange={updateInput}
                value={formData.vegan || ""}
              >
                Vegan
              </option>
              <option
                name="everything"
                onChange={updateInput}
                defaultValue={formData.everything || ""}
              >
                I eat everything
              </option>
              <option
                name="other"
                onChange={updateInput}
                value={formData.other || ""}
              >
                Something else (include details below)
              </option>
            </select>
          </div>
          <div className="font-merriweather text-sm leading-6 font-thin mb-7 text-slate-500 ">
            <label>Additional notes</label>
            <textarea
              type="text"
              name="message"
              placeholder="Message"
              onChange={updateInput}
              value={formData.message || ""}
              className="border-2 outline-orange-300 placeholder:text-slate-100 w-full"
            ></textarea>
          </div>
          <button type="submit" className="bg-orange-400 px-5 py-2 rounded-md text-gray-50 hover:bg-blue-50 hover:text-gray-800">Submit</button>
        </form>
      </div>
    </div>
  );
}
