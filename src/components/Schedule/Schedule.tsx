"use client";

import React, { useState } from "react";
import styles from "./Schedule.module.scss";

type ClassItem = {
  id: string;
  name: string;
  category: "fitness" | "cross" | "mma";
  time: string;
  duration: string;
  booked: number;
  maxSlots: number;
  day: number; // 1 = Mon, 2 = Tue, etc.
};

const daysOfWeek = [
  { value: 1, label: "Poniedziałek" },
  { value: 2, label: "Wtorek" },
  { value: 3, label: "Środa" },
  { value: 4, label: "Czwartek" },
  { value: 5, label: "Piątek" },
  { value: 6, label: "Sobota" },
  { value: 7, label: "Niedziela" },
];

const timeSlots = ["16:00", "17:00", "18:00", "19:00"];

const classesData: ClassItem[] = [
  // Monday
  { id: "m1", name: "Fitness", category: "fitness", time: "17:00", duration: "1h 10m", booked: 2, maxSlots: 15, day: 1 },
  { id: "m2", name: "Cross", category: "cross", time: "19:00", duration: "1h 0m", booked: 5, maxSlots: 15, day: 1 },
  
  // Tuesday
  { id: "t1", name: "Cross", category: "cross", time: "18:00", duration: "1h 0m", booked: 8, maxSlots: 15, day: 2 },
  { id: "t2", name: "Cross", category: "cross", time: "19:00", duration: "1h 0m", booked: 2, maxSlots: 15, day: 2 },
  
  // Wednesday
  { id: "w1", name: "MMA grupa dziecięca", category: "mma", time: "16:00", duration: "1h 0m", booked: 1, maxSlots: 20, day: 3 },
  { id: "w2", name: "MMA grupa młodzież", category: "mma", time: "17:00", duration: "1h 0m", booked: 2, maxSlots: 20, day: 3 },
  { id: "w3", name: "MMA grupa dorośli", category: "mma", time: "18:00", duration: "1h 0m", booked: 3, maxSlots: 20, day: 3 },
  
  // Thursday
  { id: "th1", name: "Fitness", category: "fitness", time: "17:00", duration: "1h 10m", booked: 2, maxSlots: 15, day: 4 },
  
  // Friday
  { id: "f1", name: "MMA grupa dziecięca", category: "mma", time: "16:00", duration: "1h 0m", booked: 0, maxSlots: 20, day: 5 },
  { id: "f2", name: "MMA grupa młodzież", category: "mma", time: "17:00", duration: "1h 0m", booked: 0, maxSlots: 20, day: 5 },
  { id: "f3", name: "Cross", category: "cross", time: "17:00", duration: "1h 0m", booked: 0, maxSlots: 15, day: 5 },
  { id: "f4", name: "MMA grupa dorośli", category: "mma", time: "19:00", duration: "1h 0m", booked: 0, maxSlots: 20, day: 5 },
  { id: "f5", name: "Cross", category: "cross", time: "19:00", duration: "1h 0m", booked: 0, maxSlots: 15, day: 5 },
];

