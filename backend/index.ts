// backend/index.ts
import express, { Request, Response } from 'express';
import cors from 'cors';
import { getEmployees } from './attendanceService.js';

// Create server and allow cross origin requests
const app = express();
app.use(cors());

// How to respond when someone sends a GET to this URL
app.get('/api/attendance', async (req: Request, res: Response) => {
  try {
    const employees = await getEmployees();
    res.json(employees);
  } 
  catch (error) {
    console.error("Failed to load employees from server:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(5001, () => console.log('Backend (TS) running on 5001'));