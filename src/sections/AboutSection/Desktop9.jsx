export default function Desktop9() {
  return (
    <section className="min-h-screen relative mx-auto">
      {/* top */}
      <div className="w-full flex justify-end mb-[40vw] md:mb-36 xl:mb-52">
        <div className="h-[20%] w-[90%] md:w-[60%] text-4xl md:text-6xl md:font-bold p-6 md:p-8 2xl:p-12 pt-6 md:pt-28 text-tintWhite bg-blue rounded-bl-lg">
          <div className="md:hidden">
            What is the <br /> Student Senate <br /> comprised of?
          </div>
          <div className="hidden md:block">
            What is the Student Senate <br /> comprised of?
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="w-full flex flex-col md:flex-row gap-[10vw] md:gap-0">
        <div className="flex justify-start md:justify-end md:w-[40%]">
          <div className="p-6 xl:p-10 w-[90%] md:w-[400px] xl:w-[600px] text-white md:text-yellow bg-purple md:bg-blue rounded-tr-lg rounded-br-lg">
            <h2 className="text-2xl md:text-5xl mb-3 xl:mb-8 font-[Poppins]">
              <div className="md:hidden">The Executive Secretariat</div>
              <div className="hidden md:block">The Executive Secretariat</div>
            </h2>
            <p className="text-sm md:text-base xl:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti ad facere obcaecati velit odio? Maxime debitis nobis illo
              adipisci praesentium. Non commodi est sint, doloribus qui fugiat
              suscipit atque.
            </p>
          </div>
        </div>

        <div className="md:ml-36">
          <div className="p-6 xl:p-10 w-[90%] md:w-[400px] xl:w-[600px] text-white md:text-black bg-purple md:bg-transparent rounded-tr-lg rounded-br-lg">
            <h2 className="text-2xl md:text-5xl mb-3 xl:mb-8 font-[Poppins]">
              The General Council
            </h2>
            <p className="text-sm md:text-base xl:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti ad facere obcaecati velit odio? Maxime debitis nobis illo
              adipisci praesentium. Non commodi est sint, doloribus qui fugiat
              suscipit atque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
