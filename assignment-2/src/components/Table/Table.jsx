import React from 'react'
import { useState} from 'react'
import BookRow from '../BookRow/BookRow';

const Table = ({data, handleDeleteBook}) => {
  const [searchValue, setsearchValue] = useState("");

  //Pagination here, still not figure out how to split the Pagination into a component
  const [currentPage, setCurrentPage] = useState(1); const booksPerPage = 5;
  const lastBookIndex = currentPage * booksPerPage;
  const firstBookIndex = lastBookIndex - booksPerPage;
  // currentBooks here is slice from the original data and then filtered by searchValue so that search and pagination does not work along
  // if want to make search and pagination work along, need to slice the data after being filtered by searchValue
  // solution: filtered the data first, then store it in a new variable, then slice the new variable
  const currentBooks = data.slice(firstBookIndex, lastBookIndex);
  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / booksPerPage); i++) {
    pages.push(i);
  }

  return (
    <section className='relative my-[20px]'>
      <div className='my-[20px] flex justify-between px-6'>
        <input className=' border-2 border-gray-400 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none ' type="text" placeholder="Search by book name" value={searchValue} onChange={(e) => {setsearchValue(e.target.value)}} />
        <nav className=' flex border-2 border-gray-300 rounded-[20px] overflow-hidden'>
            <button className=' hover:bg-gray-500/50 text-gray-700 w-[80px] pl-2 py-2 font-bold text-center focus:outline-none focus:shadow-outline' onClick={() => setCurrentPage((currentPage) => currentPage - 1)}>Previous</button>
            {pages.map((page, index) => (
                <button className=' rounded-xl overflow-hidden hover:bg-gray-500/50 text-gray-700 font-bold text-center px-2 focus:outline-none focus:shadow-outline' key={index} onClick={() => setCurrentPage(page)}>{page}</button>
            ))}
            <button className=' hover:bg-gray-500/50 text-gray-700 w-[80px] pr-2 py-2 font-bold text-center focus:outline-none focus:shadow-outline' onClick={() => setCurrentPage((currentPage) => currentPage + 1)}>Next</button>
        </nav>
      </div>
      
      {/* Table */}
      <table className='w-full sm:rounded-xl border overflow-hidden text-sm text-left text-gray-700 dark:text-gray-400 '>
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
          <tr>
              <th scope="col" className="px-6 py-3">
                  Product name
              </th>
              <th scope="col" className="px-6 py-3">
                  Author
              </th>
              <th scope="col" className="px-6 py-3">
                  Topic
              </th>
              <th scope="col" className="px-6 py-3 ">
                  Action
              </th>
          </tr>
        </thead>
        <tbody>
          {/* {data.length === 0 && <tr><td colSpan="4">No data</td></tr>} */}
          {currentBooks.filter((book) => book.name.toLowerCase().includes(searchValue.toLocaleLowerCase())).map((book, index) => (
            <BookRow book={book} handleDeleteBook={handleDeleteBook} key={index} /> ))
          }
        </tbody>
      </table>
    </section>
  )
}

export default Table