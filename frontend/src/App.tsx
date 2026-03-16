import { useEffect, useState, useMemo } from 'react'
import './App.css'

import type { AttendanceStatus, Employee } from './types'

// Child component
// Represents UI of Employee Card
function EmployeeCard({ employee }: { employee: Employee }) {
  return (
    <div className={`employee-card ${employee.status.toLowerCase()}`}>
      <h3>{employee.name}</h3>
      <div>
        <p>{employee.status}</p>
        <p>
          {new Date(employee.lastPunch).toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </p>
      </div>
    </div>
  )
}

/*
=====================
 App Component (Parent)
=====================
This holds main application state.
*/
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

  // useMemo caches computed value
  const groupedEmployees = useMemo(() => {
    return employees.reduce((acc, employee) => {
      if (!Object.hasOwn(acc, employee.dept)) {
        acc[employee.dept] = [];
      }
      acc[employee.dept].push(employee);
      // Your grouping logic here...
      return acc;
    }, {} as Record<string, Employee[]>);
  }, [employees]);

  return (
    <div className='app-container'>
      <div className='depts-container'>
        {Object.entries(groupedEmployees).map(([deptName, deptEmployees]) => (
          <div key={deptName} className="dept-section">
            <h2>{deptName}</h2>
            {deptEmployees.map(employee => (
              <EmployeeCard
                key={employee.id}
                employee={employee}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
