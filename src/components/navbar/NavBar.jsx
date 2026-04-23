import { useState } from "react";
import styles from "./NavBar.module.css";

function NavBar({ TABS, setActiveTab }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.navContainer}>
        <h1>Library Management System</h1>

        {/* Hamburger */}
        <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navbar */}
        <nav className={`${styles.navbar} ${isOpen ? styles.active : ""}`}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setIsOpen(false); // close after click
              }}
              className={styles.btn}
            >
              <span className={styles.icon}>
                <img src={tab.icon} alt={tab.label} width={20} height={20} />
              </span>
              <span className={styles.label}>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
