import swal from "sweetalert";
import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

export async function GET_FORMS(page, limit) {
  try {
    let result = await axios.get(`/forms?page=${page}&limit=${limit}`);
    return result.data;
  } catch (error) {
    if (error.response) {
      // that falls out of the range of 2xx
      console.log("Request Error:", error.response);
      Alert("Oops!", error.response.data.message, "error");
    }
    console.log("Server error: ", error);
    Alert("Oops!", "No response from our system!", "error");
  }
}
export async function GET_FORM_BY_ID(id) {
  try {
    let result = await axios.get(`/forms/${id}`);
    return result.data;
  } catch (error) {
    if (error.response) {
      // that falls out of the range of 2xx
      console.log("Request Error:", error.response);
      Alert("Oops!", error.response.data.message, "error");
    }
    console.log("Server error: ", error);
    Alert("Oops!", "No response from our system!", "error");
  }
}

function Alert(title, msg, type, time = 3000) {
  swal({ title: title, text: msg, icon: type, buttons: false, timer: time });
}
