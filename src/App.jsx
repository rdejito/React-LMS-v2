import { useState, useEffect } from "react";
//import "./App.css";
import BookList from "./components/main-components/BookList";
import BorrowedBooks from "./components/main-components/BorrowedBooks";
import MemberHistory from "./components/main-components/MemberHistory";
import NavBar from "./components/navbar/NavBar";

import "./App.css";

const TABS = [
  { id: "books", label: "Book List", icon: "/icons/books.png" },
  { id: "borrowed", label: "Borrowed Books", icon: "/icons/bookmark.png" },
  { id: "members", label: "Member History", icon: "/icons/member.png" },
];

function App() {
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem("ACTIVE_TAB") || "books";
  });

  useEffect(() => {
    localStorage.setItem("ACTIVE_TAB", activeTab);
  }, [activeTab]);

  return (
    <>
      <div>
        <NavBar TABS={TABS} setActiveTab={setActiveTab} />
      </div>

      <main className="main">
        {activeTab === "books" && <BookList />}
        {activeTab === "borrowed" && <BorrowedBooks />}
        {activeTab === "members" && <MemberHistory />}
      </main>
    </>
  );
}

export default App;
