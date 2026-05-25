import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  FiBriefcase, 
  FiList, 
  FiTarget, 
  FiClock, 
  FiKey, 
  FiDisc, 
  FiUsers, 
  FiLock, 
  FiRefreshCw, 
  FiMail, 
  FiInfo, 
  FiShield, 
  FiCalendar, 
  FiFileText,
  FiChevronLeft
} from "react-icons/fi";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Polityka Prywatności",
  description: "Polityka prywatności siłowni Ground Zero Niemodlin. Informacje o przetwarzaniu danych osobowych zgodnie z RODO.",
};

const sections = [
  {
    id: "administrator",
    icon: <FiBriefcase />,
    title: "1. Administrator Danych Osobowych",
    content: (
      <>
        <p>Administratorem Twoich danych osobowych jest:</p>
        <div className={styles.infoCard}>
          <p><strong>Ground Zero Siłownia</strong></p>
          <p>ul. Opolska 54, 49-100 Niemodlin</p>
          <p>E-mail: <a href="mailto:kontakt@groundzero-niemodlin.pl">kontakt@groundzero-niemodlin.pl</a></p>
          <p>Tel.: <a href="tel:+48666310850">666 310 850</a></p>
        </div>
        <p>
          Administrator przetwarza dane osobowe zgodnie z Rozporządzeniem Parlamentu Europejskiego
          i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO) oraz innymi obowiązującymi
          przepisami prawa polskiego.
        </p>
      </>
    ),
  },
  {
    id: "zakres",
    icon: <FiList />,
    title: "2. Zakres Zbieranych Danych",
    content: (
      <>
        <p>Zbieramy następujące kategorie danych osobowych:</p>
        <ul className={styles.list}>
          <li><strong>Dane kontaktowe:</strong> imię i nazwisko, numer telefonu, adres e-mail</li>
          <li><strong>Dane podane w formularzach:</strong> cel treningowy, wiadomość skierowana do siłowni</li>
          <li><strong>Dane techniczne:</strong> adres IP, typ przeglądarki, system operacyjny, czas wizyty (pliki cookies)</li>
          <li><strong>Dane analityczne:</strong> strony odwiedzane na naszej witrynie, źródło ruchu</li>
        </ul>
        <div className={styles.noteBox}>
          <FiInfo className={styles.noteIcon} />
          <p>Nie zbieramy danych szczególnie wrażliwych (np. danych o stanie zdrowia) bez Twojej wyraźnej zgody.</p>
        </div>
      </>
    ),
  },
  {
    id: "cele",
    icon: <FiTarget />,
    title: "3. Cele i Podstawy Prawne Przetwarzania",
    content: (
      <>
        <p>Twoje dane przetwarzamy w następujących celach:</p>
        <ul className={styles.list}>
          <li>
            <strong>Odpowiedź na zapytanie przez formularz kontaktowy</strong> — podstawa prawna: art. 6 ust. 1 lit. b RODO
            (wykonanie umowy lub podjęcie działań przed jej zawarciem)
          </li>
          <li>
            <strong>Obsługa zgłoszeń na darmowy trening lub konsultację</strong> — podstawa prawna: art. 6 ust. 1 lit. a RODO
            (zgoda osoby, której dane dotyczą)
          </li>
          <li>
            <strong>Marketing bezpośredni własnych usług</strong> — podstawa prawna: art. 6 ust. 1 lit. f RODO
            (prawnie uzasadniony interes administratora)
          </li>
          <li>
            <strong>Analityka i statystyki strony</strong> — podstawa prawna: art. 6 ust. 1 lit. a RODO (zgoda na cookies)
          </li>
          <li>
            <strong>Wypełnienie obowiązków prawnych</strong> — podstawa prawna: art. 6 ust. 1 lit. c RODO
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "okres",
    icon: <FiClock />,
    title: "4. Okres Przechowywania Danych",
    content: (
      <>
        <p>Twoje dane osobowe przechowujemy przez okres:</p>
        <ul className={styles.list}>
          <li><strong>Dane z formularzy kontaktowych:</strong> do 12 miesięcy od ostatniego kontaktu</li>
          <li><strong>Dane marketingowe:</strong> do czasu cofnięcia zgody lub zgłoszenia sprzeciwu</li>
          <li><strong>Dane analityczne (cookies):</strong> zgodnie z ustawieniami Twojej przeglądarki oraz polityką dostawcy narzędzi analitycznych</li>
          <li><strong>Dane wynikające z obowiązków prawnych:</strong> przez czas określony przepisami prawa (np. dokumentacja rachunkowa — 5 lat)</li>
        </ul>
      </>
    ),
  },
  {
    id: "prawa",
    icon: <FiKey />,
    title: "5. Twoje Prawa",
    content: (
      <>
        <p>Zgodnie z RODO przysługują Ci następujące prawa:</p>
        <ul className={styles.list}>
          <li><strong>Prawo dostępu</strong> do Twoich danych osobowych (art. 15 RODO)</li>
          <li><strong>Prawo do sprostowania</strong> nieprawidłowych lub niekompletnych danych (art. 16 RODO)</li>
          <li><strong>Prawo do usunięcia danych</strong> ("prawo do bycia zapomnianym") (art. 17 RODO)</li>
          <li><strong>Prawo do ograniczenia przetwarzania</strong> danych (art. 18 RODO)</li>
          <li><strong>Prawo do przenoszenia danych</strong> (art. 20 RODO)</li>
          <li><strong>Prawo do sprzeciwu</strong> wobec przetwarzania (art. 21 RODO)</li>
          <li><strong>Prawo do cofnięcia zgody</strong> w dowolnym momencie (bez wpływu na zgodność przetwarzania dokonanego przed cofnięciem)</li>
          <li><strong>Prawo do wniesienia skargi</strong> do organu nadzorczego — Prezesa Urzędu Ochrony Danych Osobowych (UODO)</li>
        </ul>
        <div className={styles.noteBox}>
          <FiMail className={styles.noteIcon} />
          <p>
            Aby skorzystać z powyższych praw, skontaktuj się z nami pod adresem:{" "}
            <a href="mailto:kontakt@groundzero-niemodlin.pl">kontakt@groundzero-niemodlin.pl</a>
          </p>
        </div>
      </>
    ),
  },
  {
    id: "cookies",
    icon: <FiDisc />,
    title: "6. Pliki Cookies",
    content: (
      <>
        <p>
          Nasza strona internetowa korzysta z plików cookies (ciasteczek) — małych plików tekstowych
          zapisywanych na Twoim urządzeniu. Stosujemy następujące rodzaje cookies:
        </p>
        <ul className={styles.list}>
          <li><strong>Cookies niezbędne:</strong> zapewniają prawidłowe działanie strony — nie wymagają zgody</li>
          <li><strong>Cookies analityczne:</strong> pozwalają nam analizować ruch na stronie (np. Google Analytics) — wymagają zgody</li>
          <li><strong>Cookies marketingowe:</strong> umożliwiają wyświetlanie spersonalizowanych reklam — wymagają zgody</li>
        </ul>
        <p>
          Możesz zarządzać ustawieniami cookies w swojej przeglądarce lub cofnąć zgodę
          za pomocą banera cookies wyświetlanego przy pierwszej wizycie na stronie.
        </p>
      </>
    ),
  },
  {
    id: "udostepnianie",
    icon: <FiUsers />,
    title: "7. Udostępnianie Danych Podmiotom Trzecim",
    content: (
      <>
        <p>
          Twoje dane osobowe możemy udostępniać wyłącznie zaufanym podmiotom trzecim,
          z którymi współpracujemy w celu świadczenia usług:
        </p>
        <ul className={styles.list}>
          <li><strong>Dostawcy usług IT</strong> (hosting, poczta e-mail, narzędzia analityczne)</li>
          <li><strong>Google LLC</strong> — w zakresie Google Analytics i Google Maps (polityka prywatności Google)</li>
          <li><strong>Meta Platforms</strong> — w zakresie Facebook Pixel (jeśli dotyczy)</li>
          <li><strong>Organy państwowe</strong> — w przypadkach wymaganych przepisami prawa</li>
        </ul>
        <div className={styles.alertBox}>
          <FiShield className={styles.alertIcon} />
          <p><strong>Nie sprzedajemy Twoich danych osobowych</strong> żadnym podmiotom trzecim.</p>
        </div>
      </>
    ),
  },
  {
    id: "bezpieczenstwo",
    icon: <FiLock />,
    title: "8. Bezpieczeństwo Danych",
    content: (
      <>
        <p>
          Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony Twoich danych
          osobowych przed nieautoryzowanym dostępem, utratą, zniszczeniem lub ujawnieniem:
        </p>
        <ul className={styles.list}>
          <li>Szyfrowanie połączenia SSL/TLS (protokół HTTPS)</li>
          <li>Kontrola dostępu do systemów przetwarzających dane</li>
          <li>Regularne aktualizacje systemów i oprogramowania</li>
          <li>Szkolenia personelu w zakresie ochrony danych osobowych</li>
        </ul>
      </>
    ),
  },
  {
    id: "zmiany",
    icon: <FiRefreshCw />,
    title: "9. Zmiany w Polityce Prywatności",
    content: (
      <>
        <p>
          Zastrzegamy sobie prawo do aktualizacji niniejszej Polityki Prywatności.
          O wszelkich istotnych zmianach poinformujemy Cię poprzez umieszczenie
          nowej wersji na stronie internetowej oraz aktualizację daty ostatniej modyfikacji.
        </p>
        <p>
          Zalecamy regularne zapoznawanie się z treścią niniejszego dokumentu.
        </p>
      </>
    ),
  },
  {
    id: "kontakt",
    icon: <FiMail />,
    title: "10. Kontakt w Sprawie Danych Osobowych",
    content: (
      <>
        <p>
          W przypadku pytań dotyczących przetwarzania Twoich danych osobowych
          lub chęci skorzystania ze swoich praw, skontaktuj się z nami:
        </p>
        <div className={styles.infoCard}>
          <p><strong>Ground Zero Siłownia — Inspektor Ochrony Danych</strong></p>
          <p>E-mail: <a href="mailto:kontakt@groundzero-niemodlin.pl">kontakt@groundzero-niemodlin.pl</a></p>
          <p>Tel.: <a href="tel:+48666310850">666 310 850</a></p>
          <p>Adres: ul. Opolska 54, 49-100 Niemodlin</p>
        </div>
        <p>
          Masz również prawo wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych
          (ul. Stawki 2, 00-193 Warszawa, <a href="https://uodo.gov.pl" target="_blank" rel="noopener noreferrer">uodo.gov.pl</a>).
        </p>
      </>
    ),
  },
];

