import { useState, setState } from "react";
// import { database } from "../Firebase";
import { getDatabase } from "firebase/database";
import { ref, push, child, update } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import axios from "axios";


// Initialize Firebase
let config = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_REACT_APP_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
}

const app = initializeApp(config);
const database = getDatabase(app);
const db = getFirestore(app);


export default function Confirm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attendance, setAttendance] = useState("");
  const [coming, setComing] = useState("Yes");
  const [food, setFood] = useState("everything");
  const [message, setMessage] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    attendance: "",
    coming: "Yes",
    food: "everything",
    message: "",
  });
  const [formData, setFormData] = useState({})



  // nodemailer, axios, FirebaseConfig

  // const updateInput = e => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   })
  // }
  // const handleFormSubmit = event => {
  //   event.preventDefault()
  //   // sendEmail()
  //   setFormData({
  //     name: '',
  //     email: '',
  //     attendance: '',
  //     coming: '',
  //     food: '',
  //     message: '',
  //   })
  // }
  // const sendEmail = () => {
  //   axios.post(
  //     'https://us-central1-your-app-name.cloudfunctions.net/submit',
  //     formData
  //   )
  //     .then(res => {
  //       db.collection('emails').add({
  //         name: formData.name,
  //         email: formData.email,
  //         message: formData.message,
  //         time: new Date(),
  //       })
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }





  // don't tamper with

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "name") {
      setName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "attendance") {
      setAttendance(value);
    }
    if (id === "coming") {
      setComing(value);
    }
    if (id === "food") {
      setFood(value);
    }
    if (id === "message") {
      setMessage(value);
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  };

  const onOptionChange = (e) => {
    setComing(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, email, attendance, coming, food, message);
    sendEmail()

    let obj = {
      name: name,
      email: email,
      attendance: attendance,
      coming: coming,
      food: food,
      message: message,
    };
    const newPostKey = push(child(ref(database), "posts")).key;
    const updates = {};
    updates["/" + newPostKey] = obj;
    return update(ref(database), updates);

  }


  const sendEmail = () => {
    axios.post(
      'https://us-central1-wedding-rsvp-8d286.cloudfunctions.net/submit',
      formData
    )
      .then(res => {
        db.collection('emails').add({
          name: formData.name,
          email: formData.email,
          attendance: formData.attendance,
          coming: formData.coming,
          food: formData.food,
          message: formData.message,
          time: new Date(),
        })
      })
      .catch(error => {
        console.error(error.response.data);
      })
  }


  // const clearForm = (e) => {
  //   e.preventDefault;
  //   setFormValues({
  //     name: "",
  //     email: "",
  //     attendance: "",
  //     coming: "Yes",
  //     food: "everything",
  //     message: "",
  //   })
  // };

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
              id="name"
              placeholder="Name"
              onChange={(e) => handleInputChange(e)}
              value={name}
              className="border-b-2 outline-orange-300 w-full"
              required
            />
          </div>
          <div className="font-merriweather text-sm leading-6 font-thin mb-7 text-slate-500 placeholder:text-slate-100">
            <input
              type="email"
              id="email"
              placeholder="Email"
              onChange={(e) => handleInputChange(e)}
              value={email}
              className="border-b-2 outline-orange-300 w-full"
              required
            />
          </div>
          <div className="font-merriweather text-sm leading-6 font-thin mb-1 text-slate-500 placeholder:text-slate-100">
            <input
              type="radio"
              name="coming"
              id="yes"
              onChange={onOptionChange}
              value="Yes"
              checked={coming === "Yes"}
            />
            <label htmlFor="coming" className="mx-2">
              Yes, I'll be there
            </label>
          </div>
          <div className="font-merriweather text-sm leading-6 font-thin mb-7 text-slate-500 placeholder:text-slate-100">
            <input
              type="radio"
              name="coming"
              id="no"
              onChange={onOptionChange}
              value="No"
              checked={coming === "No"}
            />
            <label htmlFor="coming" className="mx-2  outline-orange-300">
              Sorry, I can't make it
            </label>
          </div>
          <div className="font-merriweather text-sm leading-6 font-thin mb-7 text-slate-500 placeholder:text-slate-100">
            <p>Number of guests:</p>
            <input
              type="number"
              id="attendance"
              onChange={(e) => handleInputChange(e)}
              value={attendance}
              placeholder="e.g., 2"
              className="border-b-2 outline-orange-300 w-full"
            />
          </div>
          <div className="font-merriweather text-sm leading-6 font-thin mb-7 text-slate-500 placeholder:text-slate-100">
            <label>
              Meal preferences:
              <select
                value={food}
                onChange={(e) => setFood(e.target.value)}
                className="font-merriweather outline-orange-300 text-sm leading-6 font-thin text-slate-500 placeholder:text-slate-100 w-full"
                required
              >
                <option
                  id="vegetarian"
                  name="food"
                  value="vegetarian"
                  type="text"
                >
                  Vegetarian
                </option>
                <option id="vegan" name="food" value="vegan" type="text">
                  Vegan
                </option>
                <option
                  id="everything"
                  name="food"
                  value="everything"
                  type="text"
                >
                  I eat everything
                </option>
                <option id="other" name="food" value="other" type="text">
                  Something else (include details below)
                </option>
              </select>
            </label>
          </div>

          <div className="font-merriweather text-sm leading-6 font-thin mb-7 text-slate-500 ">
            <label>Additional notes</label>
            <textarea
              type="text"
              id="message"
              placeholder="Message"
              onChange={(e) => handleInputChange(e)}
              value={message}
              className="border-2 outline-orange-300 placeholder:text-slate-100 w-full"
            ></textarea>
          </div>
          <button
            type="submit"
            // onClick={() => clearForm()}
            className="bg-orange-400 px-5 py-2 rounded-md text-gray-50 hover:bg-blue-50 hover:text-gray-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
