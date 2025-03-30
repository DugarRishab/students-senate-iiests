import React from 'react'
import Notice from '../../components/Notice/Notice'
import Button from '../../components/Button/Button'

const SecondSection = () => {
    return (
        <section id='NotificationSection' className='w-full mx-auto max-w-[1700px] min-h-max lg:h-screen 2xl:h-full flex relative py-4 min-[430px]:py-6 min-[590px]:py-7 sm:py-8 md:py-9 lg:py-9 xl:py-10 gap-4 min-[430px]:gap-6 sm:gap-8 md:gap-9 lg:gap-9 xl:gap-10 z-0'>
            <div id='Notifications' className="flex flex-col items-end gap-2 min-[430px]:gap-3 min-[590px]:gap-4 sm:gap-5 md:gap-6 lg:gap-6 text-white w-[60%] max-h-max bg-[#1F1D86] p-4 min-[430px]:p-6 min-[590px]:p-7 sm:p-8 md:p-9 lg:p-9 xl:p-10">
                <h1 className='font-[600] text-xl min-[590px]:text-2xl sm:text-3xl md:text-3xl lg:text-3xl mb-2 md:mb-3 self-start'>Notices</h1>
                <Notice source="From the Office of Dean of Student Welfare" title="End-Semester examinations has been cazzed for all students in 4th year" date="12 Mar, 2025" link="#" className="" />
                <Notice source="From the Office of Dean of Student Welfare" title="End-Semester examinations has been cazzed for all students in 3rd year" date="12 Mar, 2025" link="#" className="" />
                <Notice source="From the Office of Dean of Student Welfare" title="End-Semester examinations has been cazzed for all students in 2nd year" date="12 Mar, 2025" link="#" className="" />
                <Button
                    text="View all"
                    className="pr-0 hover:underline"
                    endIcon={
                        <svg 
                            width="20" 
                            height="20" 
                            viewBox="0 0 30 31" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                d="M20.2145 14.2499L13.5095 7.54486L15.2773 5.7771L25 15.4999L15.2773 25.2225L13.5095 23.4548L20.2145 16.7499H5V14.2499H20.2145Z" 
                                fill="white" 
                            />
                        </svg>
                    }
                />
            </div>
        </section>
    )
}

export default SecondSection