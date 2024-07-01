import { React } from "react";
import possibility from "../../images/possibility.png";
import "./possibility.css";
function Possibility() {
  return (
    <section className="possibility">
      <div className="container">
        <div className="possibility__wrapper">
          <img
            className="possibility__img"
            src={possibility}
            alt="possibility"
          />
          <div className="possibility__content">
            <p className="possibility__subtext-top subtext">
              Request Early Access to Get Started
            </p>
            <h4 className="possibility__title gradient-text">
              The possibilities are beyond your imagination
            </h4>
            <p className="possibility__description description">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>
            <p className="possibility__subtext-bottom subtext">
              Request Early Access to Get Started
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export { Possibility };
