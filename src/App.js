import { useState, useEffect } from "react";
import axios from "axios";
import BookCreate from "../src/components/BookCreate";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const resp = await axios.get("http://localhost:3001/books");
    setBooks(resp.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

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
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
