import React from 'react'

const HeroSection = () => {
    return (
        <section className='w-full h-[100vh] flex relative z-0 border border-2 border-black'>
            <div id='hero_left' className='flex flex-col w-full h-full pl-16 pt-20 pb-8'>
                <img src="./imgs/IIEST_Shibpur_Logo.png" alt="IIEST Shibpur Logo" className='w-36' />
                <p id='hero_IIEST' className='font-[Poppins] font-[600] text-2xl pt-4 z-[2]'>Indian Institute Of Engineering Science And Technology, Shibpur</p>
                <p id='hero_studentSenate' className='font-[Poppins] font-[600] text-8xl pt-4 z-[2]'>STUDENT'S SENATE</p>
            </div>
            <div id='hero_right' className='flex justify-end w-full h-full'>
                <img src="./imgs/IIEST_Shibpur_Clock.png" alt="IIEST Shibpur Clock" className='h-full z-[2]' />
            </div>
            <img src="./imgs/Polygon_1.svg" alt="" className='absolute right-0 bottom-0 w-[55%] z-[3]' />
            <img src="./imgs/Polygon_2.svg" alt="" className='absolute right-0 bottom-0 w-[70%] z-[1]' />
        </section>
    )
}

export default HeroSection
