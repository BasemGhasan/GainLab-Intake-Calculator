import Image from "next/image";
import styles from "../../styles/navbar/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className={styles.brandContainer}>
            <Image
              src="/assets/logo.png"
              alt="GainLab Logo"
              width={40}
              height={40}
              className={styles.logo}
            />
            <span className={styles.brandText}>GainLab</span>
          </div>
        </a>

        <button
          className={`navbar-toggler ${styles.toggler}`}
          type="button"
          data-bs-toggle="collapse" // Bootstrap: enables mobile menu toggle
          data-bs-target="#navbarNav" // Bootstrap: specifies which element to toggle
        >
          <span className={`navbar-toggler-icon ${styles.togglerIcon}`}></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className={`nav-link ${styles.navLink}`} href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.navLink}`} href="/calculator">
                Calculator
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.navLink}`} href="/about">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
