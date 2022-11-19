import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const resp = await axios.get("http://localhost:3001/books");
    setBooks(resp.data);
  };

  const createBook = async (title) => {
    if (!title) {
      return;
    }
    const resp = await axios.post("http://localhost:3001/books", {
      title,
    });

    setBooks([...books, resp.data]);
  };

  const editBookById = async (id, newTitle) => {
    const resp = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...resp.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    // filter gives us a brand new array
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <BooksContext.Provider
      value={{ books, fetchBooks, createBook, editBookById, deleteBookById }}
    >
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
