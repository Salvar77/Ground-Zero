"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.scss";

const navLinks = [
  { name: "O NAS", href: "#o-nas" },
  // { name: "GRAFIK", href: "#grafik" },
  { name: "TRENERZY", href: "#trenerzy" },
  // { name: "CENNIK", href: "#cennik" },
  { name: "KONTAKT", href: "#kontakt" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <Image
            src="/images/ground-zero-logo.png"
            alt="Ground Zero Niemodlin Logo"
            width={60}
            height={60}
            className={styles.logoImage}
            priority
          />
        </Link>

        <nav className={styles.desktopNav}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <Link href="#kontakt" className={styles.ctaBtn}>
            DOŁĄCZ DO NAS
          </Link>
        </nav>

        <button
          className={`hamburger hamburger--squeeze ${
            isMobileMenuOpen ? "is-active" : ""
          } ${styles.hamburgerBtn}`}
          type="button"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.mobileOpen : ""
        }`}
      >
        <nav className={styles.mobileNav}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} onClick={closeMenu}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#kontakt"
            className={styles.mobileCtaBtn}
            onClick={closeMenu}
          >
            DOŁĄCZ DO NAS
          </Link>
        </nav>
      </div>
    </header>
  );
}
