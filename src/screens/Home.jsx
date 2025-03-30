import React from "react"
import HeroSection from "../sections/HeroSection/HeroSection";
import SecondSection from "../sections/SecondSection/SecondSection";
import NoticeSection from "../sections/NoticeSection/NoticeSection";
// import "./Home.css"

const Home = () => {
  return (
    <div className="bg-[#DEF0F9] w-full min-h-screen">
      <HeroSection />
      <SecondSection />
      <NoticeSection />
      Home
    </div>
  )
}

export default Home;