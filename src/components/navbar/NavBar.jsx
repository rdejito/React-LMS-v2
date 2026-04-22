import styles from "./NavBar.module.css";

function NavBar({ TABS, setActiveTab }) {
  return (
    <div className={styles.header}>
      <h1>Library Management System</h1>
      <nav className={styles.navbar}>
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={styles.btn}
          >
            <span className={styles.icon}>
              <img src={tab.icon} alt="Book" width={20} height={20 } />
            </span>
            <span className={styles.label}>{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

export default NavBar;
