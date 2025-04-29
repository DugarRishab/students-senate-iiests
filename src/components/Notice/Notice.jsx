import React from 'react'

const Notice = ({ source, title, date, link, className }) => {
    return (
        <div className="w-full min-h-max flex flex-col gap-1 min-[430px]:gap-1.5 sm:gap-2.5 md:gap-3 border-b-[0.5px]">
            <span className='text-[0.6rem] min-[430px]:text-[0.65rem] sm:text-xs md:text-[0.8rem] md:text-sm'>{source}</span>
            <span onClick={link} className='text-sm min-[430px]:text-sm sm:text-base md:text-lg lg:text-xl hover:underline'>{title}</span>
            <div className='flex justify-between items-center'>
                <span className='text-[0.6rem] min-[430px]:text-[0.65rem] sm:text-xs md:text-[0.8rem] md:text-sm'>{date}</span>
                <span className='text-[0.6rem] min-[430px]:text-[0.65rem] sm:text-xs md:text-[0.8rem] flex items-center gap-1 sm:gap-1.5 cursor-pointer hover:underline mb-1.5'>
                    <span>Download</span>
                    <span>
                        <svg className='w-3.5 sm:w-4 md:w-5' width="12" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8334 13.4763L15.3034 9.00625L16.4819 10.1848L10.0001 16.6666L3.51825 10.1848L4.69677 9.00625L9.16673 13.4763V3.33325H10.8334V13.4763Z" fill="white" />
                        </svg>
                    </span>
                </span>
            </div>
        </div>
    );
};

export default Notice