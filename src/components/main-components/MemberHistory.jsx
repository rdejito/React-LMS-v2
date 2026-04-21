import { useState } from "react";
import { borrowedBooks, members, books } from "../../data/data";
import Members from "../members/Member";

function MemberHistory() {
  const today = new Date();
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredMembers =
    search.trim() === ""
      ? members
      : members.filter((member) =>
          member.name.toLowerCase().includes(search.toLowerCase()),
        );

  return (
    <>
      <h2>Member History</h2>

      <input
        type="text"
        placeholder="Search member by name..."
        value={search}
        onChange={handleInputChange}
      />

      <div>
        {filteredMembers.map((member) => {
          const history = borrowedBooks.filter(
            (borrower) => borrower.memberId === member.id,
          );

          return (
            <Members
              key={member.id}
              member={member}
              history={history}
              today={today}
              books={books}
            />
          );
        })}
      </div>
    </>
  );
}

export default MemberHistory;
