import { employees } from "./data.js";
import { AttendanceStatus } from "./types.js";
import { Employee } from "./types.js";
export { getEmployees };

// Move the setInterval logic (index.ts) that updates employee statuses into a function within attendanceService.ts.
// Create a Fetcher: Create an asynchronous function (e.g., getAttendanceRecords) in the service that returns the employee data.
// Future-Proofing: Even though you're using data.ts now, wrap the return in a Promise so that when you switch to the SOAP API in Phase 3, your index.ts doesn't need a rewrite.

// Runs every 3 secs
setInterval(() => {
  const randomIdx = Math.floor(Math.random() * employees.length);
  const statuses: AttendanceStatus[] = ["IN", "OUT", "BREAK"];
  
  // TS ensures you can only pick from the approved list
  employees[randomIdx].status = statuses[Math.floor(Math.random() * statuses.length)];
  employees[randomIdx].lastPunch = new Date().toISOString();
  
  console.log(`Update: ${employees[randomIdx].name} -> ${employees[randomIdx].status}`);
}, 5000);

const getEmployees = async () : Promise<Employee[]> => {
    return employees;
};