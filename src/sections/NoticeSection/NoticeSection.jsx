import React, { useState, useEffect } from 'react'
import Notice from '../../components/Notice/Notice'
import Button from '../../components/Button/Button'

const NoticeSection = () => {
    const [notices, setNotices] = useState([]);
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    useEffect(() => {
        // Fetch notices data from JSON file
        fetch('./assets/notice_data/notices.json')
            .then(response => response.json())
            .then(data => {
                setNotices(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching notices:', error);
                setLoading(false);
            });
    }, []);

    // Display only first 3 notices
    const displayedNotices = notices.slice(0, 3);

    // Pagination calculations
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentNotices = notices.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(notices.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1);
    };

    return (
        <section id='NotificationSection' className='w-full mx-auto max-w-[1700px] min-h-max lg:h-screen 2xl:h-full flex relative py-4 min-[430px]:py-6 min-[590px]:py-7 sm:py-8 md:py-9 lg:py-9 xl:py-10 gap-4 min-[430px]:gap-6 sm:gap-8 md:gap-9 lg:gap-9 xl:gap-10 z-0'>
            <div id='Notifications' className="min-h-max flex flex-col items-end gap-2 min-[430px]:gap-3 min-[590px]:gap-4 sm:gap-5 md:gap-6 lg:gap-6 text-white w-full md:w-[60%] max-h-max bg-[#1F1D86] p-4 min-[430px]:p-6 min-[590px]:p-7 sm:p-8 md:p-9 lg:p-9 xl:p-10">
                <div className='flex justify-between w-full'>
                    <h1 className='font-[600] text-xl min-[590px]:text-2xl sm:text-3xl md:text-3xl lg:text-3xl mb-2 md:mb-3 self-start'>Notices</h1>

                    {/* Items per page selector */}
                    <div className="mb-4 flex items-center gap-2">
                        <label htmlFor="itemsPerPage" className="text-sm">Show:</label>
                        <select
                            id="itemsPerPage"
                            value={itemsPerPage}
                            onChange={handleItemsPerPageChange}
                            className="text-black px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                        </select>
                        <span className="text-sm">per page</span>
                    </div>
                </div>

                {/* Notices list */}
                {loading ? (
                    <p>Loading notices...</p>
                ) : currentNotices.length === 0 ? (
                    <p>No notices available.</p>
                ) : (
                    currentNotices.map((notice) => (
                        <Notice
                            key={notice.id}
                            source={notice.source}
                            title={notice.title}
                            date={notice.date}
                            pdf={notice.pdf}
                        />
                    ))
                )}

                {/* Pagination buttons */}
                {totalPages > 1 && (
                    <div className="flex gap-2 mt-4 flex-wrap">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => handlePageChange(index + 1)}
                                className={`px-3 py-1 rounded ${currentPage === index + 1
                                    ? 'bg-white text-black'
                                    : 'bg-gray-300 text-black hover:bg-gray-400'
                                    }`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default NoticeSection