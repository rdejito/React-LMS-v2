function MemberCard({ item, books, today }) {
  const book = books.find((book) => book.id === item.bookId);
  const dueDate = new Date(item.dueDate);
  const isOverdue = !item.returned && dueDate < today;

  return (
    <p>
      <span>{book?.title}</span>
      <span
        style={{
          fontSize: "13px",
          fontStyle: "italic",
          opacity: item.returned ? 0.55 : 1,
          color: isOverdue ? "inherit" : "rgb(255, 194, 73)",
        }}
      >
        {item.returned ? "Returned" : isOverdue ? "Overdue" : "Active"}
      </span>
    </p>
  );
}

export default MemberCard;
