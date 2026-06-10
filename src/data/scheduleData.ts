export type ClassType = "Cross" | "Fitness" | "MMA grupa dziecięca" | "MMA grupa młodzież" | "MMA grupa dorośli";
export type FacilityType = "Wszystkie obiekty" | "Sala Fitness" | "Salka Cross";
export type DayOfWeek = "Poniedziałek" | "Wtorek" | "Środa" | "Czwartek" | "Piątek" | "Sobota" | "Niedziela";

export interface ScheduleItem {
  id: string;
  day: DayOfWeek;
  time: string; // e.g. "17:00"
  type: ClassType;
  duration: string; // e.g. "1 h 0 min"
  capacityLimit: number;
  facility: FacilityType;
}

export const scheduleData: ScheduleItem[] = [
  // Poniedziałek
  {
    id: "mon-17",
    day: "Poniedziałek",
    time: "17:00",
    type: "Fitness",
    duration: "1 h 10 min",
    capacityLimit: 15,
    facility: "Sala Fitness",
  },
  {
    id: "mon-19",
    day: "Poniedziałek",
    time: "19:00",
    type: "Cross",
    duration: "1 h 0 min",
    capacityLimit: 15,
    facility: "Salka Cross",
  },
  // Wtorek
  {
    id: "tue-18",
    day: "Wtorek",
    time: "18:00",
    type: "Cross",
    duration: "1 h 0 min",
    capacityLimit: 15,
    facility: "Salka Cross",
  },
  {
    id: "tue-19",
    day: "Wtorek",
    time: "19:00",
    type: "Cross",
    duration: "1 h 0 min",
    capacityLimit: 15,
    facility: "Salka Cross",
  },
  // Środa
  {
    id: "wed-16",
    day: "Środa",
    time: "16:00",
    type: "MMA grupa dziecięca",
    duration: "1 h 0 min",
    capacityLimit: 20,
    facility: "Wszystkie obiekty",
  },
  {
    id: "wed-17",
    day: "Środa",
    time: "17:00",
    type: "MMA grupa młodzież",
    duration: "1 h 0 min",
    capacityLimit: 20,
    facility: "Wszystkie obiekty",
  },
  {
    id: "wed-18",
    day: "Środa",
    time: "18:00",
    type: "MMA grupa dorośli",
    duration: "1 h 0 min",
    capacityLimit: 20,
    facility: "Wszystkie obiekty",
  },
  // Czwartek
  {
    id: "thu-1930",
    day: "Czwartek",
    time: "19:30",
    type: "Cross",
    duration: "1 h 0 min",
    capacityLimit: 15,
    facility: "Salka Cross",
  },
  // Piątek
  {
    id: "fri-16-mma",
    day: "Piątek",
    time: "16:00",
    type: "MMA grupa dziecięca",
    duration: "1 h 0 min",
    capacityLimit: 20,
    facility: "Wszystkie obiekty",
  },
  {
    id: "fri-17-mma",
    day: "Piątek",
    time: "17:00",
    type: "MMA grupa młodzież",
    duration: "1 h 0 min",
    capacityLimit: 20,
    facility: "Wszystkie obiekty",
  },
  {
    id: "fri-17-cross",
    day: "Piątek",
    time: "17:00",
    type: "Cross",
    duration: "1 h 0 min",
    capacityLimit: 15,
    facility: "Salka Cross",
  },
  {
    id: "fri-19-mma",
    day: "Piątek",
    time: "19:00",
    type: "MMA grupa dorośli",
    duration: "1 h 0 min",
    capacityLimit: 20,
    facility: "Wszystkie obiekty",
  },
  {
    id: "fri-19-cross",
    day: "Piątek",
    time: "19:00",
    type: "Cross",
    duration: "1 h 0 min",
    capacityLimit: 15,
    facility: "Salka Cross",
  },
];
