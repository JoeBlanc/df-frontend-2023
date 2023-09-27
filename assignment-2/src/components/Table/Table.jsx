import React, { useEffect } from 'react'
import { useState} from 'react'
import BookRow from '../BookRow/BookRow';
import Pagination from '../Pagination/Pagination';

const Table = ({data, handleDeleteBook}) => {
  const [searchValue, setsearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1); const booksPerPage = 5;
  const [currentBooks, setCurrentBooks] = useState(data.slice(0, booksPerPage));
  // const [pageNumbers, setPageNumbers] = useState([]); // [1, 2, 3, 4, 5
  const lastBookIndex = currentPage * booksPerPage; const firstBookIndex = lastBookIndex - booksPerPage;

  // PAGINATION
  // solution: filtered the data first, then store it in a new variable, then slice the new variable
  useEffect(() => {
    const filteredBooks = data.filter((book) => book.name.toLowerCase().includes(searchValue.toLocaleLowerCase()));
    setCurrentBooks(filteredBooks.slice(firstBookIndex, lastBookIndex));
  }, [searchValue, currentPage, data, firstBookIndex, lastBookIndex])

  // better solution: create a new array of page numbers, then map it
  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / booksPerPage); i++) {
    pages.push(i);
  }

  function toggleNextPage() {
    if (currentPage === pages.length) {
      alert('This is the last page')
      return
    } else {
      setCurrentPage((currentPage) => {return currentPage + 1});
    }
  }

  function togglePreviousPage() {
    if (currentPage === 1) {
      alert('This is the first page')
      return
    } else {
      setCurrentPage((currentPage) => {return currentPage - 1});
    }
  }

  return (
    <section className='relative my-[20px]'>
      <div className='my-[20px] flex justify-between px-6'>
        {/* Searchbox */}
        <input className=' border-2 border-gray-400 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none ' type="text" placeholder="Search by book name" value={searchValue} onChange={(e) => {setsearchValue(e.target.value)}} />
        {/* Pagination */}
        <Pagination toggleNextPage={toggleNextPage} togglePreviousPage={togglePreviousPage} setCurrentPage={setCurrentPage} pages={pages}/>
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