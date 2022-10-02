import React from "react";
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faYoutube,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

type IBlockInformation = {
  title: string;
  fields: string[];
};
const footerInfo: IBlockInformation[] = [
  {
    title: "Customer care",
    fields: ["Privacy policy", "Terms & Conditions", "Frequent questions"],
  },
  {
    title: "Projects",
    fields: ["Kind of projects", "How to join?", "Top projects"],
  },
  { title: "Support", fields: ["support@reverseosmosis.io", "Contact"] },
  { title: "About us", fields: ["Reverse Osmosis"] },
];
const SocialNetwokIcons = [faLinkedin, faYoutube, faTwitter, faInstagram];
function Footer() {
  return (
    <div className="mb-2">
      <div className="flex justify-center gap-x-10 mb-14">
        {footerInfo.map((info, index) => (
          <BlocInformation
            key={index}
            title={info.title}
            fields={info.fields}
          />
        ))}
      </div>
      <div className="flex justify-center gap-x-4 ">
        {SocialNetwokIcons.map((icon, index) => (
          <FontAwesomeIcon
            key={index}
            icon={icon}
            style={{
              fontSize: "1.5rem",
              color: "white",
              padding: "0.4rem",
              borderRadius: "50%",
            }}
          />
        ))}
      </div>
    </div>
  );
}

const BlocInformation = ({ title, fields }: IBlockInformation) => {
  return (
    <div className="text-sm">
      <h3 className="font-bold">{title}</h3>
      {fields.map((field, index) => (
        <p key={index}>{field}</p>
      ))}
    </div>
  );
};

export default Footer;
