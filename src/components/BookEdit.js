import React, { useContext, useState } from "react";
import BooksContext from "../context/books";

const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useContext(BooksContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    editBookById(book.id, title);
    onSubmit();
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>title</label>
      <input
        className="input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="button is-primary">save</button>
    </form>
  );
};

export default BookEdit;
