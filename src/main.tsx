import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Maintenance from "./pages/Maintenance";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    h1: { fontSize: "3.2em", lineHeight: 1.1 },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {import.meta.env.VITE_MAINTAINENCE_MODE ? <Maintenance /> : <App />}
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
