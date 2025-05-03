export default function Desktop9() {
    return (
        <section id="Desktop9" className="w-full max-w-[1700px] min-h-max mx-auto flex flex-col gap-5 min-[360px]:gap-5 -mt-[2rem] min-[360px]:-mt-[2rem] min-[430px]:-mt-[3rem] min-[590px]:-mt-[3rem] sm:-mt-[4rem] md:-mt-[4rem] lg:-mt-[5rem] relative z-10">
            {/* top */}
            <div className="w-full flex items-center justify-end">
                {/* [20%] min-[430px]:h-24 min-[590px]:h-[] */}
                <div className="h-auto w-[60%] min-[3600px]:w-[55%] items-center justify-center min-[360px]:text-base min-[430px]:text-lg min-[590px]:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-nowrap px-3 min-[360px]:px-3 min-[430px]:px-6 min-[590px]:px-9 sm:px-9 md:px-10 lg:px-11 py-4 min-[360px]:py-4 min-[430px]:py-6 min-[590px]:py-9 sm:py-11 md:py-12 lg:py-12 text-white font-bold bg-blue">
                    What is Student Senate <br /> comprised of?
                </div>
            </div>

            {/* bottom */}
            <div className="w-full flex gap-0 min-[430px]:gap-0 min-[590px]:gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
                <div className="flex justify-end w-1/2">
                    <div className="p-6 w-full min-[430px]:w-full sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[60%] h-auto text-yellow bg-blue">
                        <h2 className="font-semibold text-base min-[360px]:text-base min-[430px]:text-lg min-[590px]:text-xl sm:text-2xl md:text-3xl mb-3 font-[Poppins]">
                            The Executive Secretariat
                        </h2>
                        <p className="text-xs min-[360px]:text-sm min-[430px]:text-sm min-[590px]:text-base sm:text-lg md:text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Itaque corrupti ad facere obcaecati velit
                            odio? Maxime debitis nobis illo adipisci
                            praesentium. Non commodi est sint, doloribus qui
                            fugiat suscipit atque.
                        </p>
                    </div>
                </div>

                <div className="flex justify-start w-1/2">
                    <div className="p-6 w-full min-[430px]:w-full sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[60%] h-auto text-black bg-transparent">
                        <h2 className=" font-semibold text-base min-[360px]:text-base min-[430px]:text-lg min-[590px]:text-xl sm:text-2xl md:text-3xl mb-3 font-[Poppins]">
                            The General Council
                        </h2>
                        <p className="text-xs min-[360px]:text-sm min-[430px]:text-sm min-[590px]:text-base sm:text-lg md:text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Itaque corrupti ad facere obcaecati velit
                            odio? Maxime debitis nobis illo adipisci
                            praesentium. Non commodi est sint, doloribus qui
                            fugiat suscipit atque.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
