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
import BlogPost from "./pages/BlogPost";

export const pages: {
  path: `/${string}`;
  label: string;
  component: React.ReactNode;
  tabValue: number;
}[] = [
  { path: "/home", label: "Home", component: <Home />, tabValue: 0 },
  { path: "/tech", label: "Tech", component: <Tech />, tabValue: 1 },
  {
    path: "/research",
    label: "Research",
    component: <Research />,
    tabValue: 2,
  },
  {
    path: "/running",
    label: "Running",
    component: <Running />,
    tabValue: 3,
  },
  { path: "/blog", label: "Blog", component: <Blog />, tabValue: 4 },
  { path: "/blog/*", label: "Blog", component: <BlogPost />, tabValue: 4 },
];

function App() {
  return (
    <div>
      <NavigationBar />
      <Box paddingTop={`calc(${navBarHeight} + 3rem)`} paddingX="4rem">
        <Routes>
          <Route path="/" element={<Home />} />
          {pages.map(({ path, component }) => (
            <Route key={path} path={path} element={component} />
          ))}
        </Routes>
      </Box>
      <Footer />
    </div>
  );
}

export default App;
