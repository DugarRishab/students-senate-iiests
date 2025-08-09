import Navbar from "../../components/Navbar/Navbar";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative">
      <Navbar />

      <div className="flex flex-col justify-start pt-[20%] pl-[5%] h-screen mx-auto max-w-[1920px]">
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
