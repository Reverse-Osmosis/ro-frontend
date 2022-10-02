import React from "react";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Card() {
  return (
    <div>
      <div>
        <div>
          <span>Project Name</span>
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
      </div>
    </div>
  );
}

export default Card;
