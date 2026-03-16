// backend/index.ts
import express, { Request, Response } from 'express';
import cors from 'cors';
import { employees } from './data.js';
import { AttendanceStatus } from './types.js';

const app = express();
app.use(cors());

setInterval(() => {
  const randomIdx = Math.floor(Math.random() * employees.length);
  const statuses: AttendanceStatus[] = ["IN", "OUT", "BREAK"];
  
  // TS ensures you can only pick from the approved list
  employees[randomIdx].status = statuses[Math.floor(Math.random() * statuses.length)];
  employees[randomIdx].lastPunch = new Date().toISOString();
  
  console.log(`Update: ${employees[randomIdx].name} -> ${employees[randomIdx].status}`);
}, 10000);

app.get('/api/attendance', (req: Request, res: Response) => {
  res.json(employees);
});

app.listen(5001, () => console.log('Backend (TS) running on 5001'));