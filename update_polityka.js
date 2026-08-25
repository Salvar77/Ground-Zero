const fs = require('fs');

const politykaFile = 'c:/Users/lukas/Desktop/ground-zero/src/app/polityka-prywatnosci/page.tsx';
let content = fs.readFileSync(politykaFile, 'utf8');

const newSections = `const sections = [
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
];`;

content = content.replace(/const sections = \[[\s\S]*?\];\n\nexport default function PolitykaPrywatnosci/, newSections + '\n\nexport default function PolitykaPrywatnosci');
fs.writeFileSync(politykaFile, content);
console.log("Polityka updated successfully.");
