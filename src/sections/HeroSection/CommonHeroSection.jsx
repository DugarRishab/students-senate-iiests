import Navbar from "../../components/Navbar/Navbar_subha";

const HeroSection = () => {
    return (
        <section className="min-h-screen relative mx-auto">
            <Navbar />

            <div className="flex flex-col justify-end pb-[10%] pl-[5%] h-screen">
                <p className="text-3xl font-normal __font-serif font-sans mb-12 z-40">
                    Indian Institute Of Engineering Science and <br />{" "}
                    Technology, Shibpur
                </p>
                <p className="uppercase text-8xl font-semibold __font-viaoda font-sans z-40 tracking-tight">
                    STUDENTS' <br /> SENATE
                </p>
            </div>

            <div className="absolute right-0 bottom-0 h-full w-[57%] z-20 flex items-end justify-end overflow-hidden">
                <img
                    src="./assets/imgs/IIEST_Shibpur_Clock.png"
                    alt="IIEST Shibpur Clock"
                    className="object-cover z-20 transform translate-x-9"
                />
            </div>
            <div className="absolute h-[70%] w-full left-0 right-0 bottom-0 bg-yellow z-0"></div>
            <div className="absolute h-[20%] w-[60%] right-0 bottom-0 bg-blue z-30"></div>
        </section>
    );
};

export default HeroSection;
