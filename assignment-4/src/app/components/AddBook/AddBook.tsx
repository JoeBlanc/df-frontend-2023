import React, { useState } from 'react'

const AddBook = ({ addBook }) => {
  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')
  const [topic, setTopic] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  function handleCloseModal() {
    setIsOpen(false)
    // empty modal's inputs
    setName('')
    setAuthor('')
    setTopic('')
  }

  function handleAddBook(
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.preventDefault()
    if (name === '' || author === '' || topic === '') {
      alert('Please fill out all fields')
    } else {
      addBook(name, author, topic)
      setName('')
      setAuthor('')
      setTopic('')
    }
  }

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        onClick={() => {
          setIsOpen(true)
        }}
      >
        Add Book
      </button>
      {isOpen ? (
        <>
          {/* overlay */}
          <div className="fixed z-[9] inset-0 bg-gray-900/50 " />
          {/* modal */}
          <div className="fixed z-[10] top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white shadow-md rounded-lg w-[400px] px-8 pt-6 pb-8 mb-4">
              <header className="flex justify-between items-center ">
                <h2 className="text-gray-700 font-bold text-xl">
                  Book Information
                </h2>
                <button
                  onClick={() => handleCloseModal()}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                >
                  X
                </button>
              </header>
              <form onSubmit={handleAddBook} className="w-full px-8 py-4 ">
                <div className="mb-4">
                  <label
                    className="block text-left text-gray-700 text-md font-bold mb-2"
                    htmlFor="Name"
                  >
                    Name
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-left text-gray-700 text-md font-bold mb-2"
                    htmlFor="author-name"
                  >
                    Author
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                    />
                  </label>
                </div>
                <div className="mb-6">
                  <label
                    className="block text-left text-gray-700 text-md font-bold mb-2"
                    htmlFor="book-topic"
                  >
                    Topic
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                    />
                  </label>
                </div>
                <div className=" flex items-center justify-end gap-3">
                  <button
                    onClick={handleAddBook}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Add book
                  </button>
                  <button
                    onClick={() => handleCloseModal()}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default AddBook
