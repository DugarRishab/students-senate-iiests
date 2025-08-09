import HeroSection from "../sections/HeroSection/CommonHeroSection";
import Desktop9 from "../sections/AboutSection/Desktop9";
import Desktop11 from "../sections/AboutSection/Desktop11";
import DepartmentsPage from "../sections/AboutSection/Departments";

const About = () => {
  return (
    <div className="bg-tintWhite w-full min-h-screen relative Xpb-64">
      <HeroSection />
      <Desktop9 />
      <DepartmentsPage />
      <Desktop11 />
    </div>
  );
};

export default About;
