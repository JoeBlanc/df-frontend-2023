'use client'

import React from 'react'
import Link from 'next/link'
import { BookContext } from '../../context'

export default function Page({
  searchParams,
}: {
  searchParams: {
    name: string
    author: string
    topic: string
  }
}) {
  const { handleDeleteBook } = React.useContext(BookContext)
  const handleDeleteBookBtn = (bookName: string) => {
    handleDeleteBook(bookName)
  }
  return (
    <main className="bg-gray-100 dark:bg-gray-800/70 p-10 flex flex-col gap-10 items-start min-h-screen ">
      <Link
        className="text-xl font-medium text-blue-600 dark:text-blue-500 hover:underline m-0"
        href="\"
      >
        Go back
      </Link>
      <h2 className="text-gray-700 dark:text-gray-200 text-xl font-bold tracking-wider ">
        {searchParams.name}
      </h2>
      <p className="text-gray-700 dark:text-gray-200 tracking-wide">
        Author: {searchParams.author}
      </p>
      <p className="text-gray-700 dark:text-gray-200 tracking-wide">
        Topic: {searchParams.topic}
      </p>
      <button
        className=" text-xl font-medium text-blue-600 dark:text-blue-500 hover:underline"
        onClick={() => handleDeleteBookBtn(searchParams.name)}
      >
        Delete
      </button>
    </main>
  )
}
