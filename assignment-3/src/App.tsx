import './App.css';
import { useState, useEffect } from 'react';
import { Header, AddBook, Table, Theme } from './components';

function App({data}) {
  // book list local storage
  const [bookList, setBookList] = useState(()=>{
    const localData = localStorage.getItem('bookList');
    return localData ? JSON.parse(localData) : data;
  });
  useEffect(() => {
    localStorage.setItem('bookList', JSON.stringify(bookList));
  }, [bookList]);

  // theme local storage
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem('theme') || systemTheme
  );
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(currentTheme));
  }, [currentTheme]);
  
  // initial theme check
  useEffect(() => {themeCheck()})
  function themeCheck() {
    if (currentTheme === 'dark' || (!currentTheme && systemTheme ==='dark')) {
      document.documentElement.classList.add('dark');
      setCurrentTheme('dark');
    } else {
      document.documentElement.classList.add('light');
      setCurrentTheme('light');
    }
  }
  // switch theme
  const handleswitchTheme = () => {
    if(document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
      setCurrentTheme('light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setCurrentTheme('dark');
    }
  } 
  // add book
  interface Book {
    name: string;
    author: string;
    topic: string;
  }
  const handleAddBook = (name : string, author: string, topic:string) => {
    setBookList((currentBookList: Array<Book>) => {
      return [{name, author, topic} ,...currentBookList ]
    });
  }
  // delete book
  const handleDeleteBook = (name : string) => {
    const confirm = window.confirm('Are you sure you want to delete this book?');
    if (confirm) {
      setBookList((currentBookList: Array<Book>) => {
        return currentBookList.filter(book => book.name !== name)
      });
    }
  }

  return (
    <div className='App bg-gray-100 dark:bg-gray-800/70'>
      <Header />

      <AddBook addBook={handleAddBook} />

      <Table data={bookList} handleDeleteBook={handleDeleteBook}/>

      <div className='w-full h-[50px]'/>      

      <Theme handleSwitchTheme={handleswitchTheme} currentTheme={currentTheme}/>

    </div>
  );
}

export default App;
