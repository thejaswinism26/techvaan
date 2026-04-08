import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      
      <NavLink to="/" className="logo">
        TECHVAAN
      </NavLink>

      <div className="nav-links">
        <NavLink to="/capabilities" className={({ isActive }) => isActive ? "active" : ""}>
          Capabilities
        </NavLink>

        <NavLink to="/industries" className={({ isActive }) => isActive ? "active" : ""}>
          Industries
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
          Contact
        </NavLink>
      </div>
    </div>
  );
}