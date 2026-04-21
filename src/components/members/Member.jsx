import MemberCard from "./MemberCard";

function Members({ member, today, books, history }) {
  return (
    <div key={member.id}>
      <div>
        <span>😶</span>
        <strong>{member.name}</strong>
        <span>
          {history.length} record{history.length !== 1 ? "s" : ""}
        </span>
      </div>

      {history.length === 0 ? (
        <p>No borrowed books on record.</p>
      ) : (
        <ul>
          {history.map((item) => {
            return (
              <MemberCard
                key={item.id}
                item={item}
                books={books}
                today={today}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Members;
