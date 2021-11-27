import FormComponent from "./../../components/formComponent";
import "./AllForms.css";
import { useState, useEffect } from "react";
import { GET_FORMS } from "./../../service/formService";
function AllForms() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        //avoiding pagination/infinite scroll due to time constraints, sending static
        const response = await GET_FORMS(1, 10);
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
