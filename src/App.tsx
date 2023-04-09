import { Box } from "@mui/material";
import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import NavigationBar, { navBarHeight } from "./components/NavigationBar";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Running from "./pages/Running";
import Tech from "./pages/Tech";
import React from "react";

export const pages: {
  path: `/${string}`;
  label: string;
  component: React.ReactNode;
}[] = [
  { path: "/home", label: "Home", component: <Home /> },
  { path: "/blog", label: "Blog", component: <Blog /> },
  { path: "/tech", label: "Tech", component: <Tech /> },
  { path: "/research", label: "Research", component: <Research /> },
  { path: "/running", label: "Running", component: <Running /> },
];

function App() {
  return (
    <div>
      <NavigationBar />
      <Box paddingTop={`calc(${navBarHeight} + 2rem)`} paddingX="2rem">
        <Routes>
          <Route path="/" element={<Home />} />
          {pages.map(({ path, component }) => (
            <Route path={path} element={component} />
          ))}
        </Routes>
      </Box>
      <Footer />
    </div>
  );
}

export default App;
