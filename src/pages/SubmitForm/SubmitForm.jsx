import FormComponent from "../../components/ListItem";
import { useState, useEffect } from "react";
import { GET_FORM_BY_ID } from "./../../service/formService";
import { useParams } from "react-router-dom";
function SubmitForm() {
  const [form, setForm] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        //avoiding pagination/infinite scroll due to time constraints, sending static
        const response = await GET_FORM_BY_ID(id);
        console.log(response.data);
        setForm(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div>
      <h1 className="title">{form.formName}</h1>
    </div>
  );
}

export default SubmitForm;
