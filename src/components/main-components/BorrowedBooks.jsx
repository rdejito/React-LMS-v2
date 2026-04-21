import { borrowedBooks, books, members } from "../../data/data";
import Borrowed from "../books/Borrowed";

function BorrowedBooks() {
  const today = new Date();

  const activeSorted = [...borrowedBooks]
    .filter((book) => !book.returned)
    .sort((bookA, bookB) => new Date(bookB.dueDate) - new Date(bookA.dueDate));

  return (
    <>
      <h2>Borrowed Books</h2>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Member</th>
            <th>Borrowed Date</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {activeSorted.map((item) => {
            const book = books.find((book) => book.id === item.bookId);
            const member = members.find(
              (member) => member.id === item.memberId,
            );

            const dueDate = new Date(item.dueDate);
            const isOverdue = dueDate < today;

            return (
              <Borrowed
                key={item.id}
                item={item}
                isOverdue={isOverdue}
                member={member}
                book={book}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default BorrowedBooks;
