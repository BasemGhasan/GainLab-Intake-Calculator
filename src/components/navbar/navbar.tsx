"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/navbar/navbar.module.css";

const Navbar = () => {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <div className={`container ${styles.navbarContainer}`}>
        <Link className="navbar-brand" href="/">
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
        </Link>

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
              <a className={`nav-link ${styles.navLink}`}
                href="#hero"
                onClick={(e) => handleSmoothScroll(e, "hero")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.navLink}`}
                href="calculate_nutrition"
                onClick={(e) => handleSmoothScroll(e, "calculate_nutrition")}
              >
                Calculator
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${styles.navLink}`}
                href="#how-it-works"
                onClick={(e) => handleSmoothScroll(e, "how-it-works")}
              >
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
