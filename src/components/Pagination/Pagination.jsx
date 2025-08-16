import React, { useRef, useEffect } from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null

  const createPageList = () => {
    // Compact display (Option B): always show 1,2 and last.
    // Show current page in middle only when it's not near the edges.
    const pages = []
    // Small totals: show all pages
    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
      return pages
    }

    pages.push(1)
    pages.push(2)

    if (currentPage <= 3) {
      // near the start: show 3 then ellipsis
      pages.push(3)
      pages.push('right-ellipsis')
    } else if (currentPage >= totalPages - 2) {
      // near the end: show left ellipsis then last-2 and last-1
      pages.push('left-ellipsis')
      pages.push(totalPages - 2)
      pages.push(totalPages - 1)
    } else {
      // middle: show left ellipsis, current, right ellipsis
      pages.push('left-ellipsis')
      pages.push(currentPage)
      pages.push('right-ellipsis')
    }

    pages.push(totalPages)
    return pages
  }

  const pages = createPageList()
  const navRef = useRef(null)

  // keyboard navigation: left/right/home/end
  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    const onKey = (e) => {
      if (e.key === 'ArrowLeft') onPageChange(Math.max(1, currentPage - 1))
      if (e.key === 'ArrowRight') onPageChange(Math.min(totalPages, currentPage + 1))
      if (e.key === 'Home') onPageChange(1)
      if (e.key === 'End') onPageChange(totalPages)
    }

    nav.addEventListener('keydown', onKey)
    return () => nav.removeEventListener('keydown', onKey)
  }, [currentPage, totalPages, onPageChange])

  const btnBase = 'px-4 py-2 border text-sm select-none'
  const btnInactive = 'bg-[#e9e9e9] border-[#cfcfcf] text-black hover:bg-[#e2e2e2]'
  const btnActive = 'bg-[#9aa3ff] text-black border-[#9aa3ff] font-semibold'
  const btnDisabled = 'bg-[#f3f3f3] text-gray-400 border-[#e8e8e8] cursor-not-allowed'

  return (
    <nav ref={navRef} tabIndex={0} aria-label="Pagination" className="flex items-center gap-2 outline-none">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={`${btnBase} ${currentPage === 1 ? btnDisabled : btnInactive} rounded-l`}
        aria-label="Previous page"
      >
        PREVIOUS
      </button>

      {pages.map((p, idx) => {
        if (typeof p === 'string') {
          return (
            <span key={p + idx} className="px-3 py-2 text-sm text-white/80">...</span>
          )
        }

        const isActive = p === currentPage
        return (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            aria-current={isActive ? 'page' : undefined}
            className={`${btnBase} ${isActive ? btnActive : btnInactive} ${isActive ? 'ring-2 ring-[#ccccff]' : ''} rounded-sm`}
          >
            {p}
          </button>
        )
      })}

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={`${btnBase} ${currentPage === totalPages ? btnDisabled : btnInactive} rounded-r`}
        aria-label="Next page"
      >
        Next
      </button>
    </nav>
  )
}

export default Pagination
