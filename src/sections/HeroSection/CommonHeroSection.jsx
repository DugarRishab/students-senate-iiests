import Navbar from "../../components/Navbar/Navbar";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative">
      <Navbar />

      <div className="flex flex-col justify-start pt-[12%] pl-[5%] h-screen mx-auto max-w-[1920px]">
        <img
          src="./assets/imgs/Students_Senate_Logo.png"
          alt="IIEST Shibpur Logo"
          className="w-10 min-[430px]:w-12 min-[590px]:w-14 sm:w-16 md:w-20 lg:w-24 xl:w-28 z-40"
        />
        <p className="text-3xl font-normal font-sans mb-12 z-40">
          Indian Institute Of Engineering Science and <br /> Technology, Shibpur
        </p>
        <p className="uppercase text-8xl font-semibold __font-viaoda font-sans z-40 tracking-tight">
          STUDENTS<span className="font-serif">’</span> <br /> SENATE
        </p>
      </div>

      <style>
        {`
        @media screen and (min-width: 2000px) {
          #clock-tower-img-container{
            right: 15%;
          }
        }
        `}
      </style>

      <div
        id="clock-tower-img-container"
        className="absolute right-0 bottom-0 h-full w-[57%] z-20 flex items-end justify-end overflow-hidden"
      >
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
