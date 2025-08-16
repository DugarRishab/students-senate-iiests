import React from 'react'

const Notice = ({ source, title, date, pdf, className }) => {
    
    const handleDownload = () => {
        // Create link to the PDF file
        const pdfPath = `./assets/notice_data/pdfs/${pdf}`;
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = pdf;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="w-full min-h-max flex flex-col gap-1 min-[430px]:gap-1.5 sm:gap-2.5 md:gap-3 border-b-[0.5px]">
            <span className='text-sm md:text-[0.8rem] md:text-sm opacity-[90%]'>{source}</span>
            <span
                onClick={handleDownload}
                className='text-base md:text-lg lg:text-xl hover:underline cursor-pointer'
            >
                {title}
            </span>
            <div className='flex justify-between items-center'>
                <span className='text-xs md:text-[0.8rem] md:text-sm opacity-[90%] pb-1 min-[430px]:pb-1.5 sm:pb-2.5 md:pb-3'>{date}</span>
            </div>
        </div>
    );
};

export default Notice