function Borrowed({ item, book, member, isOverdue }) {
  return (
    <tr>
      <td>{book?.title}</td>
      <td>{member?.name}</td>
      <td>{new Date(item.borrowedDate).toLocaleDateString()}</td>
      <td>{new Date(item.dueDate).toLocaleDateString()}</td>
      <td>{isOverdue ? "Overdue" : "Active"}</td>
    </tr>
  );
}

export default Borrowed;
