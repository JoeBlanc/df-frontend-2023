'use client'

import { useRouter } from 'next/navigation'
import React, { useState, useEffect, useCallback } from 'react'

interface Book {
  name: string
  author: string
  topic: string
}

interface BookContextType {
  bookList: Book[]
  handleAddBook: (name: string, author: string, topic: string) => void
  handleDeleteBook: (name: string) => void
}

export const BookContext = React.createContext<BookContextType>({
  bookList: [],
  handleAddBook: () => {},
  handleDeleteBook: () => {},
})

export const BookProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const Router = useRouter()
  const data = [
    {
      name: 'Refactoring',
      author: 'Martin Fowler',
      topic: 'Software Engineering',
    },
    {
      name: 'Clean Code',
      author: 'Robert Cecil Martin',
      topic: 'Software Engineering',
    },
    {
      name: 'Adaptive Code',
      author: 'Gary McLean Hall',
      topic: 'Software Engineering',
    },
    {
      name: "DON'T MAKE ME THINK",
      author: 'Steve Krug',
      topic: 'Software Engineering',
    },
    {
      name: 'Soft Skills',
      author: 'John Sonmez',
      topic: 'Software Engineering',
    },
    {
      name: 'The Pragmatic Programmer',
      author: 'David Thomas',
      topic: 'Software Engineering',
    },
    {
      name: 'Head First Design Patterns',
      author: 'Eric Freeman',
      topic: 'Software Engineering',
    },
    {
      name: 'Smart Code',
      author: 'Robert Cecil Martin',
      topic: 'Software Engineering',
    },
  ]
  // book list local storage
  const [bookList, setBookList] = useState<Book[]>(() => {
    const localData = localStorage.getItem('bookList')
    return localData ? JSON.parse(localData) : data
  })
  useEffect(() => {
    localStorage.setItem('bookList', JSON.stringify(bookList))
  }, [bookList])

  // add book
  interface Book {
    name: string
    author: string
    topic: string
  }
  const handleAddBook = useCallback(
    (name: string, author: string, topic: string) => {
      setBookList((currentBookList: Array<Book>) => {
        return [{ name, author, topic }, ...currentBookList]
      })
    },
    [setBookList],
  )
  // delete book
  const handleDeleteBook = useCallback(
    (name: string) => {
      const confirm = window.confirm(
        'Are you sure you want to delete this book?',
      )
      if (confirm) {
        setBookList((currentBookList: Array<Book>) => {
          return currentBookList.filter((book) => book.name !== name)
        })
        Router.push('/')
      }
    },
    [setBookList, Router],
  )
  const contextValue = React.useMemo(
    () => ({
      bookList,
      handleAddBook,
      handleDeleteBook,
    }),
    [bookList, handleAddBook, handleDeleteBook],
  )
  return (
    <BookContext.Provider value={contextValue}>{children}</BookContext.Provider>
  )
}
