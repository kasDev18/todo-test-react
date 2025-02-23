import {
  Container,
  Grid2 as Grid,
  Box,
  TextField,
  Button,
  Snackbar,
} from "@mui/material";

import { useState, useEffect, use } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

export default function Edit() {
  const [todo, setTodo] = useState("");
  const {id} =  useParams();

  const navigate = useNavigate();

  const readTodo = async () => {
    const response = await fetch(`http://localhost:5000/todos/read/${id}`);

    const data = await response.json();
    setTodo(data.title);
    // console.log(data);
    
  }

  const handleChange = (event) => {
    setTodo(event.target.value);
  }

  const updateTodo = async () => {
    const response = await fetch(`http://localhost:5000/todos/edit/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: todo,
        id: id,
      }),
    });

    const data = await response.json();

    window.localStorage.setItem("response", data.response);
    navigate("/");
    // console.log(data);
  };

  // console.log(todo);
  
  const handleClick = (event) => {
    event.preventDefault();
    updateTodo();
  }
  // console.log(id);
  

  useEffect(() => {
    readTodo();
  }, []);

  return (
    <Container
      sx={{
        flexGrow: 1,
        fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
      }}
    >
      <Grid container style={{ display: "flex", justifyContent: "center" }}>
        <Grid size={6}>
          <Grid>
            <h1>Edit a Todo</h1>
          </Grid>
          <Box
            style={{ display: "flex", justifyContent: "center" }}
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleClick}
          >
            <TextField
              onChange={handleChange}
              style={{ width: "100%", marginRight: "10px" }}
              id="standard-basic"
              label="Add a Todo"
              variant="standard"
              value={todo}
              required
            />
            <Button
              variant="contained"
              size="small"
              color="success"
              onClick={handleClick}
            >
              Update
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
