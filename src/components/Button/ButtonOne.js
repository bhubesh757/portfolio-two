import React from "react";
import "./ButtonOne.css";

export default function ButtonOne({ text, className, href, newTab }) {
  return (
    <div className="button">
        <h1>Fizzy CSS Button</h1>
        <h2>With super fizzy particle action</h2>
        <a href="https://www.codepen.io/jcoulterdesign">
          <i className="ion-social-codepen" />
          <span>More Codepen shenanigans</span>
        </a>
        <input id="button" type="checkbox" />
        <label htmlFor="button">
          <div className="button_inner q">
            <i className="l ion-log-in" />
            <span className="t">Downloads</span>
            <span>
              <i className="tick ion-checkmark-round" />
            </span>
            <div className="b_l_quad">
              &lt;% (1..52).each do %&gt;
              <div className="button_spots" />
              &lt;% end %&gt;
            </div>
          </div>
        </label>
      </div>
  );
}

