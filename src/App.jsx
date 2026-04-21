import { useState, useEffect } from "react";

import BookList from "./components/main-components/BookList";
import BorrowedBooks from "./components/main-components/BorrowedBooks";
import MemberHistory from "./components/main-components/MemberHistory";
import NavBar from "./components/navbar/NavBar";
import "./App.css";

import books from "/icons/books.png";
import bookmark from "/icons/bookmark.png";
import member from "/icons/member.png";

const TABS = [
  { id: "books", label: "Book List", icon: books },
  { id: "borrowed", label: "Borrowed Books", icon: bookmark },
  { id: "members", label: "Member History", icon: member },
];

function App() {
  const [acitveTab, setActiveTab] = useState(() => {
    return localStorage.getItem("ACTIVE_TAB") || "books";
  });

  useEffect(() => {
    return localStorage.setItem("ACTIVE_TAB", acitveTab);
  }, [acitveTab]);

  return (
    <>
      <div>
        <NavBar TABS={TABS} setActiveTab={setActiveTab} />
      </div>

      <main>
        {acitveTab === "books" && <BookList />}
        {acitveTab === "borrowed" && <BorrowedBooks />}
        {acitveTab === "members" && <MemberHistory />}
      </main>
    </>
  );
}

export default App;
