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
  keywords: ["polityka prywatności siłownia", "RODO siłownia Niemodlin", "Ground Zero prywatność"],
  alternates: {
    canonical: "https://www.groundzero-niemodlin.pl/polityka-prywatnosci",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Polityka Prywatności - Ground Zero",
  "description": "Dokument określający zasady przetwarzania danych osobowych przez Ground Zero Siłownia Niemodlin w zgodzie z rozporządzeniem RODO.",
  "url": "https://www.groundzero-niemodlin.pl/polityka-prywatnosci"
};

const sections = [
  {
    id: "administrator",
    icon: <FiBriefcase />,
    title: "1. Administrator Danych",
    content: (
      <>
        <p>Administratorem Pani/Pana danych osobowych jest:</p>
        <div className={styles.infoCard}>
          <p><strong>Ground Zero Kacper Miller</strong></p>
          <p>z siedzibą w 49-100 Niemodlin ul. Opolska 54</p>
          <p>NIP: 7532282959</p>
          <p>E-mail: <a href="mailto:groundzero.niemodlin@gmail.com">groundzero.niemodlin@gmail.com</a></p>
          <p>Tel.: <a href="tel:+48666310850">666 310 850</a></p>
        </div>
      </>
    ),
  },
  {
    id: "cele",
    icon: <FiTarget />,
    title: "2. Cele i Podstawy Przetwarzania",
    content: (
      <>
        <p>Przetwarzamy Pani/Pana dane w następujących celach:</p>
        <ul className={styles.list}>
          <li><strong>Wykonanie umowy</strong> (obsługa karnetu, zapewnienie dostępu do siłowni, obsługa aplikacji mobilnej) – podstawa prawna: art. 6 ust. 1 lit. b RODO (niezbędność do wykonania umowy).</li>
          <li><strong>Zapewnienie bezpieczeństwa osób i mienia</strong> poprzez system monitoringu audiowizyjnego oraz system kontroli dostępu – podstawa prawna: art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes administratora). Monitoring jest niezbędny w obiekcie działającym w modelu bezobsługowym.</li>
          <li><strong>Dochodzenie roszczeń lub obrona przed roszczeniami</strong> (np. windykacja należności, materiał dowodowy w przypadku uszkodzenia mienia) – podstawa prawna: art. 6 ust. 1 lit. f RODO.</li>
          <li><strong>Rozliczenia podatkowe i księgowe</strong> – podstawa prawna: art. 6 ust. 1 lit. c RODO (obowiązek prawny).</li>
        </ul>
      </>
    ),
  },
  {
    id: "monitoring",
    icon: <FiList />,
    title: "3. Zakres Monitoringu",
    content: (
      <>
        <ul className={styles.list}>
          <li>Monitoring wizyjny obejmuje: strefę wejścia, recepcję, sale treningowe (strefa wolnych ciężarów, cardio, maszyn), ciągi komunikacyjne oraz szafki depozytowe na korytarzu.</li>
          <li>Monitoring NIE OBEJMUJE pomieszczeń sanitarnych, toalet, pryszniców oraz przebieralni (stref zmiany odzieży), w celu ochrony prywatności i godności użytkowników.</li>
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
        <ul className={styles.list}>
          <li>Dane związane z realizacją umowy: przez okres trwania umowy oraz okres przedawnienia roszczeń (zgodnie z K.C., zazwyczaj 3 lub 6 lat).</li>
          <li>Zapisy z monitoringu audiowizyjnego: przez okres nie dłuższy niż 30 dni od dnia nagrania. W przypadku, gdy nagranie stanowi dowód w postępowaniu prowadzonym na podstawie prawa, termin ten ulega przedłużeniu do czasu prawomocnego zakończenia postępowania.</li>
        </ul>
      </>
    ),
  },
  {
    id: "odbiorcy",
    icon: <FiUsers />,
    title: "5. Odbiorcy Danych",
    content: (
      <>
        <p>Pani/Pana dane mogą być przekazywane podmiotom przetwarzającym na zlecenie Administratora: dostawcom systemów IT (obsługa aplikacji, system wejściowy), biuru rachunkowemu, agencji ochrony, a także organom uprawnionym (Policja, Prokuratura) w uzasadnionych przypadkach naruszenia prawa.</p>
      </>
    ),
  },
  {
    id: "prawa",
    icon: <FiKey />,
    title: "6. Prawa Osoby, której Dane Dotyczą",
    content: (
      <>
        <p>Przysługuje Pani/Panu prawo do:</p>
        <ul className={styles.list}>
          <li>Dostępu do treści swoich danych (w tym uzyskania kopii).</li>
          <li>Sprostowania danych, ich usunięcia lub ograniczenia przetwarzania.</li>
          <li>Przenoszenia danych.</li>
          <li>Wniesienia sprzeciwu wobec przetwarzania danych opartego na prawnie uzasadnionym interesie (art. 6 ust. 1 lit. f RODO), w tym wobec monitoringu, z przyczyn związanych z Pani/Pana szczególną sytuacją.</li>
          <li>Wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa), gdy uzna Pani/Pan, że przetwarzanie narusza przepisy RODO.</li>
        </ul>
      </>
    ),
  },
  {
    id: "dobrowolnosc",
    icon: <FiInfo />,
    title: "7. Dobrowolność Podania Danych",
    content: (
      <>
        <p>Podanie danych osobowych jest dobrowolne, ale niezbędne do zawarcia i realizacji umowy członkowskiej. Odmowa podania danych niezbędnych do realizacji umowy lub brak akceptacji przebywania w strefie objętej monitoringiem, który służy bezpieczeństwu w bezobsługowym modelu działania Klubu, uniemożliwia świadczenie usług Siłowni.</p>
      </>
    ),
  }
];

export default function PolitykaPrywatnosci() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
    </>
  );
}
