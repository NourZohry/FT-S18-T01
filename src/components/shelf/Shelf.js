import React from 'react'
import { SearchResults } from '../searchresults/SearchResults';
import "./Shelf.css";


export const Shelf = ({ shelfBooks, setShelfBooks, setShowSearch }) => {

    const currentlyReading = shelfBooks.filter(book => book.shelfCategory === "Currently Reading");
    const wantToRead = shelfBooks.filter(book => book.shelfCategory === "Want to Read");
    const read = shelfBooks.filter(book => book.shelfCategory === "Read");

    return (
        <div>
            <div className="shelf-button-wrapper">
                <img className="shelf-button" alt="Shelf"         
                onClick={(event) => {setShowSearch(true)}} src={require("../../images/plus.png")} />
            </div>
            <div>
                <h1 className='shelf-category'>Currently Reading</h1>
                <div className='mx-auto'>
                <SearchResults results={currentlyReading} setShelfBooks={setShelfBooks} shelfBooks={shelfBooks} />
                </div>
            </div>
            <div>
                <h1 className='shelf-category'>Want to Read</h1>
                <SearchResults results={wantToRead} setShelfBooks={setShelfBooks} shelfBooks={shelfBooks} />
            </div>
            <div>
                <h1 className='shelf-category'>Read</h1>
                <SearchResults results={read} setShelfBooks={setShelfBooks} shelfBooks={shelfBooks} />
            </div>
        </div>

    )
}
