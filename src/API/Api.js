import axios from "axios";

const URL = process.env.REACT_APP_SERVER_URL;

// ******* Send message
export const SendMessage = async ({
  name,
  email,
  attendance,
  guests,
  message,
  setSend,
}) => {
  try {
    const rsvp = { name, email, attendance, guests, message, setSend };
    let res = await axios.post(`${URL}`, rsvp);
    if (res) {
      setSend(res.data);
    }
  } catch (error) {
    alert(error.response.data.msg);
  }
};
