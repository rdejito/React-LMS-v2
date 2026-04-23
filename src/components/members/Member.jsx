import MemberCard from "./MemberCard";
import styles from "./Member.module.css";

function Members({ member, today, books, history }) {
  return (
    <div key={member.id} className={styles.memberCard}>
      <div className={styles.memberHeader}>
        <span>
          <img src="/icons/member.png" alt="Member Icon" />
        </span>
        <strong>{member.name}</strong>
        <span>
          {history.length} record{history.length !== 1 ? "s" : ""}
        </span>
      </div>

      {history.length === 0 ? (
        <p style={{ fontStyle: "italic", opacity: "0.6" }}>
          No borrowed books on record.
        </p>
      ) : (
        <ul className={styles.listContainer}>
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
