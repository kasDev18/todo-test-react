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
      {/* <Route
        path="game_interface"
        element={
          <Box className="App">
            <GameInterface
              title="Pokedex"
              imageHeading={imageHeading}
              image={api.pokeImageSrc}
              gif={api.pokeGIFSrc}
              name={pokemon.name}
              types={types}
              abilities={pokeAbilities}
              entryDescription={entryDesc}
              pokeName={pokemon.name}
            />
          </Box>
        }
      /> */}
    </Routes>
  );
}

export default App;
