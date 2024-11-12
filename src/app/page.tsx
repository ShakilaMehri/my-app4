import React from "react";
import Header from "./components/Header";
import AutoSlider from "./components/autoSlider";
import BigImage from "./components/bigImage";
import Footer from "./components/footer";

const Page = () => {
  return (
    <div>
      <Header />
      <BigImage/>
      <AutoSlider/>
      <Footer/>
    </div>
  );
};

export default Page;
