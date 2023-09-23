type Schedule = {
  date: Date;
  timeSlots: TimeSlot[];
};

type TimeSlot = {
  time: [number, number];
  isBooked: boolean;
  bookName: string;
  teacherName: string;
};

export type { Schedule, TimeSlot };

export const scheduleMock: Schedule = {
  date: new Date(),
  timeSlots: [
    {
      time: [8, 11],
      isBooked: false,
      bookName: "",
      teacherName: "",
    },
    {
      time: [14, 17],
      isBooked: false,
      bookName: "",
      teacherName: "",
    },
  ],
} as Schedule;

