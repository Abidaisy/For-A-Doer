import React from 'react';
import Navbar from './components/Navbar.js';
import Sidebar from './components/Sidebar.js';
import './App.css';

class App extends React.Component{

  render(){
    return(
      <React.Fragment>
        <div className="wrapper" >
        <Navbar/>
         <Sidebar /> 

        </div>
      </React.Fragment>
    );
  }
}

export default App;
