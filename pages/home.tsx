import React from "react";
import Card from "../src/components/card";
import Footer from "../src/components/footer";
import Header from "../src/components/header";
import Layout from "../src/components/layout";
import {PopUpAtom} from "../src/components/ui/atoms/PopUpAtom/PopUp.atom";

function Home() {
    return (
        <>
            <Layout>
                {/* <div className=" "> */}
                {/* <Header />
      <Footer /> */}
                <>
                    <div className="flex flex-col items-center my-28 ">
                        <h1>WELCOME TO REVERSE OSMOSIS</h1>
                        <p className="text-center">
                            New <span className="font-bold">projects</span>
                            <span className="block"> are available.</span>
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-10 mb-28">
                        {Array(8)
                        .fill(1)
                        .map((item, index) => (
                            <Card key={index}/>
                        ))}
                    </div>
                </>
                {/* </div> */}
            </Layout>
            <PopUpAtom/>
        </>

    );
}

export default Home;
