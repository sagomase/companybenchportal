import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Common/Header';
import Home from './Components/Home';
import Userdata from './Components/Userdata';
import Adduser from './Components/Adduser';
import Edituser from './Components/Edituser';


function App() {
  return (
    <div className="App">
      <div className='leftPanel'>
        <Header />
      </div>
      <div className='rightPanel'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/userdata' element={<Userdata />} />
          <Route path='/adduser' element={<Adduser />} />
          <Route path='/edituser/:id' element={<Edituser />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
