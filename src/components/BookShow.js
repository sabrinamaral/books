const BookShow = ({ book, onDelete }) => {
  const handleClick = () => {
    onDelete(book.id);
  };
  return (
    <div>
      <div className="actions">
        <button className="delete" onClick={handleClick}>
          delete
        </button>
      </div>
      <div className="book-show">{book.title}</div>
    </div>
  );
};

export default BookShow;
