import React from 'react'
import Link from 'next/link'

const BookRow = ({ book, handleDeleteBook }) => {
  return (
    <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
      <td className="px-6 py-4">{book.name}</td>
      <td className="px-6 py-4">{book.author}</td>
      <td className="px-6 py-4">{book.topic}</td>
      <td className="px-6 py-4">
        <Link
          className="mr-6 font-medium text-blue-600 dark:text-blue-500 hover:underline"
          href={{
            pathname: `/books/${book.name}`,
            query: {
              name: book.name,
              author: book.author,
              topic: book.topic,
              // data: JSON.stringify(book),
              // handleDeleteBook: handleDeleteBook.toString(),
            },
          }}
        >
          Details
        </Link>
        <button
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          onClick={() => handleDeleteBook(book.name)}
        >
          Delete
        </button>
      </td>
    </tr>
  )
}

export default BookRow
