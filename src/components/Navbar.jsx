import { useState } from "react";

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        COMPANY
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <div className="dropdown">
              <button className="dropbtn nav-item">
                About
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <a href="#">History</a>
                <a href="#">Vision Mission</a>
              </div>
            </div>
          </li>
          <li>
            <a href="#" className="nav-item">
              Our Work
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              Our Team
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
