import React from 'react'
import BookShow from './BookShow'
import useBookContext from '../hooks/use-books-context'



function BookList() {
const {books} = useBookContext;

const updatedBookList = books?.map((book) => {
return <BookShow key={book.id} book={book}  />
});

  return (
   <div className="book-list">
    {updatedBookList}
    </div>
  )
}

export default BookList