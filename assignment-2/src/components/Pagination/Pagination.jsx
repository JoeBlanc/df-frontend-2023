import React from 'react'
import { useState } from 'react'

const Pagination = ({data, handleDeleteBook}) => {

  //Pagination  
  const [currentPage, setCurrentPage] = useState(1); const booksPerPage = 4;
  const lastBookIndex = currentPage * booksPerPage;
  const firstBookIndex = lastBookIndex - booksPerPage;
  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / booksPerPage); i++) {
    pages.push(i);
  }
  const currentBooks = data.slice(firstBookIndex, lastBookIndex);
  function returnCurrentBook() {
    return true
  }

  return (
    <nav>
        <button onClick={() => setCurrentPage((currentPage) => currentPage - 1)}>-</button>
        {pages.map((page, index) => (
            <button key={index} onClick={() => setCurrentPage(page)}>{page}</button>
        ))}
        <button onClick={() => setCurrentPage((currentPage) => currentPage + 1)}>+</button>
    </nav>
  )
}

export default Pagination