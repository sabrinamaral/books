import { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };
  let content = !showEdit ? (
    <h3>{book.title}</h3>
  ) : (
    <BookEdit book={book} onSubmitFromBookShow={handleSubmit} />
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
