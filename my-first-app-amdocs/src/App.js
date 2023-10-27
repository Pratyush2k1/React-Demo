//import logo from './logo.svg';
import './App.css';
//import First from './components/First';
//import { useState } from 'react';
import React from 'react';
import Car from './components/Car';

function App() {
//   const [id,setId] = useState("");
//   const [name,setName]= useState("");
//   const [salary,setSalary]= useState("");
//   const [department,setDepartment]= useState("");
//   const handleSubmit = (event) => { 
//     event.preventDefault();
//   };
 
//  return (
//   <div>
//     <form onSubmit={handleSubmit}>
//       <label> ID:
//         <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
//       </label>
//       <br/>
      
//       <label> Name:
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       </label>
//       <br/>

//       <label> Salary:
//         <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} />
//       </label>
//       <br/>

//       <label> Department:
//         <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
//       </label>
//         <br/>

//        <input type="submit" value="Add Employee" />
 
//     </form>
 
//      {id} {name} {salary} {department}
 
//   </div>
//  );
return ( 
  <Car />
)
}

export default App;
