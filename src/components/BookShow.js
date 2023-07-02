import React, { useState } from 'react'
import BookEdit from './BookEdit';
import useBookContext from '../hooks/use-books-context';


function BookShow({book}) {
    const [showEdit, setShowEdit] = useState(false);
    
    const {deleteBookById} = useBookContext

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };
    const handleSubmit = () =>{
        setShowEdit(false);
    };
    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content= <BookEdit book={book} onSubmit={handleSubmit}/>
    };

    const handleDeleteClick = () =>{
        deleteBookById(book.id);
    };
  return (
    <div className="book-show" onSubmit={handleSubmit}>
        <img
        alt='book'
        src= {`http://picsum.photos/seed/${book.id}/300/200`}
        />
         {content}
         <div className='actions'>
            <button className='edit' onClick={handleEditClick}>
                edit
            </button>
            <button className="delete"  onClick={handleDeleteClick}>
              delete
            </button>
         </div>
         
          </div>
  )
}

export default BookShow