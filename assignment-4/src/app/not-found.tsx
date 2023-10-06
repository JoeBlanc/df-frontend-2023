import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="text-center bg-gray-100 dark:bg-gray-800/70">
      <p className="text-[200px] font-extrabold mt-[40px] text-gray-500 dark:text-gray-200 tracking-wide">
        404
      </p>
      <h2 className="text-4xl font-bold text-gray-500 dark:text-gray-200">
        PAGE NOT FOUND
      </h2>
      <p className="mt-[40px] text-gray-500 dark:text-gray-200 text-xl">
        Go back to{' '}
        <Link
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline m-0"
          href="/"
        >
          Dashboard
        </Link>
      </p>
    </main>
  )
}
