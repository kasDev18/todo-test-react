import { useEffect, useState } from "react";

import { Box, Container, Button, Grid2 as Grid, TextField} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import Create from "../section/Create";
import TodoTable from "../section/TodoTable";

export default function Todo() {
  const [openflash, setOpenFlash] = useState(false);
  const [response, setResponse] = useState("");
  const [todo, setTodo] = useState("");

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleClick = async () => {
    const response = await fetch("http://localhost:5000/todos/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: todo,
      }),
    });

    const data = await response.json();
    window.localStorage.setItem("response", data.response);
      window.location.reload();

    // console.log(data);
  
    // alert(todo);
  };


  // console.log(openflash);
  
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenFlash(false);
  };

  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClose}>
        
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  useEffect(() => {
    if(window.localStorage.getItem("response")) {
      setResponse(window.localStorage.getItem("response"));
      setOpenFlash(!openflash);
    }
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
          <h1>Create a Todo</h1>
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
            Submit
          </Button>
        </Box>
      </Grid>
    </Grid>
      &nbsp;
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TodoTable />
      </Box>
      <Snackbar
        open={openflash}
        autoHideDuration={6000}
        onClose={handleClose}
        message={response}
        action={action}
      />
    </Container>
  );
}
