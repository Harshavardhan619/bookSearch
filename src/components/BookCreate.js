import React, { useState } from 'react'
import useBooksContext from '../hooks/use-books-context';

function BookCreate() {
    const [title, setTitle] = useState([]);
    const {createBook} = useBooksContext();
 
    const handleClick = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('');

    }
  return (
    <div className="book-create">
        <h3>ADD A BOOK</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label> 
            <input className='input' value={title} onChange ={handleClick} />
            <button className='button'>CREATE</button>
        </form>
    </div>
  )
}

export default BookCreate