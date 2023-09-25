import './App.css';
import { Header, AddBook, Table, Theme } from './components';
import { useState, useEffect } from 'react';
import { createContext } from 'react';

export const ThemeContext = createContext(null);


function App({data}) {
  const [bookList, setBookList] = useState(()=>{
    const localData = localStorage.getItem('bookList');
    return localData ? JSON.parse(localData) : data;
  });

  useEffect(() => {
    localStorage.setItem('bookList', JSON.stringify(bookList));
  }, [bookList]);

  const [theme, setTheme] = useState('dark');

  function toggleTheme() {
    setTheme(currentTheme => {
      return currentTheme === 'light' ? 'dark' : 'light';
    });
  }

  function handleAddBook(name, author, topic) {
    setBookList(currentBookList => {
      return [{name, author, topic} ,...currentBookList ]
    });
  }

  function handleDeleteBook(name) {
    let confirm = window.confirm('Are you sure you want to delete this book?');
    if (confirm) {
      setBookList(currentBookList => {
        return currentBookList.filter(book => book.name !== name)
      });
    }
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className='App' id={theme} >
        <Header />

        {/* <Theme /> */}

        <AddBook addBook={handleAddBook} />

        <Table data={bookList} handleDeleteBook={handleDeleteBook}/>

      </div>
    </ThemeContext.Provider>
  );
}

export default App;
