import { createContext} from "react";
import { useState } from "react";
import axios from 'axios'
import { useCallback } from "react";


const BooksContext = createContext();

function Provider({children}) {
   
const [books, setBooks] = useState([]);

const fetchBooks = useCallback(
    async () => {
      const response = await axios.get('http://localhost:3001/books') ;
    //console.log(response.data);
    setBooks(response.data);
  },
  [],
)


const editBookById = async (id, newTitle) =>{
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
       title: newTitle,
     });
   //console.log(response);
   
   
     const updatedBooks = books.map((book)=>{
       if (book.id === id) {
         return {...book, ...response.data}
       }
       return book;
     });
     setBooks(updatedBooks);
   }
   
   const deleteBookById = async (id) => {
    const response =  await axios.delete(`http://localhost:3001/books/${id}`);
     console.log(response);
   
     const updatedBooks = books.filter((book)=>{
       return book.id !== id ;
     });
   setBooks(updatedBooks);
     
   }
   
   const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books',{
     title,
   });
    // console.log(response)
   
     console.log('create book',title);
     const updatedBooks = [...books,
       response.data
     ];
     setBooks(updatedBooks);
    //  console.log(books);
    }
     const valueToShare = {
       
       fetchBooks,
       createBook,
       deleteBookById,
       books,
       editBookById

     };

    return (
    <BooksContext.Provider value={valueToShare}>
       {children}
    </BooksContext.Provider >

    )
    
    

}



export {Provider};
export  default BooksContext ;