import React from "react";
import Card from "../src/components/card";
import Layout from "../src/components/layout";
import PhotoJoke from "@assets/photo-joke.jpg";
import ProfilePicture from "@assets/profile-picture.jpg";

function Profile() {
  return (
    <Layout>
      <>
        <WalletInfo walletName="walletName" walletAddress="walletAddress" />
        <h1 className="text-center my-7 text-">PORTOLIO</h1>
        <div className="flex flex-wrap justify-center gap-10 mb-28">
          {Array(8)
            .fill(1)
            .map((item, index) => (
              <Card key={index} />
            ))}
        </div>
      </>
    </Layout>
  );
}
type walletInfoProps = {
  walletName: string;
  walletAddress: string;
};
const WalletInfo = ({ walletName, walletAddress }: walletInfoProps) => {
  return (
    <div className="flex items-center gap-x-4 my-28 pl-24">
      <img
        src={ProfilePicture.src}
        alt="profileimg"
        className="w-20 h-20 rounded-full"
      />
      <div>
        <span className="block font-bold">{walletName}</span>
        <span>{walletAddress}</span>
      </div>
    </div>
  );
};

export default Profile;
