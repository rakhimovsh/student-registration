import React from "react";
import { TextField } from "@mui/material";

const CreateInput = ({ name, label }) => {
  return (
    <TextField
      className="creatStudent__input"
      id="standard-basic"
      label={label}
      variant="standard"
      name={name}
    />
  );
};

export default CreateInput;
