import React, { useState } from "react";

const BookEdit = ({ book, onSubmitFromBookShow }) => {
  const [title, setTitle] = useState(book.title);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitFromBookShow(book.id, title);
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
