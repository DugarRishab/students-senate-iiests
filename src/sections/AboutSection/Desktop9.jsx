export default function Desktop9() {
  return (
    <section className="min-h-screen relative mx-auto">
      {/* top */}
      <div className="w-full flex justify-end mb-36 xl:mb-52">
        <div className="h-[20%] w-[60%] text-6xl font-bold p-8 2xl:p-12 pt-28 text-tintWhite bg-blue">
          What is Student Senate <br /> comprised of?
        </div>
      </div>

      {/* bottom */}
      <div className="w-full flex">
        <div className="flex justify-end w-[40%]">
          <div className="p-6 xl:p-10 w-[400px] xl:w-[600px] text-yellow bg-blue">
            <h2 className="text-5xl mb-3 xl:mb-8 font-[Poppins]">
              The Executive Secretariat
            </h2>
            <p className="text-base xl:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti ad facere obcaecati velit odio? Maxime debitis nobis illo
              adipisci praesentium. Non commodi est sint, doloribus qui fugiat
              suscipit atque.
            </p>
          </div>
        </div>

        <div className="ml-36">
          <div className="p-6 xl:p-10 w-[400px] xl:w-[600px] text-black bg-transparent">
            <h2 className="text-5xl mb-3 xl:mb-8 font-[Poppins]">
              The General Council
            </h2>
            <p className="text-base xl:text-xl">
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
