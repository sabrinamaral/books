import { useContext, useState } from "react";
import BooksContext from "../context/books";
import BookEdit from "./BookEdit";

const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useContext(BooksContext);

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = () => {
    setShowEdit(false);
  };

  const content = !showEdit ? (
    <h3>{book.title}</h3>
  ) : (
    <BookEdit onSubmit={handleSubmit} book={book} />
  );

  return (
    <div>
      <div className="book-show">
        <img
          src={`https://picsum.photos/seed/${book.id}/300/200`}
          alt="book-cover"
        />
        {content}
        <div className="actions">
          <button className="edit" onClick={handleEditClick}>
            edit
          </button>
          <button className="delete" onClick={handleDeleteClick}>
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookShow;
