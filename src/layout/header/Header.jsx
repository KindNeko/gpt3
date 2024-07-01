import { React } from "react";
import { Navbar } from "../../components/export";
import illustration from "../../images/illustration.svg";
import signUp from "../../images/sign-up.svg";

import "./header.css";
function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <Navbar />
        </div>
      </div>

      <div className="header__content">
        <div className="container">
          <div className="header__inner">
            <div className="header__wrapper-content">
              <h1 className="header__title gradient-text">
                Let’s Build Something amazing with GPT-3 OpenAI
              </h1>
              <p className="header__description">
                Yet bed any for travelling assistance indulgence unpleasing. Not
                thoughts all exercise blessing. Indulgence way everything joy
                alteration boisterous the attachment. Party we years to order
                allow asked of.
              </p>
              <input
                className="header__email"
                type="Email"
                placeholder="Your Email Address"
              />
              <button className="header__btn">Get Started</button>
              <div className="header__sign-up">
                <img src={signUp} alt="Sign Up" />
                <p className="header__text">
                  1,600 people requested access a visit in last 24 hours
                </p>
              </div>
            </div>
            <img src={illustration} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}
export { Header };
