import { React } from "react";
import logo from "../../images/logo.svg";
import "./navbar.css";
function Navbar() {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <a className="logo" href="!#">
            <img src={logo} alt="logo" />
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="!#">
            Home
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="!#">
            What is GPT?
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="!#">
            Open AI
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="!#">
            Case Studies
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="!#">
            Library
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="!#">
            Sign In
          </a>
          <a className="menu__link menu__link-sing-up" href="!#">
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
}
export { Navbar };
