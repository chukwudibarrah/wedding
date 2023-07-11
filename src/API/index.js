import axios from "axios";

// *********** Send email
export const SendEmail = async ({
  name,
  email,
  attendance,
  guests,
  message,
  setSend,
}) => {
  try {
    const rsvp = { name, email, attendance, guests, message, setSend };
    let res = await axios.post(`http://localhost:5173/`, rsvp);
    if (res) {
      setSend(res.data);
    }
  } catch (error) {
    alert(error.response.data.message);
  }
};

