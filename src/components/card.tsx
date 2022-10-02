import React from "react";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Card() {
  return (
    <div>
      <div>
        <div>
          <h2>Project Name</h2>
          <FontAwesomeIcon
            icon={faTwitter}
            style={{
              fontSize: "1.5rem",
              color: "white",
            }}
          />
          <FontAwesomeIcon
            icon={faDiscord}
            style={{
              fontSize: "1.5rem",
              color: "white",
            }}
          />
        </div>
        <div>Img</div>
      </div>
      <div>
        <span>Launch Date</span>
        <span>4 Days 00:00:00</span>
      </div>
      <div></div>
    </div>
  );
}

export default Card;
