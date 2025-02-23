import { useState } from "react";

import TextField from "@mui/material/TextField";

export default function Create() {
  const [todo, setTodo] = useState("");

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  return (
    <TextField
      onChange={handleChange}
      style={{ width: "100%", marginRight: "10px" }}
      id="standard-basic"
      label="Add a Todo"
      variant="standard"
      value={todo}
      required
    />
  );
}
