// React hooks:
// useState → stores component state
// useEffect → runs side effects (ex. fetching data)
// useMemo → caches expensive computations
import { useEffect, useState, useMemo } from 'react'
import './App.css'
import type { Employee } from './types'

function formatTime(ms: number) {
  const totalSeconds = Math.floor(ms / 1000);

  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = Math.floor(totalSeconds % 60);

  const hours = h > 0 ? `${h}:` : ""; // Only show hours if they exist
  const minutes = m.toString().padStart(2, "0");
  const seconds = s.toString().padStart(2, "0");

  return `${hours}${minutes}:${seconds}`;
}

// Child component
// Represents UI of Employee Card
function EmployeeCard({ employee } : { employee: Employee }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const punchTimestamp = useMemo(() => {
    return new Date(employee.lastPunch).getTime();
  }, [employee.lastPunch]);

  return (
    <div className={`employee-card ${employee.status.toLowerCase()}`}>
      <h3 className='employee-name'>{employee.name}</h3>
      <div>
        <p className="status-label">{employee.status}</p>
        <p className="punch-time">
          {formatTime(currentTime.getTime() - punchTimestamp)}
        </p>
      </div>
    </div>
  )
}

/*
=====================
 App Component (Parent)
=====================
Holds main application state.
*/
function App() {

  // employees = current value
  // setEmployees = function to update value
  const [employees, setEmployees] = useState<Employee[]>([]);

  // useEffect runs AFTER component renders
  // [] dependency array = run this only once (on mount)
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

    // setInterval() starts repeating timer
    const intervalId = setInterval(() => {
      fetchEmployees();
    }, 5000);

    // Clean up
    return () => {
      clearInterval(intervalId);
    }
  }, []);

  // useMemo caches computed value
  // so grouping isn't recomputed on every render
  const groupedEmployees = useMemo(() => {
    // reduce transforms array -> object
    return employees.reduce((acc, employee) => {
      if (!Object.hasOwn(acc, employee.dept)) {
        acc[employee.dept] = [];
      }
      acc[employee.dept].push(employee);
      return acc;
    }, {} as Record<string, Employee[]>); // key = string (dept), value = array of Employee
  }, [employees]);

  return (
    <div className='app-container'>
      <div className='depts-container'>
        {/* .entries() converts object to array of [key, value] items */}
        {/* .map() iterates through array */}
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
