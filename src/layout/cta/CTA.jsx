import { React } from "react";
import "./cta.css";
function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta__wrapper">
          <div className="cta__content">
            <p className="cta__subtext">Request Early Access to Get Started</p>
            <h4 className="cta__title">
              Register today & start exploring the endless possiblities.
            </h4>
          </div>
          <button className="cta__button">Get Started</button>
        </div>
      </div>
    </section>
  );
}
export { CTA };
