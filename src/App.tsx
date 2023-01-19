import React,{ Component } from 'react';
import Nav from './Components/Navbar/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chart1 from './Components/chart1';
import Chart2 from './Components/chart2';
import Chart3 from './Components/chart3';
import Nav1 from './Components/Navbar/navbar1';
import Nav2 from './Components/Navbar/Navbar2';

// import {data} from './dummydata';


export default class App extends Component {
  
  render() {
    return (
      <div className="App">
<BrowserRouter>
<Routes>
  <Route path='/' element={<Nav2/>}></Route>
    <Route path='/chart1' element={<Chart1/>}></Route>
    <Route path='/chart2' element={<Chart2/>}></Route>
    <Route path='/chart3' element={<Chart3/>}></Route>

  
  </Routes></BrowserRouter>
      </div>
    );
  }
}





