import { React } from "react";
import "./footers.css";
function Footers(props) {
  return (
    <div>
      <ul className="list">
        <li className="list__item">
          <a className="list__link list__title" href="!#">
            {props.itemTitle}
          </a>
        </li>
        <li className="list__item">
          <a className="list__link" href="!#">
            {props.firstItem}
          </a>
        </li>
        <li className="list__item">
          <a className="list__link" href="!#">
            {props.secondItem}
          </a>
        </li>
        <li className="list__item">
          <a className="list__link" href="!#">
            {props.thirdItem}
          </a>
        </li>
        {props.fourthItem ? (
          <li className="list__item">
            <a className="list__link" href="!#">
              {props.fourthItem}
            </a>
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}
export { Footers };
