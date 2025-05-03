import AboutHeroSection from "../sections/HeroSection/AboutHeroSection";
import Desktop9 from "../sections/AboutSection/Desktop9";
import DepartmentsPage from "../sections/AboutSection/Departments";

const About = () => {
    return (
        <div className="bg-tintWhite w-full min-h-screen relative pb-64">
            <AboutHeroSection />
            <Desktop9 />
            <DepartmentsPage />
            {console.log("About")}
        </div>
    );
};

export default About;
