"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import styles from "./Footer.module.scss";

const navSections = [
  {
    title: "Na Skróty",
    links: [
      { label: "O Nas", href: "/o-nas" },
      { label: "Strefa Wellness", href: "/strefa-wellness" },
      { label: "Nasi Trenerzy", href: "/trenerzy" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
  {
    title: "Informacje",
    links: [
      { label: "Polityka Prywatności", href: "/polityka-prywatnosci" },
      { label: "Regulamin", href: "/regulamin" },
    ],
  },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/p/Ground-Zero-Si%C5%82ownia-Niemodlin-61576885212351/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/silownia.niemodlin.groundzero/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* JSON-LD Structured Data for E-E-A-T */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsActivityLocation",
            name: "Ground Zero Siłownia",
            description: "Nowoczesna siłownia w Niemodlinie. Ponad 300m² przestrzeni treningowej, profesjonalni trenerzy, strefa wellness. Zero wymówek.",
            url: "https://www.groundzero-niemodlin.pl",
            telephone: "+48 666 310 850",
            address: {
              "@type": "PostalAddress",
              streetAddress: "ul. Opolska 54",
              addressLocality: "Niemodlin",
              postalCode: "49-100",
              addressCountry: "PL",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "50.7427",
              longitude: "17.6143",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "06:00",
                closes: "22:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Sunday"],
                opens: "13:00",
                closes: "21:00",
              },
            ],
            sameAs: [
              "https://www.facebook.com/p/Ground-Zero-Si%C5%82ownia-Niemodlin-61576885212351/",
              "https://www.instagram.com/silownia.niemodlin.groundzero/",
            ],
          }),
        }}
      />

      {/* Diagonal Top Cut */}
      <div className={styles.topCut}></div>

      <div className={styles.inner}>
        <div className={styles.container}>

          {/* ── TOP ROW: Brand + Nav columns ── */}
          <div className={styles.topRow}>

            {/* Brand Column */}
            <div className={styles.brandCol}>
              <Link href="/" className={styles.logoLink}>
                <Image
                  src="/images/ground-zero-logo.png"
                  alt="Ground Zero Siłownia Niemodlin – Logo"
                  width={70}
                  height={70}
                  style={{ width: "auto", height: "70px" }}
                  className={styles.logoImg}
                />
              </Link>
              <p className={styles.brandTagline}>
                Twoje miejsce.<br />Twój cel.<br />
                <strong>Nasze wsparcie.</strong>
              </p>
              <p className={styles.brandDesc}>
                Nowoczesna siłownia w Niemodlinie — ponad <strong>300 m²</strong> profesjonalnego 
                sprzętu, wykwalifikowani trenerzy i strefa wellness. Zero sieciówek. 
                Zero wymówek.
              </p>

              {/* Social Icons */}
              <div className={styles.socialRow}>
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    aria-label={s.name}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Nav Columns */}
            {navSections.map((section) => (
              <div key={section.title} className={styles.navCol}>
                <h3 className={styles.colTitle}>{section.title}</h3>
                <ul className={styles.navList}>
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={styles.navLink}>
                        <span className={styles.navArrow}>›</span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact / Hours Column */}
            <div className={styles.navCol}>
              <h3 className={styles.colTitle}>Kontakt & Godziny</h3>
              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <FiMapPin className={styles.contactIcon} />
                  <span>ul. Opolska 54<br />49-100 Niemodlin</span>
                </li>
                <li className={styles.contactItem}>
                  <FiPhone className={styles.contactIcon} />
                  <a href="tel:+48666310850" className={styles.contactLink}>
                    666 310 850
                  </a>
                </li>
                <li className={styles.contactItem}>
                  <FiMail className={styles.contactIcon} />
                  <a href="mailto:kontakt@groundzero-niemodlin.pl" className={styles.contactLink}>
                    kontakt@groundzero-niemodlin.pl
                  </a>
                </li>
              </ul>

              <div className={styles.hoursBox}>
                <div className={styles.hoursRow}>
                  <span>Pon – Sob</span>
                  <span className={styles.hoursValue}>06:00 – 22:00</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Niedziela</span>
                  <span className={styles.hoursValue}>13:00 – 21:00</span>
                </div>
              </div>
            </div>

          </div>

          {/* ── DIVIDER ── */}
          <div className={styles.divider}></div>

          {/* ── BOTTOM ROW: Copyright + Legal ── */}
          <div className={styles.bottomRow}>
            <p className={styles.copyright}>
              © {currentYear} <strong>Ground Zero Siłownia</strong> — Niemodlin. Wszelkie prawa zastrzeżone.
            </p>
            <div className={styles.legalLinks}>
              <Link href="/polityka-prywatnosci" className={styles.legalLink}>
                Polityka Prywatności
              </Link>
              <span className={styles.legalDot}>·</span>
              <Link href="/regulamin" className={styles.legalLink}>
                Regulamin
              </Link>
              <span className={styles.legalDot}>·</span>
              <Link href="/kontakt" className={styles.legalLink}>
                Kontakt
              </Link>
            </div>
            <p className={styles.madeBy}>
              Projekt & Realizacja:{" "}
              <a
                href="https://searchit.pl"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.madeByLink}
              >
                SearchIT.pl
              </a>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
