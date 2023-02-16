// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react'
import Csv from './components/Csv'
// import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Add from './Components/Add';
// import Update from './Components/Update';


export default function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Csv />}></Route>
        </Routes>
      </BrowserRouter> */}

      <Csv/>
    </>
  )
}