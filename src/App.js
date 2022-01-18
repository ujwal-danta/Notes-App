import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notes from "./Pages/Notes"
import Create from "./Pages/Create"

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Notes/>}/>
     </Routes>
     <Routes>
       <Route path="/create" element={<Create/>}/>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
