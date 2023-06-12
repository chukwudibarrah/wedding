import { useState } from 'react';

export default function Confirm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attendance, setAttendance] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAttendanceChange = (e) => {
    setAttendance(e.target.value);
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
              placeholder="Name"
              className="border-b-2 outline-orange-300 w-full"
            />
          </div>
          <div className="font-merriweather text-sm leading-6 font-thin mb-7 text-slate-500 placeholder:text-slate-100">
            <input
              type="email"
              placeholder="Email"
              className="border-b-2 outline-orange-300 w-full"
            />
          </div>
          <div className="font-merriweather text-sm leading-6 font-thin mb-1 text-slate-500 placeholder:text-slate-100">
            <input type="radio" name="positive" value="yes" />
            <label htmlFor="yes" className="mx-2">
              Yes, I'll be there
            </label>
          </div>
          <div className="font-merriweather text-sm leading-6 font-thin mb-7 text-slate-500 placeholder:text-slate-100">
            <input type="radio" name="negative" value="sorry" />
            <label htmlFor="sorry" className="mx-2  outline-orange-300">
              Sorry, I can't make it
            </label>
          </div>
          <div className="font-merriweather text-sm leading-6 font-thin mb-7 text-slate-500 placeholder:text-slate-100">
            <p>Number of guests:</p>
            <input
              type="number"
              placeholder="e.g., 1"
              className="border-b-2 outline-orange-300 w-full"
            />
          </div>
          <div className="font-merriweather text-sm leading-6 font-thin mb-7 text-slate-500 placeholder:text-slate-100">
            <p>Meal preferences:</p>
            <select className="font-merriweather outline-orange-300 text-sm leading-6 font-thin text-slate-500 placeholder:text-slate-100 w-full">
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option defaultValue="everything">
                I eat everything
              </option>
              <option value="other">
                Something else (include details below)
              </option>
            </select>
          </div>
          <div className="font-merriweather text-sm leading-6 font-thin mb-7 text-slate-500 ">
            <label>Additional notes</label>
            <textarea className="border-2 outline-orange-300 placeholder:text-slate-100 w-full"></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}