export default function Schedule() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedDayMobile, setSelectedDayMobile] = useState<number>(1);
  const [bookingSuccessId, setBookingSuccessId] = useState<string | null>(null);

  const filterClasses = (items: ClassItem[]) => {
    return items.filter(
      (item) => selectedCategory === "all" || item.category === selectedCategory
    );
  };

  const handleBookClick = (id: string) => {
    setBookingSuccessId(id);
    setTimeout(() => {
      setBookingSuccessId(null);
    }, 3000);
  };

  const activeClasses = filterClasses(classesData);

  return (
    <section id="grafik" className={styles.schedule}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <div className={styles.bgText}>CALENDAR</div>
          <span className={styles.badge}>GRAFIK ZAJĘĆ</span>
          <h2 className={styles.title}>
            SPRAWDŹ NASZ <span>HARMONOGRAM</span>
          </h2>
          <p className={styles.subtitle}>
            Wybierz zajęcia dla siebie i zarezerwuj miejsce. Oferujemy treningi dostosowane 
            do każdego poziomu zaawansowania. Sobota i niedziela to czas wolnego treningu na siłowni.
          </p>
        </div>

        {/* Filters */}
        <div className={styles.filters}>
          <button 
            className={`${styles.filterBtn} ${selectedCategory === "all" ? styles.activeFilter : ""}`}
            onClick={() => setSelectedCategory("all")}
          >
            Wszystkie aktywności
          </button>
          <button 
            className={`${styles.filterBtn} ${selectedCategory === "fitness" ? styles.activeFilter : ""} ${styles.btnFitness}`}
            onClick={() => setSelectedCategory("fitness")}
          >
            Fitness
          </button>
          <button 
            className={`${styles.filterBtn} ${selectedCategory === "cross" ? styles.activeFilter : ""} ${styles.btnCross}`}
            onClick={() => setSelectedCategory("cross")}
          >
            Cross
          </button>
          <button 
            className={`${styles.filterBtn} ${selectedCategory === "mma" ? styles.activeFilter : ""} ${styles.btnMma}`}
            onClick={() => setSelectedCategory("mma")}
          >
            MMA / Sporty Walki
          </button>
        </div>

        {/* Desktop Schedule Grid */}
        <div className={styles.desktopGrid}>
          <div className={styles.gridHeader}>
            <div className={styles.timeLabelCell}>Godzina</div>
            {daysOfWeek.map((day) => (
              <div key={day.value} className={styles.dayHeaderCell}>
                {day.label}
              </div>
            ))}
          </div>

          <div className={styles.gridBody}>
            {timeSlots.map((timeSlot) => (
              <div key={timeSlot} className={styles.gridRow}>
                <div className={styles.timeCell}>{timeSlot}</div>
                {daysOfWeek.map((day) => {
                  const classesInSlot = activeClasses.filter(
                    (c) => c.time === timeSlot && c.day === day.value
                  );
                  
                  return (
                    <div key={`${day.value}-${timeSlot}`} className={styles.dayCell}>
                      {classesInSlot.map((item) => (
                        <div 
                          key={item.id} 
                          className={`${styles.classCard} ${styles[item.category]}`}
                        >
                          <span className={styles.classTime}>{item.time} ({item.duration})</span>
                          <h4 className={styles.className}>{item.name}</h4>
                          
                          <div className={styles.classFooter}>
                            <span className={styles.classSlots}>
                              Rezerwacje: {item.booked}/{item.maxSlots}
                            </span>
                            <button 
                              onClick={() => handleBookClick(item.id)}
                              className={styles.bookBtn}
                              disabled={bookingSuccessId !== null}
                            >
                              {bookingSuccessId === item.id ? "ZAPISANO!" : "ZAPISZ SIĘ"}
                            </button>
                          </div>
                        </div>
                      ))}
                      
                      {day.value >= 6 && timeSlot === "16:00" && (
                        <div className={styles.freeGymCard}>
                          <span>Trening</span>
                          <h5>SIŁOWNIA</h5>
                          <span className={styles.freeGymTime}>Sob: 6:00-22:00<br/>Niedz: 13:00-21:00</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Schedule View */}
        <div className={styles.mobileView}>
          <div className={styles.mobileDayTabs}>
            {daysOfWeek.map((day) => (
              <button
                key={day.value}
                className={`${styles.mobileTabBtn} ${
                  selectedDayMobile === day.value ? styles.activeMobileTab : ""
                }`}
                onClick={() => setSelectedDayMobile(day.value)}
              >
                {day.label.substring(0, 3)}
              </button>
            ))}
          </div>

          <div className={styles.mobileClassesList}>
            {selectedDayMobile >= 6 ? (
              <div className={styles.mobileFreeGym}>
                <div className={styles.freeGymHeader}>
                  <h4>SIŁOWNIA OTWARTA</h4>
                  <div className={styles.cyberLine}></div>
                </div>
                <p>Zapraszamy na trening indywidualny w godzinach:</p>
                <div className={styles.freeGymHours}>
                  {selectedDayMobile === 6 ? "Sobota: 06:00 - 22:00" : "Niedziela: 13:00 - 21:00"}
                </div>
              </div>
            ) : (
              <>
                {activeClasses.filter((c) => c.day === selectedDayMobile).length === 0 ? (
                  <div className={styles.noClassesMobile}>
                    Brak zaplanowanych zajęć z wybranej kategorii na ten dzień.
                  </div>
                ) : (
                  activeClasses
                    .filter((c) => c.day === selectedDayMobile)
                    .map((item) => (
                      <div 
                        key={item.id} 
                        className={`${styles.mobileClassCard} ${styles[item.category]}`}
                      >
                        <div className={styles.mobileCardLeft}>
                          <span className={styles.mobileCardTime}>{item.time}</span>
                          <span className={styles.mobileCardDuration}>{item.duration}</span>
                        </div>
                        
                        <div className={styles.mobileCardRight}>
                          <h4 className={styles.mobileCardName}>{item.name}</h4>
                          <div className={styles.mobileCardFooter}>
                            <span className={styles.mobileCardSlots}>
                              Rezerwacja: {item.booked}/{item.maxSlots}
                            </span>
                            <button
                              onClick={() => handleBookClick(item.id)}
                              className={styles.mobileBookBtn}
                              disabled={bookingSuccessId !== null}
                            >
                              {bookingSuccessId === item.id ? "ZAPISANO!" : "ZAPISZ SIĘ"}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                )}
              </>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
