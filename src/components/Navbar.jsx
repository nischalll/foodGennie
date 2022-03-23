import React from "react";

export default function Navbar() {
  return (
      <nav className=" container-fluid navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Food Gennie🧞
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
              </a>
            </li>
          </ul>
        </div>
      </nav>
  );
}
