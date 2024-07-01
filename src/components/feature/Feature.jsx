import { React } from "react";
import "./feature.css";
function Feature(props) {
  const {
    classTagWrapper,
    classTagTitle = "title-mini",
    classTagDescription = "description",
    title,
    description,
  } = props;
  return (
    <div className={classTagWrapper}>
      <h4 className={classTagTitle}>{title}</h4>
      <p className={classTagDescription}>{description}</p>
    </div>
  );
}

export { Feature };
