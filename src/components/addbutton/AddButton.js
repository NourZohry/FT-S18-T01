import React, { useState } from 'react'
import "./AddButton.css"

export const AddButton = ({ book }) => {

    const [showPopup, setShowPopup] = useState(false);

    function handleClick(actionString) {
        book.libraryCategory = actionString;
        // console.log(book);
        // console.log(shelfBooks);
        // if (shelfBooks == 1) {
        //     shelfBooks = [];
        // }
        // shelfBooks = [];
        // shelfBooks = shelfBooks.push(book)
        // // setShelfBooks(shelfBooks);
        // console.log("test");
        // console.log(shelfBooks);
    }

    function popupShow() {
        return (
            <div className="custom-dropdown-list">
                {/* <div class="custom-dropdown-content"> */}
                <h3 href="#" className="custom-dropdown-item custom-dropdown-header">Move to...</h3>
                <h3 onClick={(event) => { setShowPopup(false); handleClick(event.target.innerText) }}
                    href="#" className="custom-dropdown-item custom-dropdown-option">Currently Reading</h3>
                <h3 onClick={() => { setShowPopup(false); handleClick() }}
                    href="#" className="custom-dropdown-item custom-dropdown-option">Want to Read</h3>
                <h3 onClick={() => { setShowPopup(false); handleClick() }}
                    href="#" className="custom-dropdown-item custom-dropdown-option">Read</h3>
                <h3 onClick={() => { setShowPopup(false); handleClick() }}
                    href="#" className="custom-dropdown-item custom-dropdown-option">None</h3>
                <h3 onClick={() => { setShowPopup(false);}}
                    href="#" className="custom-dropdown-item custom-dropdown-option custom-dropdown-close">Close</h3>
                {/* </div> */}
            </div>
        )
    }

    return (
        <div className='addbutton-wrapper'>
            <img alt="add" className="addbutton" src={require("../showbook/assets/arrow-down-s-fill.png")}
                onClick={(event) => setShowPopup(true)} />
            {showPopup === true ? popupShow() : ""}
        </div>
    )
}
