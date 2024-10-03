import { useState } from "react";
import { useLocation } from "react-router-dom";

import { Link } from "@/components/ui/Link";
import Logo from "@/assets/images/Logo.svg";
import { ROUTES, NAVIGATION } from "@/constants";

const Nav = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <Link to={ROUTES.HOME} className="logo">
        <img src={Logo} alt="logo" />
      </Link>

      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
        {NAVIGATION.map(({ id, name, path }) => (
          <li key={id}>
            <Link
              to={path}
              className={location.pathname === path ? "active" : ""}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
