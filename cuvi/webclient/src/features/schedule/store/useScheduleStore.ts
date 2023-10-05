import { ref } from "vue";
import { defineStore } from "pinia";
import { Schedule } from "../types/Schedule";

export const useScheduleStore = defineStore("schedule-store", () => {
  const schedule = ref<Schedule[]>([]);

  async function fetchSchedule() {
    const mockSchedule = [
      {
        date: new Date(2023, 11, 2),
        timeSlots: [
          {
            bookName: "Abs Circuit 1",
            isBooked: true,
            teacherName: "Zhanseit Assylzhan",
            timeStart: "09:30",
            timeEnd: "10:30",
          },
          {
            bookName: "Abs Circuit 2",
            isBooked: true,
            teacherName: "Zhanseit Assylzhan",
            timeStart: "11:00",
            timeEnd: "12:30",
          },
          {
            bookName: "Abs Circuit 3",
            isBooked: true,
            teacherName: "Zhanseit Assylzhan",
            timeStart: "12:30",
            timeEnd: "13:30",
          },
        ],
      },
      {
        date: new Date(2023, 11, 3),
      },
      {
        date: new Date(2023, 11, 4),

        timeSlots: [
          {
            bookName: "Abs Circuit 2",
            isBooked: true,
            teacherName: "Zhanseit Assylzhan",
            timeStart: "14:10",
            timeEnd: "17:10",
          },
        ],
      },
      {
        date: new Date(2023, 11, 5),
      },
    ] as Schedule[];

    schedule.value = mockSchedule;
  }

  function getScheduleForWeek(weekNumber: number) {
    console.log(weekNumber);
    return schedule.value;
  }

  return { schedule, fetchSchedule, getScheduleForWeek };
});
