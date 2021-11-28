import { useState, useEffect, forwardRef } from "react";
import { GET_FORM_BY_ID, SUBMIT_FORM } from "../../service/formService";
import { useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { validateFields } from "./../../utils/formFieldValidator";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useHistory } from "react-router-dom";

import {
  clearLocalStorage,
  getLocalStorage,
  setLocalStorage,
  setLocalStorageElement,
} from "./../../utils/localStorage";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SubmitForm() {
  const [form, setForm] = useState([]);
  const [isError, setError] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const history = useHistory();

  let { id } = useParams();

  function editFormElement(e) {
    setLocalStorageElement(e.target.id, e.target.value);
    setForm(getLocalStorage());
  }

  async function submitFormData() {
    const formData = getLocalStorage();
    const isVerified = validateFields(formData.formElements);
    if (!isVerified.success) {
      setError(true);
      setErrorMessages(isVerified.messages);
    } else {
      //submit to api
      const response = await SUBMIT_FORM(formData);
      if (response) {
        //all good, clear local, send to home
        clearLocalStorage();
        history.push("/");
      }
    }
  }

  const handleClose = (event, reason) => {
    setError(false);
    setErrorMessages([]);
  };

  useEffect(() => {
    const localFormData = getLocalStorage();
    if (localFormData !== null && localFormData.edited !== undefined) {
      setForm(localFormData);
    } else {
      fetchData();
    }

    async function fetchData() {
      try {
        //avoiding pagination/infinite scroll due to time constraints, sending static
        const response = await GET_FORM_BY_ID(id);
        setForm(response.data);
        setLocalStorage(response.data);
      } catch (e) {
        console.log(e);
      }
    }
  }, [id]);

  return (
    <div>
      <h1 className="title" style={{ marginTop: "40px" }}>
        {form.formName}
      </h1>
      <div style={{ textAlign: "center" }}>
        {Object.keys(form).length
          ? form.formElements.map((formElement) => (
              <TextField
                key={formElement._id}
                style={{ width: "60%", margin: "10px 0px" }}
                inputProps={{ min: 0, style: { textAlign: "left" } }}
                id={formElement._id}
                label={formElement.fieldName}
                variant="outlined"
                value={formElement.value}
                onChange={editFormElement}
              />
            ))
          : ""}
      </div>
      {Object.keys(form).length > 0 && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button variant="contained" onClick={submitFormData}>
            Submit form
          </Button>
        </div>
      )}

      {isError && (
        <Snackbar
          open={isError}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          onClose={handleClose}
          key={errorMessages[0]}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {errorMessages.map((errorMessage) => (
              <span>
                {" "}
                {errorMessage}
                <br />
              </span>
            ))}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
}

export default SubmitForm;
