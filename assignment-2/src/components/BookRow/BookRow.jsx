import React from 'react'
import './BookRow.css'

const BookRow = ({book, handleDeleteBook}) => {
  return (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
        <td className='px-6 py-4'>
            {book.name}
        </td>
        <td className='px-6 py-4'>
            {book.author}
        </td>
        <td className='px-6 py-4'>
            {book.topic}
        </td>
        <td className='px-6 py-4'>
        <button className='font-medium text-blue-600 dark:text-blue-500 hover:underline' onClick={() => handleDeleteBook(book.name)}>
            Delete
        </button>
        </td>
    </tr>
  )
}

export default BookRow