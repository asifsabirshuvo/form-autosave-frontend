import FormComponent from "./../../components/formComponent";
import "./AllForms.css";
import { useState, useEffect } from "react";
import { GET_FORMS } from "./../../service/formService";
function AllForms() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await GET_FORMS(2, 2);
        setForms(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="title">List of available forms</h1>
      {forms.map((form) => (
        <FormComponent title={form.formName} key={form._id} />
      ))}
    </div>
  );
}

export default AllForms;
