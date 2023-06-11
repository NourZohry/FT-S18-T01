import React, { useState } from 'react'
import "./AddButton.css"

export const AddButton = ({ book, setShelfBooks, shelfBooks }) => {

    const [showPopup, setShowPopup] = useState(false);

    function deleteIfExists(bookToDelete, books) {
        let existIndex = books.findIndex(book => book.key === bookToDelete.key);
        if (existIndex == -1) {
            return books;
        }
        else {
            return books.splice(existIndex, 1);
        }
    }

    function handleClick(actionString) {
        let booksCopy = [...shelfBooks];
        let books = booksCopy;
        console.log(book);

        deleteIfExists(book, books);
        if (actionString != "None") {
            book.shelfCategory = actionString;
            books.push(book);    
        }

        console.log(actionString);
        setShelfBooks(books);
    }

    function popupShow() {
        return (
            <div className="custom-dropdown-list">
                <h3 href="#" className="custom-dropdown-item custom-dropdown-header">Move to...</h3>
                <h3 onClick={(event) => { setShowPopup(false); handleClick(event.target.innerText) }}
                    href="#" className="custom-dropdown-item custom-dropdown-option">Currently Reading</h3>
                <h3 onClick={(event) => { setShowPopup(false); handleClick(event.target.innerText) }}
                    href="#" className="custom-dropdown-item custom-dropdown-option">Want to Read</h3>
                <h3 onClick={(event) => { setShowPopup(false); handleClick(event.target.innerText) }}
                    href="#" className="custom-dropdown-item custom-dropdown-option">Read</h3>
                <h3 onClick={(event) => { setShowPopup(false); handleClick(event.target.innerText) }}
                    href="#" className="custom-dropdown-item custom-dropdown-option">None</h3>
                <h3 onClick={() => { setShowPopup(false); }}
                    href="#" className="custom-dropdown-item custom-dropdown-option custom-dropdown-close">Close</h3>
                {/* </div> */}
            </div>
        )
    }

    return (
        <div className='addbutton-wrapper'>
            <img alt="add" className="addbutton" src={require("../../images/arrow-down-s-fill.png")}
                onClick={(event) => setShowPopup(true)} />
            {showPopup === true ? popupShow() : ""}
        </div>
    )
}
