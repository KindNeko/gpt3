import { React } from "react";
import { Footers } from "../../components/export";
import footerLogo from "../../images/footerLogo.svg";
import "./footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__top">
            <h2 className="footer__title gradient-text">
              Do you want to step in to the future before others
            </h2>
            <button className="footer__btn">Request Early Access</button>
          </div>
          <div className="footer__main">
            <img className="footer__logo" src={footerLogo} alt="logo" />
            <Footers
              itemTitle="Links"
              firstItem="Overons"
              secondItem="Social Media"
              thirdItem="Counters"
              fourthItem="Contact"
            />
            <Footers
              itemTitle="Company"
              firstItem="Terms & Conditions"
              secondItem="Privacy Policy"
              thirdItem="Contact"
            />
            <Footers
              itemTitle="Get in touch"
              firstItem="Crechterwoord K12 182 DK Alknjkcb"
              secondItem="085-132567"
              thirdItem="info@payme.net"
            />
          </div>
          <div className="footer__bottom">
            <p className="footer__text">© 2024 GPT-3. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export { Footer };
