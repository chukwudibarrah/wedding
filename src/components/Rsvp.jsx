import React, { useState } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/functions';

// Initialize Firebase with your project credentials
// firebase.initializeApp({
//   apiKey: 'YOUR_API_KEY',
//   authDomain: 'YOUR_AUTH_DOMAIN',
//   projectId: 'YOUR_PROJECT_ID',
// });



export default function Rsvp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [attendance, setAttendance] = useState('');
  
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
    }
      // const sendRSVP = firebase.functions().httpsCallable('sendRSVP');
  
      // Create an object with the form data
      const formData = {
        name,
        email,
        attendance,
      };
  
      // Call the Firebase Cloud Function to send the email
    //   sendRSVP(formData)
    //     .then((result) => {
    //       console.log(result); // You can handle the response from the Firebase Cloud Function here
    //     })
    //     .catch((error) => {
    //       console.error('Error:', error);
    //     });
    // };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value="name" onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value="email" onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Attendance:
          <select value="attendance" onChange={handleAttendanceChange}>
            <option value="">-- Select an option --</option>
            <option value="attending">Attending</option>
            <option value="not_attending">Not Attending</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  
}