import { useState } from "react";
import BookCreate from "../src/components/BookCreate";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    if (!title) {
      return;
    }
    setBooks([...books, { id: Math.round(Math.random() * 9999), title }]);
  };

  const deleteBookById = (id) => {
    // filter gives us a brand new array
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };
  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
