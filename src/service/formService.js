import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
console.log(process.env.REACT_APP_API_BASE_URL);
export async function GET_FORMS(params) {
  console.log(params);

  try {
    let result = await axios.get("http://localhost:4000/api/v1/forms");
    return result.data;
  } catch (error) {
    if (error.response) {
      // that falls out of the range of 2xx
      console.log("Request Error:", error.response);
    }
    console.log("Error", error);
  }
}
