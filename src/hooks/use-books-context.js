import { useContext } from "react";
import BooksContext from "../context/book";



function useBookContext () {
    return useContext(BooksContext);
  }

  export default useBookContext;