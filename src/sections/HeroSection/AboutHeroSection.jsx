import React from 'react'
import Desktop9 from '../AboutSection/Desktop9'

const AboutHeroSection = () => {
    return (
        <section id='AboutHeroSection' className='w-full mx-auto max-w-[1700px] min-h-max lg:h-[calc(100vh-4rem)] 2xl:h-full flex relative z-0'>
            <div id='hero_left' className='flex flex-col w-1/2 h-full pl-4 min-[430px]:pl-6 min-[590px]:pl-7 sm:pl-8 md:pl-9 lg:pl-9 xl:pl-10 py-7 min-[430px]:py-8 min-[590px]:py-10 sm:py-12 md:py-14'>
                <img src="./assets/imgs/senate_logo.png" alt="IIEST Shibpur Logo" className='w-10 min-[430px]:w-12 min-[590px]:w-14 sm:w-16 md:w-20 lg:w-24 xl:w-28' />
                <p id='hero_IIEST' className='font-[Poppins] font-[600] text-[0.6rem] min-[430px]:text-xs min-[590px]:text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl pt-2 min-[430px]:pt-4 min-[590px]:pt-6 sm:pt-8 z-[2]'>Indian Institute Of Engineering Science And Technology, Shibpur</p>
                <p id='hero_studentSenate' className='font-[Poppins] font-[600] text-2xl min-[430px]:text-3xl min-[590px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl pt-2 min-[430px]:pt-4 min-[590px]:pt-6 sm:pt-8 z-[2]'>STUDENTS' SENATE</p>
            </div>
            <div id='hero_right' className='flex justify-end w-1/2 h-full'>
                <img src="./assets/imgs/IIEST_Shibpur_Clock.png" alt="IIEST Shibpur Clock" className='h-full absolute right-0 bottom-0 z-[2]' />
            </div>
            <div className='bg-[#F4B860] clip-polygon-3 absolute right-0 bottom-0 z-[1] w-full h-full'></div>
        </section>
    )
}

export default AboutHeroSection