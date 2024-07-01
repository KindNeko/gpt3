import { React } from "react";
import "./brand.css";

import atlassian from "../../images/atlassian.svg";
import dropbox from "../../images/dropbox.svg";
import google from "../../images/google.svg";
import shopify from "../../images/shopify.svg";
import slack from "../../images/slack.svg";

function Brand() {
  return (
    <section className="brand">
      <div className="container">
        <ul className="brand__list">
          <li className="brand__item">
            <img src={google} alt="Google" />
          </li>
          <li className="brand__item">
            <img src={slack} alt="Slack" />
          </li>
          <li className="brand__item">
            <img src={atlassian} alt="Atlassian" />
          </li>
          <li className="brand__item">
            <img src={dropbox} alt="Dropbox" />
          </li>
          <li className="brand__item">
            <img src={shopify} alt="shopify" />
          </li>
        </ul>
      </div>
    </section>
  );
}
export { Brand };
