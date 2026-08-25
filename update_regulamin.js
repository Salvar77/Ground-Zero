const fs = require('fs');

const regulaminFile = 'c:/Users/lukas/Desktop/ground-zero/src/app/regulamin/page.tsx';
let content = fs.readFileSync(regulaminFile, 'utf8');

const newSections = `const sections = [
  {
    id: "postanowienia",
    icon: <FiFileText />,
    title: "§ 1. Postanowienia ogólne",
    content: (
      <ul className={styles.list}>
        <li>Niniejszy Regulamin określa zasady i warunki korzystania z usług świadczonych w klubie fitness Ground Zero Kacper Miller w Niemodlinie 49-100 przy ul. Opolskiej 54, NIP: 7532282959, zwanym dalej „Klubem” lub „Siłownią”, (zwanym dalej „Operatorem”).</li>
        <li>Klub funkcjonuje w modelu bezobsługowym (automatycznym), co oznacza, że na terenie obiektu w godzinach otwarcia może nie przebywać personel obsługi ani instruktorzy. Dostęp do obiektu jest monitorowany i kontrolowany elektronicznie.</li>
        <li>Wejście na teren Klubu jest równoznaczne z zapoznaniem się, akceptacją i zobowiązaniem do przestrzegania niniejszego Regulaminu.</li>
        <li>Celem niniejszego Regulaminu jest zapewnienie bezpieczeństwa, porządku oraz higieny wszystkim użytkownikom Klubu.</li>
      </ul>
    ),
  },
  {
    id: "dostep",
    icon: <FiUsers />,
    title: "§ 2. Warunki dostępu i członkostwa",
    content: (
      <>
        <ul className={styles.list}>
          <li>Z usług Klubu mogą korzystać osoby, które:<br />
            a) Są pełnoletnie (ukończyły 18 rok życia) i posiadają pełną zdolność do czynności prawnych.<br />
            b) Ukończyły 14 rok życia – wyłącznie za pisemną zgodą rodzica lub opiekuna prawnego, dostarczoną Operatorowi przed pierwszą wizytą. Rodzic/opiekun ponosi pełną odpowiedzialność za działania osoby niepełnoletniej na terenie Klubu.<br />
            c) Posiadają aktywny karnet lub opłacone wejście jednorazowe.<br />
            d) Posiadają zainstalowaną aplikację mobilną lub inny autoryzowany identyfikator dostępu (np. kod QR, karta magnetyczna).
          </li>
          <li>Warunkiem uzyskania dostępu jest rejestracja w systemie Klubu, podanie prawdziwych danych osobowych.</li>
          <li>Klub zastrzega sobie prawo do weryfikacji tożsamości Użytkownika poprzez okazanie dokumentu ze zdjęciem podczas wyrywkowych kontroli prowadzonych przez pracowników ochrony lub personel mobilny.</li>
          <li>Opłaty - należności jakie Klubowicz jest obowiązany uiszczać za usługi oferowane przez klub (zgodnie z cennikiem znajdującym się na stronie internetowej groundzero.oos.pl) mogą być opłacane gotówkowo lub przelewem blik w recepcji klubu a także za pośrednictwem aplikacji mobilnej OOS poprzez korzystanie z dostępnych metod za pośrednictwem Przelewy24.</li>
          <li>Klient otrzymuje karnet bezzwłocznie po jego opłaceniu względem obowiązującego cennika.</li>
        </ul>
      </>
    ),
  },
  {
    id: "subskrypcja",
    icon: <FiCheckSquare />,
    title: "§ 2a. Subskrypcja z 12-miesięcznym okresem zobowiązania",
    content: (
      <>
        <p>(Dotyczy abonamentu “Subskrypcja 12 miesięcy”)</p>
        <ul className={styles.list}>
          <li>Subskrypcja 12-miesięczna zawierana jest na czas określony 12 miesięcy, liczony od pierwszego dnia następnego miesiąca.</li>
          <li>Członek Klubu ma prawo wypowiedzieć umowę w każdym czasie z zachowaniem 2-miesięcznego okresu wypowiedzenia.</li>
          <li>Okres wypowiedzenia liczony jest od końca miesiąca kalendarzowego, w którym do Klubu wpłynęło oświadczenie o wypowiedzeniu.</li>
          <li>W okresie wypowiedzenia Członek zachowuje prawo do korzystania z usług Klubu oraz jest zobowiązany do terminowego uiszczania opłat abonamentowych zgodnie z zawartą umową.</li>
          <li>Po upływie okresu wypowiedzenia umowa ulega rozwiązaniu, a obowiązek wnoszenia dalszych opłat wygasa.</li>
          <li>Po upływie 12 miesięcy umowa wygasa automatycznie, bez konieczności składania dodatkowych oświadczeń przez którąkolwiek ze stron. Klub Ground Zero nie ma obowiązku przypominania ani informowania klienta o zbliżającym się terminie zakończenia obowiązywania umowy. Klient jest zobowiązany do samodzielnego monitorowania okresu obowiązywania swojej umowy.</li>
          <li>Wypowiedzenie wymaga formy pisemnej i powinno zostać złożone w recepcji Klubu po wcześniejszym telefonicznym uzgodnieniu terminu pod numerami: 794 404 134 lub 666 310 850.</li>
          <li>Ground Zero zastrzega sobie prawo do rozwiązania umowy ze skutkiem natychmiastowym w przypadku rażącego lub powtarzającego się naruszenia Regulaminu przez Członka. W takim przypadku opłaty uiszczone za rozpoczęty okres rozliczeniowy nie podlegają zwrotowi.</li>
        </ul>
      </>
    ),
  },
  {
    id: "aplikacja",
    icon: <FiMonitor />,
    title: "§ 3. Zasady korzystania z Aplikacji i Systemu Kontroli Dostępu",
    content: (
      <ul className={styles.list}>
        <li>Konto w Aplikacji oraz uprawnienia wejściowe są przypisane indywidualnie do konkretnego Użytkownika i nie mogą być odstępowane, pożyczane ani udostępniane osobom trzecim.</li>
        <li>Obowiązuje bezwzględny zakaz wpuszczania na teren Klubu innych osób, które nie użyły własnego identyfikatora wejścia (tzw. "tailgating"). Dotyczy to również otwierania drzwi innym Członkom Klubu, którzy zapomnieli telefonu/karnetu. Każda osoba wchodząca musi zarejestrować swoje wejście w systemie.</li>
        <li>Kary umowne za naruszenie zasad dostępu:<br />
          a) W przypadku stwierdzenia udostępnienia wejścia osobie trzeciej lub wpuszczenia osoby nieuprawnionej, Operator ma prawo do nałożenia na Użytkownika kary umownej w wysokości 300 PLN za każde stwierdzone naruszenie.<br />
          b) Niezależnie od kary umownej, Operator ma prawo rozwiązać umowę z Użytkownikiem w trybie natychmiastowym (bez okresu wypowiedzenia) oraz zablokować konto Użytkownika.<br />
          c) Jeżeli szkoda wyrządzona przez osobę nieuprawnioną przewyższa wysokość kary umownej, Operator zastrzega sobie prawo dochodzenia odszkodowania uzupełniającego na zasadach ogólnych Kodeksu cywilnego.
        </li>
      </ul>
    ),
  },
  {
    id: "bezpieczenstwo",
    icon: <FiShield />,
    title: "§ 4. Zasady bezpieczeństwa",
    content: (
      <ul className={styles.list}>
        <li>Użytkownik przyjmuje do wiadomości, że korzystanie z siłowni w modelu bezobsługowym wiąże się z brakiem stałego nadzoru instruktorskiego. Ćwiczenia wykonywane są samodzielnie i na wyłączne ryzyko Użytkownika w zakresie doboru obciążenia i intensywności treningu.</li>
        <li>Użytkownik korzystając z Klubu, na własną odpowiedzialność i w pełni świadomie uznaje, że:<br />
          a) jego stan zdrowia pozwala na wykonywanie ćwiczeń fizycznych;<br />
          b) nie posiada przeciwwskazań lekarskich do korzystania z urządzeń siłowych i aerobowych;<br />
          c) posiada wiedzę na temat obsługi urządzeń znajdujących się w Klubie i zobowiązuje się używać ich zgodnie z instrukcjami umieszczonymi na maszynach.
        </li>
        <li>Użytkownik zobowiązany jest do dokonania wizualnej oceny stanu technicznego urządzenia przed jego użyciem. W przypadku zauważenia usterki (np. przetarta linka, luźna śruba), Użytkownik ma bezwzględny zakaz korzystania z urządzenia i obowiązek niezwłocznego zgłoszenia usterki poprzez Aplikację lub numer alarmowy.</li>
        <li>Procedura wypadkowa: W przypadku urazu, zasłabnięcia lub innego zdarzenia zagrażającego zdrowiu, Użytkownik (lub świadek zdarzenia) zobowiązany jest do:<br />
          a) Niezwłocznego wezwania służb ratunkowych (numer 112).<br />
          b) Powiadomienia Operatora poprzez systemowy przycisk alarmowy (Panic Button) znajdujący się w klubie lub dzwoniąc na całodobowy numer awaryjny.<br />
          c) Skorzystania z dostępnej apteczki pierwszej pomocy lub defibrylatora AED (jeśli jest dostępny), zgodnie z instrukcją.
        </li>
      </ul>
    ),
  },
  {
    id: "odpowiedzialnosc",
    icon: <FiAlertTriangle />,
    title: "§ 5. Odpowiedzialność i wyłączenia",
    content: (
      <ul className={styles.list}>
        <li>Operator ponosi odpowiedzialność za szkody wynikłe z nienależytego stanu technicznego infrastruktury Klubu (zgodnie z art. 415 k.c.), o ile o usterkach wiedział lub przy zachowaniu należytej staranności powinien był wiedzieć.</li>
        <li>W granicach dozwolonych przez prawo, Operator nie ponosi odpowiedzialności za:<br />
          a) Kontuzje i urazy powstałe w wyniku nieprzestrzegania zasad bezpieczeństwa, instrukcji obsługi urządzeń lub błędnej techniki wykonywania ćwiczeń przez Użytkownika.<br />
          b) Pogorszenie stanu zdrowia wynikające z nadmiernego wysiłku fizycznego niedostosowanego do możliwości Użytkownika lub zatajonych schorzeń.<br />
          c) Mienie Użytkownika pozostawione bez nadzoru w szatniach (poza zamkniętymi szafkami) lub na sali ćwiczeń. Użytkownik zobowiązany jest do zabezpieczenia rzeczy wartościowych w szafkach zamykanych na kłódkę/kod. Odpowiedzialność Operatora za utratę lub uszkodzenie mienia pozostawionego w szatniach i szafkach zamykanych na kłódkę/kod reguluje się na zasadach ogólnych Kodeksu Cywilnego (Art. 845 k.c. i nast.), z wyłączeniem odpowiedzialności za rażące niedbalstwo Użytkownika.
        </li>
        <li>Operator nie ponosi odpowiedzialności za czasowe przerwy w dostępie do Klubu wynikłe z działania siły wyższej. W przypadku, gdy przerwy wynikające z przyczyn leżących po stronie Operatora (np. awaria techniczna) przekroczą łącznie 24 godziny w miesiącu kalendarzowym, Członek jest uprawniony do złożenia wniosku o proporcjonalne obniżenie Opłaty Członkowskiej za ten miesiąc.</li>
      </ul>
    ),
  },
  {
    id: "porzadek",
    icon: <FiCheckSquare />,
    title: "§ 6. Porządek i Higiena",
    content: (
      <ul className={styles.list}>
        <li>W Klubie obowiązuje bezwzględny nakaz zmiany obuwia na czyste, sportowe obuwie zamienne. Zakazane jest ćwiczenie w klapkach, boso (poza strefami do tego przeznaczonymi, np. mata do jogi) lub w obuwiu zewnętrznym.</li>
        <li>Ze względów higienicznych, każdy Użytkownik zobowiązany jest do:<br />
          a) Posiadania i używania ręcznika treningowego kładzionego na tapicerce urządzeń.<br />
          b) Dezynfekcji urządzenia po zakończeniu ćwiczenia, przy użyciu udostępnionych środków (płyn, ręcznik papierowy).
        </li>
        <li>Po zakończeniu ćwiczenia Użytkownik ma obowiązek odłożenia używanego sprzętu (hantle, talerze, gryfy) na wyznaczone miejsce (stojaki). Zabrania się rzucania ciężarami o podłogę.</li>
        <li>Na terenie Klubu obowiązuje całkowity zakaz:<br />
          a) Palenia tytoniu, e-papierosów oraz używania otwartego ognia.<br />
          b) Spożywania alkoholu oraz środków odurzających.<br />
          c) Przebywania w stanie nietrzeźwym lub pod wpływem środków odurzających.<br />
          d) Wnoszenia opakowań szklanych.<br />
          e) Prowadzenia działalności komercyjnej (treningi personalne) bez zgody Operatora.
        </li>
      </ul>
    ),
  },
  {
    id: "monitoring",
    icon: <FiAlertCircle />,
    title: "§ 7. Monitoring",
    content: (
      <ul className={styles.list}>
        <li>Teren Klubu jest objęty całodobowym monitoringiem audiowizualnym.</li>
        <li>Celem monitoringu jest zapewnienie bezpieczeństwa użytkowników i pracowników oraz ochrona mienia przed kradzieżą i zniszczeniem.</li>
        <li>Szczegółowe zasady przetwarzania danych z monitoringu znajdują się w Klauzuli Informacyjnej RODO dostępnej w Klubie i Aplikacji.</li>
      </ul>
    ),
  },
  {
    id: "reklamacje",
    icon: <FiEdit3 />,
    title: "§ 8. Reklamacje i odstąpienie",
    content: (
      <ul className={styles.list}>
        <li>Użytkownik może składać reklamacje dotyczące Klubu i jego funkcjonowania lub oświadczenie o odstąpieniu od Umowy za pośrednictwem wiadomości elektronicznej wysłanej na adres: groundzero.niemodlin@gmail.com oraz za pomocą poczty tradycyjnej na adres: Ground Zero, ul. Opolska 54, 49-100 Niemodlin.</li>
        <li>Składając reklamację Użytkownik zobowiązany jest:<br />
          a. podać imię i nazwisko oraz swój adres email,<br />
          b. dokładnie opisać zastrzeżenia dotyczące Klubu lub jego funkcjonowania, ze wskazaniem daty ewentualnego zdarzenia, będące przyczyną złożenia reklamacji.
        </li>
        <li>Klub zobowiązany jest do rozpatrzenia reklamacji zgodnie z Regulaminem w terminie 30 dni od jej otrzymania.</li>
        <li>O sposobie rozpatrzenia reklamacji Klub poinformuje Użytkownika wiadomością elektroniczną, wysłaną na adres email Użytkownika.</li>
        <li>Użytkownik, będący konsumentem, może odstąpić od umowy zawartej na odległość (w formie elektronicznej) w ciągu 14 dni od jej zawarcia, bez podania jakiejkolwiek przyczyny, wysyłając odpowiednie oświadczenie o odstąpieniu Klubowi.</li>
        <li>Bieg terminu określonego w pkt. 5 rozpoczyna się w chwili zawarcia Umowy z Klubem, również za pośrednictwem aplikacji elektronicznych.</li>
      </ul>
    ),
  },
];`;

content = content.replace(/const sections = \[[\s\S]*?\];\n\nexport default function Regulamin/, newSections + '\n\nexport default function Regulamin');
fs.writeFileSync(regulaminFile, content);
console.log("Regulamin updated successfully.");
