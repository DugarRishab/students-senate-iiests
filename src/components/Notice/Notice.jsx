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
            <span className='text-[0.6rem] min-[430px]:text-[0.65rem] sm:text-xs md:text-[0.8rem] md:text-sm'>{source}</span>
            <span
                onClick={handleDownload}
                className='text-sm min-[430px]:text-sm sm:text-base md:text-lg lg:text-xl hover:underline cursor-pointer'
            >
                {title}
            </span>
            <div className='flex justify-between items-center'>
                <span className='text-[0.6rem] min-[430px]:text-[0.65rem] sm:text-xs md:text-[0.8rem] md:text-sm'>{date}</span>
            </div>
        </div>
    );
};

export default Notice