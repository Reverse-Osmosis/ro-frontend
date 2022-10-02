import React from "react";
import Card from "../src/components/card";
import Footer from "../src/components/footer";
import Header from "../src/components/header";
import Layout from "../src/components/layout";

function Home() {
  return (
    <Layout>
      {/* <div className=" "> */}
      {/* <Header />
      <Footer /> */}
      <div>
        <Card />
      </div>
      {/* </div> */}
    </Layout>
  );
}

export default Home;
