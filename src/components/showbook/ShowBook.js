import React from 'react'
import "./ShowBook.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddButton } from '../addbutton/AddButton';

export const ShowBook = ({ result }) => {
  return (
    <div className="book-wrapper col-2">
      <div className="book h-100">
        <div className='row img-wrapper'>
          <img className="cover img-fluid" alt="{result.title}" src={"https://covers.openlibrary.org/b/id/" + result.cover_i + "-M.jpg"} />
          <AddButton book={result}/>
        </div>
        <div className='row'>
          <h1 className="title">{result.title}</h1>
          <h2 className='author'>{result.author_name === undefined ? "Unknown Author" : result.author_name.toString()}</h2>
        </div>
      </div>
    </div>
  )
}
