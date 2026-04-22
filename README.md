## Library Management System using React + Vite

### App Composition

- Frontend App (no backend)
- Uses mock data in a `data.js` file
- React Components
  1. BookList - Shows book with author names.
  2. BorrowedBooks - Shows currently borrowed books.
  3. MemberHistory - Search a member by name and show their history.

  ### Additional Features:
  - Author stats (number of books per author).
  - Search/filter books.
  - Highlight overdue books.

  ### To improve parts
  - Break down components to smaller, reusable parts ✅
  - Use PNG or SVG for icon's to improve flexibilty and prevent unexpected rendering issues.
  - Use enums for fixed values like tab IDs to avoid hardcoding and ensure consistency.
  - Memoize computed values like filteredBooks and sortedBooks (e.g. using useMemo) to optimize rendering and reduce unnecessary computations.
  - Move hook logics to another component for cleaner code block or so to say easier to maintain.
