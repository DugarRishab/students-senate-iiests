const HeroSection = () => {
	return (
		// <section className='w-full min-h-max h-[37vh] min-[430px]:h-[45vh] flex relative z-0'>
		<section
			id="HeroSection"
			className="w-full mx-auto max-w-[1700px] h-[100svh] lg:h-screen 2xl:h-full flex flex-col relative z-0"
		>
			{/* hero left */}
			<div className="max-sm:w-full h-1/2 flex flex-col justify-center border-2 border-red-500 p-4">
				<img
					src="./assets/imgs/Students_Senate_Logo.png"
					alt="Students' Senate Logo"
					className="w-16 sm:w-20 lg:w-24 xl:w-28"
				/>
				<p className="font-[Poppins] font-[600] max-sm:max-w-[85%] text-[1.1rem] min-[430px]:text-xs min-[590px]:text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl z-[2]">
					Indian Institute Of Engineering Science And Technology, Shibpur
				</p>
				<p className="font-[Poppins] font-[600] text-4xl min-[430px]:text-3xl min-[590px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl z-[2]">
					STUDENTS' <br /> SENATE
				</p>
			</div>

			{/* hero right */}
			<div className="flex justify-center sm:justify-end max-sm:w-full h-1/2 border-2 border-green-500">
				<img
					src="./assets/imgs/IIEST_Shibpur_Clock.png"
					alt="IIEST Shibpur Clock"
					className="max-sm:h-full max-sm:w-auto sm:absolute sm:right-0 sm:bottom-0 z-[2] select-none"
				/>
			</div>

			<div className="bg-[#1F1D86] clip-polygon-3 sm:clip-polygon-1 absolute right-0 bottom-0 z-[3] w-full h-full"></div>
			<div className="bg-[#F4B860] clip-polygon-4 sm:clip-polygon-2 absolute right-0 bottom-0 z-[1] w-full h-full"></div>
		</section>
	);
};

export default HeroSection;
