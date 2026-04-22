import { authors, books } from "../../data/data";
import { useState } from "react";
import Books from "../books/Books";
import styles from "./BookList.module.css";

function BookList() {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(input.toLowerCase()),
  );

  return (
    <div className={styles.bookList}>
      <h2>Book List</h2>
      <div className={styles.bookInput}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Search a book..."
        />

        {input && filteredBooks.length === 0 ? (
          <p>No books found for "{input}"</p>
        ) : (
          <Books filteredBooks={filteredBooks} authors={authors} />
        )}
      </div>
    </div>
  );
}

export default BookList;
