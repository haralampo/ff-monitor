export type AttendanceStatus = "IN" | "OUT" | "BREAK";
export type DepartmentName = "DELI" | "PRODUCE" | "BAKERY" | "MEAT" | "CUSTOMER SERVICE";

export interface Employee {
  id: string;
  name: string;
  dept: DepartmentName;
  status: AttendanceStatus;
  lastPunch: string; // ISO Date string
}