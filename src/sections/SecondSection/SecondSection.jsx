import React from 'react'
import Button from '../../components/Button/Button'
const SecondSection = () => {
    return (
        <section id='SecondSection' className='w-full mx-auto max-w-[1700px] min-h-max lg:h-screen 2xl:h-full flex relative p-4 min-[430px]:p-6 min-[590px]:p-7 sm:p-8 md:p-9 lg:p-9 xl:p-10 gap-4 min-[430px]:gap-6 sm:gap-8 md:gap-9 lg:gap-9 xl:gap-10 z-0'>
            <div id='second_left' className='flex w-1/2 h-full'>
                <div id='image-what-is-student-senate' className='w-full aspect-square bg-[#4C4CED80]'></div>
            </div>
            <div id='second_right' className='flex flex-col gap-2 min-[430px]:gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 w-1/2 h-full'>
                <p id='what-is-student-senate' className='font-[600] text-base min-[430px]:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>What is the Student's Senate?</p>
                <p id='description-what-is-student-senate' className='font-[400] text-xs min-[430px]:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                <Button
                    text={"Read more"}
                    endIcon={
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20.2145 13.7499L13.5095 7.04486L15.2773 5.2771L25 14.9999L15.2773 24.7225L13.5095 22.9548L20.2145 16.2499H5V13.7499H20.2145Z"
                                fill="#DEF0F9"
                            />
                        </svg>
                    }
                ></Button>
            </div>
        </section>
    )
}

export default SecondSection