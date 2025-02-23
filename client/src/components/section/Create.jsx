import { useState } from "react";
import { Grid2 as Grid, Box, TextField, Paper, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { set } from "mongoose";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
//   ...theme.applyStyles("dark", {
//     backgroundColor: "#1A2027",
//   }),
// }));

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
