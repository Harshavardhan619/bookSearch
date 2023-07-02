import React, {  useState } from 'react'
import useBookContext from '../hooks/use-books-context';

function BookEdit({ book ,onSubmit}) {
    const [title, setTitle] = useState( book.title );
    const {editBookById} = useBookContext

   // console.log(book.title);
    const handleChange =(event) =>{
        setTitle(event.target.value);
    };
    // const handleClick = () => {
    //     onSubmit(book.id,title);
    // };
    const handleSubmit = (event) => {
        event.preventDefault();
       //onEdit();
       onSubmit();
       editBookById(book.id,title);
    }


  return (
        <form className='book-edit' onSubmit={handleSubmit}>
            <label>TITLE</label>
            <input className= 'input' value={title} book={book}   onChange={handleChange} />
            <button className='button is-primary' >
            save
            </button>
        </form>
    )
}

export default BookEdit