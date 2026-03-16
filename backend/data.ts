// backend/data.js
export const employees = [
  { id: "101", name: "Uncle Joe", dept: "Produce", status: "IN", lastPunch: new Date().toISOString().split('T')[1] },
  { id: "102", name: "Sarah Smith", dept: "Deli", status: "OUT", lastPunch: new Date().toISOString().split('T')[0] },
  { id: "103", name: "Mike Ross", dept: "Bakery", status: "BREAK", lastPunch: new Date().toISOString().split('T')[0] },
  { id: "104", name: "Elena Gilbert", dept: "Customer Service", status: "IN", lastPunch: new Date().toISOString().split('T')[0] },
  { id: "105", name: "Bob Vance", dept: "Meat", status: "OUT", lastPunch: new Date().toISOString().split('T')[0] },
  { id: "106", name: "Kathy Jacobs", dept: "Produce", status: "IN", lastPunch: new Date().toISOString().split('T')[0] },
  { id: "107", name: "Stan Swanson", dept: "Deli", status: "OUT", lastPunch: new Date().toISOString().split('T')[0] },
  { id: "108", name: "Ed Cullen", dept: "Bakery", status: "BREAK", lastPunch: new Date().toISOString().split('T')[0] },
  { id: "109", name: "Barbara Howard", dept: "Customer Service", status: "IN", lastPunch: new Date().toISOString().split('T')[0] },
  { id: "110", name: "Billy Jones", dept: "Meat", status: "OUT", lastPunch: new Date().toISOString().split('T')[0] }
];