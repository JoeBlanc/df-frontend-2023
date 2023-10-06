'use client'

import React, { useState, useEffect, useContext } from 'react'
import { AddBook, Table, Theme } from './components'
import { BookContext } from './context'

function App() {
  const { bookList, handleAddBook, handleDeleteBook } = useContext(BookContext)
  // theme local storage
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
  const [currentTheme, setCurrentTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || systemTheme
    }
    return systemTheme
  })
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(currentTheme))
  }, [currentTheme])

  // initial theme check
  useEffect(() => {
    themeCheck()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  function themeCheck() {
    if (currentTheme === 'dark' || (!currentTheme && systemTheme === 'dark')) {
      document.documentElement.classList.add('dark')
      setCurrentTheme('dark')
    } else {
      document.documentElement.classList.add('light')
      setCurrentTheme('light')
    }
  }
  // switch theme
  const handleswitchTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      localStorage.setItem('theme', 'light')
      setCurrentTheme('light')
    } else {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setCurrentTheme('dark')
    }
  }
  return (
    <div className="App bg-gray-100 dark:bg-gray-800/70 flex flex-col items-center min-h-screen w-screen">
      <AddBook addBook={handleAddBook} />

      <Table data={bookList} handleDeleteBook={handleDeleteBook} />

      <div className="w-full h-[50px]" />

      <Theme
        handleSwitchTheme={handleswitchTheme}
        currentTheme={currentTheme}
      />
    </div>
  )
}

export default App
