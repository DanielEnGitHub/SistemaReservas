import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Rutas from "./routers/routes";
import { Toaster } from "react-hot-toast";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import "./styles/index.css";

// provider
import { UserContextProvider } from "./context/User";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <ChakraProvider theme={theme} resetCSS={true}>
          <Toaster position="top-center" reverseOrder={true} />
          <Rutas />
        </ChakraProvider>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
