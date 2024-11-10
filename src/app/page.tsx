import React from "react";
import Header from "./components/Header";
import Slider from "./components/slider";
import AutoSlider from "./components/autoSlider";
import VideoSection from "./components/videoSection";

const Page = () => {
  return (
    <div>
      <Header />
      <Slider/>
      <AutoSlider/>
      <VideoSection/>
    </div>
  );
};

export default Page;
