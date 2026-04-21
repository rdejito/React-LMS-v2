function Books({ filteredBooks, authors }) {
  return (
    <ul>
      {filteredBooks.map((book) => {
        const author = authors.find((author) => author.id === book.authorId);
        return (
          <li key={book.id}>
            {book.title} - <em>{author?.name}</em>
          </li>
        );
      })}
    </ul>
  );
}

export default Books;