export default function PolitykaPrywatnosci() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}></div>
        <div className={styles.heroContent}>
          <span className={styles.badge}>DOKUMENT PRAWNY</span>
          <h1 className={styles.heroTitle}>
            Polityka<br /><span>Prywatności</span>
          </h1>
          <p className={styles.heroSub}>
            Dbamy o bezpieczeństwo Twoich danych. Przeczytaj, jak i dlaczego przetwarzamy
            Twoje informacje osobowe zgodnie z RODO.
          </p>
          <div className={styles.heroMeta}>
            <span><FiCalendar /> Ostatnia aktualizacja: 25 maja 2025</span>
            <span><FiFileText /> Zgodność z RODO (UE) 2016/679</span>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <div className={styles.container}>
        <div className={styles.layout}>

          {/* Sidebar TOC */}
          <aside className={styles.toc}>
            <div className={styles.tocInner}>
              <p className={styles.tocTitle}>Spis Treści</p>
              <nav>
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className={styles.tocLink}>
                    <span className={styles.tocIcon}>{s.icon}</span> {s.title.replace(/^\d+\.\s/, "")}
                  </a>
                ))}
              </nav>
              <div className={styles.tocBack}>
                <Link href="/"><FiChevronLeft /> Wróć na stronę główną</Link>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className={styles.content}>
            {sections.map((s) => (
              <section key={s.id} id={s.id} className={styles.section}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionIcon}>{s.icon}</span>
                  <h2 className={styles.sectionTitle}>{s.title}</h2>
                </div>
                <div className={styles.sectionBody}>
                  {s.content}
                </div>
              </section>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}
