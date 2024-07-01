import { React } from "react";
import "./card.css";

import card1 from "../../images/card1.png";
import card2 from "../../images/card2.png";
import card3 from "../../images/card3.png";
import card4 from "../../images/card4.png";
import card5 from "../../images/card5.png";

const images = {
  blogFirst: card1,
  blogSecond: card2,
  blogThird: card3,
  blogFourth: card4,
  blogFive: card5,
};

function Card(props) {
  const {
    subtitle = "Sep 26, 2021",
    title = "GPT-3 and Open AI is the future. Let us exlore how it is?",
    link = "Read Full Article",
  } = props;

  return (
    <ul className="card">
      <li className="card__item">
        <div className="card__wrapper">
          <img className="card__img" src={images.blogFirst} alt="blog card" />
          <div className="card__content card__content-one">
            <p className="card__subtitle card__header-content">{subtitle}</p>
            <h4 className="card__title card__main-content">{title}</h4>
            <a className="card__link card__footer-content" href="!#">
              {link}
            </a>
          </div>
        </div>
      </li>
      <li className="card__item">
        <div className="card__wrapper">
          <img className="card__img" src={images.blogSecond} alt="blog card" />
          <div className="card__content">
            <p className="card__subtitle">{subtitle}</p>
            <h4 className="card__title">{title}</h4>
            <a className="card__link" href="!#">
              {link}
            </a>
          </div>
        </div>
      </li>
      <li className="card__item">
        <div className="card__wrapper">
          <img className="card__img" src={images.blogThird} alt="blog card" />
          <div className="card__content">
            <p className="card__subtitle">{subtitle}</p>
            <h4 className="card__title">{title}</h4>
            <a className="card__link" href="!#">
              {link}
            </a>
          </div>
        </div>
      </li>
      <li className="card__item">
        <div className="card__wrapper">
          <img className="card__img" src={images.blogFourth} alt="card card" />
          <div className="card__content">
            <p className="card__subtitle">{subtitle}</p>
            <h4 className="card__title">{title}</h4>
            <a className="card__link" href="!#">
              {link}
            </a>
          </div>
        </div>
      </li>
      <li className="card__item">
        <div className="card__wrapper">
          <img className="card__img" src={images.blogFive} alt="card card" />
          <div className="card__content">
            <p className="card__subtitle">{subtitle}</p>
            <h4 className="card__title">{title}</h4>
            <a className="card__link" href="!#">
              {link}
            </a>
          </div>
        </div>
      </li>
    </ul>
  );
}
export { Card };
