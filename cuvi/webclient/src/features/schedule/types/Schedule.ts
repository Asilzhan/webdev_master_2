type Schedule = {
  date: Date;
  timeSlots: TimeSlot[];
};

type TimeSlot = {
  timeStart: string; // Hour as a number (0-23)
  timeEnd: string; // Hour as a number (0-23)
  isBooked: boolean;
  bookName: string;
  teacherName: string;
};

export type { Schedule, TimeSlot };

export const mockSchedule: Schedule = {
  date: new Date("2023-10-03"),
  timeSlots: [
    {
      timeStart: "9:00",
      timeEnd: "10:00",
      isBooked: true,
      bookName: "John Doe",
      teacherName: "Mr. Smith",
    },
    {
      timeStart: "11:00",
      timeEnd: "12:00",
      isBooked: true,
      bookName: "Jane Doe",
      teacherName: "Mrs. Johnson",
    },
  ],
};
