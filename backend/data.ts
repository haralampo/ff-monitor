// backend/data.js
import { Employee } from "./types.js";

export const employees : Employee[] = [
  { id: "101", name: "Uncle Joe", dept: "PRODUCE", status: "IN", lastPunch: "2026-04-16T10:30:00Z"},
  { id: "102", name: "Sarah Smith", dept: "DELI", status: "OUT", lastPunch: "2026-04-16T12:15:00Z"},
  { id: "103", name: "Mike Ross", dept: "BAKERY", status: "BREAK", lastPunch: new Date().toISOString()},
  { id: "104", name: "Elena Gilbert", dept: "CUSTOMER SERVICE", status: "IN", lastPunch: new Date().toISOString()},
  { id: "105", name: "Bob Vance", dept: "MEAT", status: "OUT", lastPunch: new Date().toISOString()},
  { id: "106", name: "Kathy Jacobs", dept: "PRODUCE", status: "IN", lastPunch: new Date().toISOString()},
  { id: "107", name: "Stan Swanson", dept: "DELI", status: "OUT", lastPunch: new Date().toISOString()},
  { id: "108", name: "Ed Cullen", dept: "BAKERY", status: "BREAK", lastPunch: new Date().toISOString()},
  { id: "109", name: "Barbara Howard", dept: "CUSTOMER SERVICE", status: "IN", lastPunch: new Date().toISOString()},
  { id: "110", name: "Billy Jones", dept: "MEAT", status: "OUT", lastPunch: new Date().toISOString()}
];