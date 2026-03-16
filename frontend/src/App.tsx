import { useEffect, useState } from 'react'
import './App.css'

import type { AttendanceStatus, Employee } from './types'

function EmployeeCard({ employee }: { employee: Employee }) {
  return (
    <div className={`employee-card ${employee.dept}`}>
      <h2>{employee.name}</h2>
      <p>{employee.status}</p>
      <p>{employee.lastPunch}</p>
    </div>
  )
}

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/attendance');
        const data = await response.json();
        setEmployees(data);
      } 
      catch (error) {
        console.error("Failed to load employees from server:", error);
      }
    };

    fetchEmployees();

    const intervalId = setInterval(() => {
      fetchEmployees();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  return (
    <div className='app-container'>
      <div className='employees-container'>
        {employees.map(employee => (
          <EmployeeCard
            employee={employee}
          />
        ))}
      </div>
    </div>
  )
}

export default App
