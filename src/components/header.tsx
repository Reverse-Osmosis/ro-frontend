import React from "react";
import UserIcon from "../../assets/user-circle.svg";
import HeaderIcon from "@assets/home-icon.svg";
import WalletIcon from "@assets/wallet.svg";

function Header() {
  return (
    <div className="flex justify-around pt-3">
      <HeaderIcon />
      <div>
        <span>Create</span>
        <span>Stake</span>
        <span>Explore</span>
      </div>
      <div>Get Atom/OSMO LP -</div>
      <div>
        <div className="flex gap-x-6">
          <UserIcon />
          <WalletIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;
