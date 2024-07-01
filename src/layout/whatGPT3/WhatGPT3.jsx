import { React } from "react";
import { Feature } from "../../components/export";
import "./whatGPT3.css";

function WhatGPT3() {
  return (
    <section className="whatGPT3" id="gpt-3">
      <div className="container">
        <div className="whatGPT3__wrapper-bg">
          <Feature
            classTagWrapper="whatGPT3__top whatGPt3__wrapper-content"
            title="What is GPT-3"
            description="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
          />

          <div className="whatGPT3__center">
            <h2 className="whatGPt3__title gradient-text">
              The possibilities are beyond your imagination
            </h2>
            <p className="whatGPT3__subtext subtext">Explore The Library</p>
          </div>

          <div className="whatGPT3__bottom whatGPt3__wrapper-content">
            <Feature
              classTagTitle="whatGPT3__title-mini title-mini"
              title="Chatbots"
              description="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
            />
            <Feature
              classTagTitle="whatGPT3__title-mini title-mini"
              title="Knowledgebase"
              description="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b "
            />
            <Feature
              classTagTitle="whatGPT3__title-mini title-mini"
              title="Education"
              description="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export { WhatGPT3 };
