import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const bookList = [
  {"name": "Refactoring", "author": "Martin Fowler", "topic": "Software Engineering"},
  {"name": "Clean Code", "author": "Robert Cecil Martin", "topic": "Software Engineering"},
  {"name": "Adaptive Code", "author": "Gary McLean Hall", "topic": "Software Engineering"},
  {"name": "DON'T MAKE ME THINK", "author": "Steve Krug", "topic": "Software Engineering"},
  {"name": "Soft Skills", "author": "John Sonmez", "topic": "Software Engineering"},
  {"name": "The Pragmatic Programmer", "author": "David Thomas", "topic": "Software Engineering"},
  {"name": "Head First Design Patterns", "author": "Eric Freeman", "topic": "Software Engineering"},
  {"name": "Smart Code", "author": "Robert Cecil Martin", "topic": "Software Engineering"},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={bookList}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
