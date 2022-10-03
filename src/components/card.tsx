import React from "react";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OsmoIcon from "@assets/superfluid-osmo.svg";
import AtomIcon from "@assets/atom.svg";
import {
  faLock,
  faUnlockKeyhole,
  faCoins,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";
enum Status {
  OPEN = "OPEN",
  CLAIMED = "CLAIMED",
  REDEEM = "REDEEM",
}
type cardProps = {
  status?: Status.OPEN | Status.CLAIMED | Status.REDEEM;
};
const getProjectIconStatus = (status: string) => {
  switch (status) {
    case Status.OPEN:
      return {
        icon: faLock,
        iconColor: "#757575",
        bottomColor: "",
        bottomText: "",
      };
    case Status.CLAIMED:
      return {
        icon: faUnlockKeyhole,
        iconColor: "#52EB7D",
        bottomColor: "bg-succesful",
        bottomText: "CLAIMED",
      };
    case Status.REDEEM:
      return {
        icon: faUserLock,
        iconColor: "#C4A46A",
        bottomColor: "bg-secondary-200",
        bottomText: "READY TO REDEEM",
      };
    default:
      return { icon: faLock, iconColor: "", bottomColor: "", bottomText: "" };
  }
};

function Card({ status = Status.OPEN }: cardProps) {
  const dataStatus = getProjectIconStatus(status);
  return (
    <div className="bg-customCard rounded-2xl overflow-hidden">
      <div className=" px-5 pt-5  cursor-pointer relative">
        <CardHeader />
        <div className="pb-10">
          <span className="block">Launch Date</span>
          <span className="text-lg">4 Days 00:00:00</span>
        </div>
        <div className="flex justify-between pb-4">
          <div className="flex">
            <OsmoIcon />
            <AtomIcon className="w-6" />
          </div>
          <div>
            <FontAwesomeIcon
              icon={dataStatus.icon}
              style={{
                fontSize: "1.5rem",
                color: dataStatus.iconColor,
              }}
            />
          </div>
          <div>
            <FontAwesomeIcon
              icon={faCoins}
              style={{
                fontSize: "1.5rem",
                color: "#fff",
              }}
            />
          </div>
        </div>
      </div>
      {(status == Status.CLAIMED || status == Status.REDEEM) && (
        <div
          className={`${dataStatus.bottomColor} rounded-lg w-full py-1 text-center`}
        >
          <span className="text-black font-semibold">
            {dataStatus.bottomText}
          </span>
        </div>
      )}
    </div>
  );
}

const CardHeader = () => {
  return (
    <div className="flex justify-around items-center gap-x-5 mb-12">
      <div>
        <h2 className="font-bold pb-2">Project Name</h2>
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
      <div>
        <span className="block bg-white-emphasis w-12 h-12 rounded-full"></span>
      </div>
    </div>
  );
};

export default Card;
