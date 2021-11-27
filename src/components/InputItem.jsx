import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import "./InputItem.css";

export default function InputItem(props) {
  console.log("----> ", props);
  const [label, setLabel] = useState("");
  useEffect(() => {
    setLabel(props.fieldName);
  }, [props]);
  return (
    <div style={{ textAlign: "center" }}>
      <TextField
        style={{ width: "60%", margin: "10px 0px" }}
        inputProps={{ min: 0, style: { textAlign: "center" } }}
        id="outlined-basic"
        label={label}
        variant="outlined"
      />
    </div>
  );
}
