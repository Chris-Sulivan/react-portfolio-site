import { NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";

// Each site page is represented as an "open file tab", matching the
// code-editor visual theme. NavLink adds the is-active class for us.
const NAV_ITEMS = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/education", label: "Education" },
  { path: "/services", label: "Services" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="tab-bar" aria-label="Primary">
      <div className="tab-bar__logo-slot">
        <NavLink to="/" className="logo">
          <Logo />
          chris.dev
        </NavLink>
      </div>
      <ul className="tab-bar__tabs">
        {NAV_ITEMS.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) => `tab${isActive ? " is-active" : ""}`}
            >
              <span className="tab__dot" />
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
