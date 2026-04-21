function MemberCard({ item, books, today }) {
  const book = books.find((book) => book.id === item.bookId);
  const dueDate = new Date(item.dueDate);
  const isOverdue = !item.returned && dueDate < today;

  return (
    <p>
      <span>{book?.title}</span>
      <span>
        {item.returned ? "Returned" : isOverdue ? "Overdue" : "Active"}
      </span>
    </p>
  );
}

export default MemberCard;
