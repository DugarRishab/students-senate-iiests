import HeroSection from "../sections/HeroSection/CommonHeroSection";
import Desktop9 from "../sections/AboutSection/Desktop9";
import DepartmentsPage from "../sections/AboutSection/Departments";

const About = () => {
    return (
        <div className="bg-tintWhite w-full min-h-screen relative pb-64">
            <HeroSection />
            <Desktop9 />
            <DepartmentsPage />
        </div>
    );
};

export default About;
