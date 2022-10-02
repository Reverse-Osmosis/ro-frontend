import React, { ReactElement } from "react";
import Footer from "./footer";
import Header from "./header";
type layoutProps = {
  children: ReactElement;
};
function Layout({ children }: layoutProps) {
  return (
    <div className="bg-background min-h-screen text-white-full grid  content-between">
      <Header />
      <div className=" max-w-6xl mx-auto">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
