"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { scheduleData, DayOfWeek } from '@/data/scheduleData';
import styles from './Schedule.module.scss';
import { heavyHit, powerCharge } from '@/utils/motion';

const DAYS: DayOfWeek[] = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];
const TIMES = ["16:00", "17:00", "18:00", "19:00", "19:30"];

const CLASS_TYPES = ["Wszystkie aktywności", "Cross", "Fitness", "MMA grupa dziecięca", "MMA grupa młodzież", "MMA grupa dorośli"];
const FACILITIES = ["Wszystkie obiekty", "Sala Fitness", "Salka Cross"];

export default function Schedule() {
  const [filterType, setFilterType] = useState<string>("Wszystkie aktywności");
  const [filterFacility, setFilterFacility] = useState<string>("Wszystkie obiekty");
  const [activeDay, setActiveDay] = useState<string>("Poniedziałek");

  const filteredData = scheduleData.filter(item => {
    if (filterType !== "Wszystkie aktywności" && item.type !== filterType) return false;
    if (filterFacility !== "Wszystkie obiekty" && item.facility !== filterFacility) return false;
    return true;
  });

  const getClassColor = (type: string) => {
    switch (type) {
      case "Cross": return styles.cross;
      case "Fitness": return styles.fitness;
      case "MMA grupa dziecięca": return styles.mmaKid;
      case "MMA grupa młodzież": return styles.mmaTeen;
      case "MMA grupa dorośli": return styles.mmaAdult;
      default: return styles.defaultClass;
    }
  };

  return (
    <section className={styles.scheduleSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          variants={heavyHit(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <span className={styles.badge}>PLANOWANIE</span>
          <h2 className={styles.title}>GRAFIK <span>ZAJĘĆ</span></h2>
          <p className={styles.subtitle}>Wybierz swój typ treningu i znajdź dogodny termin. Zawsze daj z siebie 100%.</p>
        </motion.div>

        <motion.div 
          className={styles.filtersWrapper}
          variants={powerCharge(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className={styles.selectWrapper}>
            <select disabled className={styles.filterSelect}>
              <option>Niemodlin Opolska 54</option>
            </select>
          </div>
          <div className={styles.selectWrapper}>
            <select 
              value={filterType} 
              onChange={e => setFilterType(e.target.value)} 
              className={styles.filterSelect}
            >
              {CLASS_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div className={styles.selectWrapper}>
            <select 
              value={filterFacility} 
              onChange={e => setFilterFacility(e.target.value)} 
              className={styles.filterSelect}
            >
              {FACILITIES.map(f => <option key={f} value={f}>{f}</option>)}
            </select>
          </div>
          <div className={styles.selectWrapper}>
            <select disabled className={styles.filterSelect}>
              <option>Wszyscy instruktorzy</option>
            </select>
          </div>
        </motion.div>

        <motion.div 
          className={styles.tableWrapper}
          variants={powerCharge(0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className={styles.gridContainer}>
            <div className={styles.gridHeader}>
              <div className={styles.timeHeader}></div>
              {DAYS.map(day => (
                <div key={day} className={styles.dayHeader}>{day}</div>
              ))}
            </div>

            <div className={styles.gridBody}>
              {TIMES.map(time => (
                <div key={time} className={styles.gridRow}>
                  <div className={styles.timeCol}>{time}</div>
                  {DAYS.map(day => {
                    const items = filteredData.filter(i => i.day === day && i.time === time);
                    return (
                      <div key={`${day}-${time}`} className={styles.dayCol}>
                        {items.map(item => (
                          <motion.div 
                            key={item.id} 
                            className={`${styles.classBlock} ${getClassColor(item.type)}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                          >
                            <span className={styles.className}>{item.type}</span>
                            <span className={styles.classDuration}>{item.duration}</span>
                            <span className={styles.classCapacity}>Zarezerwowano: 0 / {item.capacityLimit}</span>
                          </motion.div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* MOBILE AGENDA VIEW */}
        <div className={styles.mobileAgendaWrapper}>
          <div className={styles.dayTabsScroll}>
            <div className={styles.dayTabs}>
              {DAYS.map(day => (
                <button 
                  key={day} 
                  className={`${styles.dayTabBtn} ${activeDay === day ? styles.activeTab : ''}`}
                  onClick={() => setActiveDay(day)}
                >
                  {day.substring(0, 3)}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.agendaList}>
            {TIMES.map(time => {
              const items = filteredData.filter(i => i.day === activeDay && i.time === time);
              if (items.length === 0) return null;
              
              return (
                <div key={`${activeDay}-${time}`} className={styles.agendaTimeGroup}>
                  <div className={styles.agendaTimeHeader}>{time}</div>
                  <div className={styles.agendaItems}>
                    {items.map(item => (
                      <motion.div 
                        key={item.id} 
                        className={`${styles.classBlock} ${getClassColor(item.type)}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className={styles.className}>{item.type}</span>
                        <span className={styles.classDuration}>{item.duration}</span>
                        <span className={styles.classCapacity}>Zarezerwowano: 0 / {item.capacityLimit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
            
            {filteredData.filter(i => i.day === activeDay).length === 0 && (
              <div className={styles.emptyAgenda}>Brak zajęć w tym dniu.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
