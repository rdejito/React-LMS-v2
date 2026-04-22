import styles from './Books.module.css'

function Books({ filteredBooks, authors }) {
  return (
    <ul className={styles.filteredBooks}>
      {filteredBooks.map((book) => {
        const author = authors.find((author) => author.id === book.authorId);
        return (
          <li key={book.id} className={styles.books}>
            {book.title} - <em>{author?.name}</em>
          </li>
        );
      })}
    </ul>
  );
}

export default Books;
