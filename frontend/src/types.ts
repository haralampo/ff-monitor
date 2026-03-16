export type AttendanceStatus = "IN" | "OUT" | "BREAK";

export interface Employee {
  id: string;
  name: string;
  dept: string;
  status: AttendanceStatus;
  lastPunch: string; // ISO Date string
}