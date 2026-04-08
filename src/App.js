import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Capabilities from "./pages/Capabilities";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/industries" element={<Industries />} />
        <Route 
  path="/contact" 
  element={<Contact successMessage="Message sent successfully!" />} />
      </Routes>
    </Router>
  );
}

export default App;