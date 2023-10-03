import React from 'react'

const Pagination = ({
  toggleNextPage,
  togglePreviousPage,
  pages,
  setCurrentPage,
}) => {
  return (
    <nav className=" flex border-2 border-gray-300 rounded-[20px] overflow-hidden">
      <button
        className=" hover:bg-gray-400 text-gray-700 dark:text-gray-300 w-[80px] pl-2 py-2 font-bold text-center focus:outline-none focus:shadow-outline"
        onClick={togglePreviousPage}
      >
        Previous
      </button>
      {pages.map((page, index) => (
        <button
          className=" rounded-xl overflow-hidden hover:bg-gray-400 text-gray-700 dark:text-gray-300 font-bold text-center px-2 focus:outline-none focus:shadow-outline"
          key={index}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
      <button
        className=" hover:bg-gray-400 text-gray-700 dark:text-gray-300 w-[80px] pr-2 py-2 font-bold text-center focus:outline-none focus:shadow-outline"
        onClick={toggleNextPage}
      >
        Next
      </button>
    </nav>
  )
}

export default Pagination
