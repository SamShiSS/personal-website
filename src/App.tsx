import { Route, Routes } from "react-router";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tech from "./pages/Tech";
import Research from "./pages/Research";
import Running from "./pages/Running";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/research" element={<Research />} />
        <Route path="/running" element={<Running />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
