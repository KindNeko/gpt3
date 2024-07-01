import { React } from "react";
import { Feature } from "../../components/export";
import "./features.css";
function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="features__wrapper">
          <div className="features__wrapper-text">
            <h2 className="features__title gradient-text">
              The Future is Now and You Just Need To Realize It. Step into
              Future Today & Make it Happen.
            </h2>
            <p className="features__subtext subtext">
              Request Early Access to Get Started
            </p>
          </div>

          <ul className="features__list">
            <li className="features__item">
              <Feature
                classTagWrapper="features__wrapper-content"
                classTagTitle="features__title-mini title-mini"
                classTagDescription="description features__description"
                title="Improving end distrusts instantly "
                description="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
              />
            </li>
            <li className="features__item">
              <Feature
                classTagWrapper="features__wrapper-content"
                classTagTitle="features__title-mini title-mini"
                classTagDescription="description features__description"
                title="Become the tended active"
                description="Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
              />
            </li>
            <li className="features__item">
              <Feature
                classTagWrapper="features__wrapper-content"
                classTagTitle="features__title-mini title-mini"
                classTagDescription="description features__description"
                title="Message or am nothing"
                description="Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
              />
            </li>
            <li className="features__item">
              <Feature
                classTagWrapper="features__wrapper-content"
                classTagTitle="features__title-mini title-mini"
                classTagDescription="description features__description"
                title="Really boy law county"
                description="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export { Features };
