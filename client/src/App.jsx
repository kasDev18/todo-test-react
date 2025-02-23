import {
  // ThemeProvider,
  createTheme,
  // Container,
  Box,
  Link,
} from "@mui/material";
import { Routes, Route } from "react-router-dom";

// import "./App.css"

import Todo from "./components/main_component/Todo";
import Edit from "./components/main_component/Edit";
function App() {
  

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Box
            className="home"
            sx={{
              height: "96vh",
            }}
          >
            <Todo/>
            
          </Box>
        }
      />
      <Route
        path="/edit/:id"
        element={
          <Box
            className="edit"
            // sx={{
            //   height: "96vh",
            // }}
          >
            <Edit />
          </Box>
        }
      />
    </Routes>
  );
}

export default App;
