import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  FiFileText, 
  FiUsers, 
  FiShield, 
  FiAlertTriangle, 
  FiMonitor, 
  FiEdit3, 
  FiCheckSquare, 
  FiAlertCircle, 
  FiChevronLeft
} from "react-icons/fi";
import styles from "../polityka-prywatnosci/page.module.scss";

export const metadata: Metadata = {
  title: "Regulamin Siłowni",
  description: "Regulamin korzystania z siłowni Ground Zero Niemodlin oraz świadczenia usług drogą elektroniczną.",
};

const sections = [
  {
    id: "postanowienia",
    icon: <FiFileText />,
    title: "1. Postanowienia Ogólne",
    content: (
      <>
        <p>
          Niniejszy regulamin określa zasady korzystania z usług siłowni Ground Zero
          oraz zasady świadczenia usług drogą elektroniczną przez stronę internetową
          groundzero-niemodlin.pl.
        </p>
        <div className={styles.infoCard}>
          <p><strong>Dane operatora i administratora:</strong></p>
          <p>Ground Zero Siłownia</p>
          <p>ul. Opolska 54, 49-100 Niemodlin</p>
          <p>Tel.: <a href="tel:+48666310850">666 310 850</a></p>
          <p>E-mail: <a href="mailto:kontakt@groundzero-niemodlin.pl">kontakt@groundzero-niemodlin.pl</a></p>
        </div>
        <p>
          Każda osoba korzystająca z usług siłowni, zwana dalej „Klubowiczem”,
          jest zobowiązana do zapoznania się z niniejszym regulaminem i
          bezwzględnego przestrzegania jego postanowień.
        </p>
      </>
    ),
  },
  {
    id: "uczestnictwo",
    icon: <FiUsers />,
    title: "2. Uczestnictwo i Członkostwo",
    content: (
      <>
        <ul className={styles.list}>
          <li>Klubowiczem może zostać każda osoba pełnoletnia. Osoby, które ukończyły 15 lat, mogą korzystać z siłowni wyłącznie za pisemną zgodą rodziców lub opiekunów prawnych.</li>
          <li>Podstawą do korzystania z siłowni jest posiadanie aktywnego karnetu, wejściówki jednorazowej lub zapisanie się na darmowy trening próbny (dotyczy nowych klientów).</li>
          <li>Karnet jest imienny i nie może być udostępniany osobom trzecim.</li>
          <li>Obsługa siłowni ma prawo wylegitymować osobę w celu weryfikacji tożsamości.</li>
        </ul>
      </>
    ),
  },
  {
    id: "bezpieczenstwo",
    icon: <FiShield />,
    title: "3. Zasady Bezpieczeństwa i Porządku",
    content: (
      <>
        <p>W trosce o bezpieczeństwo wszystkich Klubowiczów:</p>
        <ul className={styles.list}>
          <li>Zabrania się ćwiczenia pod wpływem alkoholu, środków odurzających oraz innych substancji psychoaktywnych.</li>
          <li>Klubowicz zobowiązany jest do używania zmiennego obuwia sportowego (zakaz ćwiczenia w obuwiu outdoorowym) oraz czystego stroju sportowego.</li>
          <li>Ze względów higienicznych na siłowni <strong>obowiązuje posiadanie własnego ręcznika</strong> i kładzenie go na używanych sprzętach.</li>
          <li>Po zakończeniu ćwiczenia Klubowicz jest zobowiązany do zdezynfekowania sprzętu dostępnymi na sali środkami.</li>
          <li>Sprzęt treningowy należy odkładać na wyznaczone miejsce. Nie wolno rzucać sztangami (za wyjątkiem wyznaczonych stref rzutu).</li>
        </ul>
      </>
    ),
  },
  {
    id: "odpowiedzialnosc",
    icon: <FiAlertTriangle />,
    title: "4. Odpowiedzialność",
    content: (
      <>
        <p>Zasady odpowiedzialności na terenie klubu:</p>
        <ul className={styles.list}>
          <li>Siłownia nie ponosi odpowiedzialności za rzeczy prywatne pozostawione w szatni poza zamykanymi na klucz szafkami.</li>
          <li>Klubowicz ponosi pełną odpowiedzialność finansową za zniszczenie sprzętu powstałe w wyniku niezgodnego z jego przeznaczeniem używania.</li>
          <li>Klubowicz oświadcza, że nie ma przeciwwskazań zdrowotnych do wykonywania wysiłku fizycznego i ćwiczy na własną odpowiedzialność.</li>
        </ul>
        <div className={styles.alertBox}>
          <FiAlertCircle className={styles.alertIcon} />
          <p>
            Za nieprzestrzeganie regulaminu, wulgarne zachowanie lub rażące naruszanie zasad
            bezpieczeństwa, obsługa ma prawo wyprosić Klubowicza z obiektu bez prawa do
            zwrotu opłaty za trening/karnet.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "strona",
    icon: <FiMonitor />,
    title: "5. Usługi Drogą Elektroniczną",
    content: (
      <>
        <p>W ramach strony internetowej świadczymy następujące usługi:</p>
        <ul className={styles.list}>
          <li>Formularz zapisu na darmowy trening próbny.</li>
          <li>Formularz kontaktowy w celu uzyskania informacji.</li>
        </ul>
        <p>
          Do prawidłowego korzystania ze strony wymagane jest urządzenie z
          dostępem do Internetu oraz aktualna wersja przeglądarki (np. Chrome,
          Safari, Firefox).
        </p>
        <p>
          Dane wprowadzane w formularzach są przetwarzane zgodnie z naszą{" "}
          <Link href="/polityka-prywatnosci">Polityką Prywatności</Link>.
        </p>
      </>
    ),
  },
  {
    id: "reklamacje",
    icon: <FiEdit3 />,
    title: "6. Reklamacje",
    content: (
      <>
        <p>
          Wszelkie uwagi i reklamacje dotyczące funkcjonowania klubu lub strony
          internetowej należy kierować:
        </p>
        <ul className={styles.list}>
          <li>Drogą elektroniczną na adres: <strong>kontakt@groundzero-niemodlin.pl</strong></li>
          <li>Pisemnie na adres: <strong>ul. Opolska 54, 49-100 Niemodlin</strong></li>
        </ul>
        <p>
          Rozpatrzenie reklamacji następuje w ciągu 14 dni roboczych od daty
          jej wpłynięcia. Odpowiedź wysyłana jest na adres e-mail wskazany przez
          zgłaszającego.
        </p>
      </>
    ),
  },
  {
    id: "postanowienia_koncowe",
    icon: <FiCheckSquare />,
    title: "7. Postanowienia Końcowe",
    content: (
      <>
        <p>
          Siłownia Ground Zero zastrzega sobie prawo do zmiany niniejszego regulaminu.
          Zmiany wchodzą w życie z dniem ich publikacji na stronie internetowej lub
          udostępnienia w recepcji klubu.
        </p>
        <p>
          W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają
          przepisy Kodeksu Cywilnego.
        </p>
      </>
    ),
  },
];

export default function Regulamin() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}></div>
        <div className={styles.heroContent}>
          <span className={styles.badge}>ZASADY KORZYSTANIA Z KLUBU</span>
          <h1 className={styles.heroTitle}>
            Regulamin<br /><span>Klubu</span>
          </h1>
          <p className={styles.heroSub}>
            Zasady są po to, aby wszyscy mogli trenować w czystym,
            bezpiecznym i profesjonalnym środowisku. Zero wymówek, pełen szacunek.
          </p>
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
