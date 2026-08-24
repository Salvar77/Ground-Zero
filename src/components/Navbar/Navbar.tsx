"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.scss";

const navLinks = [
  { name: "O NAS", href: "/o-nas" },
  { name: "GRAFIK ZAJĘĆ", href: "/grafik" },
  { name: "RECOVERY ROOM", href: "/recovery-room" },
  { name: "TRENERZY", href: "/trenerzy" },
  { name: "CENNIK", href: "/cennik" },
  { name: "GALERIA", href: "/galeria" },
  { name: "KONTAKT", href: "/kontakt" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      const element = document.getElementById("free-trial");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", "/#free-trial");
      }
    }
    closeMenu();
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <Image
            src="/images/ground-zero-logo.png"
            alt="Ground Zero Niemodlin Logo"
            width={100}
            height={100}
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
          <Link href="/#free-trial" className={styles.ctaBtn} onClick={handleCtaClick}>
            ODBIERZ WEJŚCIE
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
            href="/#free-trial"
            className={styles.mobileCtaBtn}
            onClick={handleCtaClick}
          >
            ODBIERZ WEJŚCIE
          </Link>
        </nav>
      </div>
    </header>
  );
}
