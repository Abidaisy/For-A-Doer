import React from 'react';
import Navbar from './components/Navbar.js';
import Sidebar from './components/Sidebar.js';
import './App.css';
import AllTaskContainer from './container components/AllTaskContainer.js';
class App extends React.Component{
  state = {
    sidebar_class : ""
  };
 handlesidebar = () =>{
    this.state.sidebar_class === "" ?  this.setState({sidebar_class:"togglesidebar"}) : this.setState({sidebar_class:""}) ;
 }
 sideReset = () =>{
     this.setState({sidebar_class:""});
 }
  render(){
    return(
         <div>
        <Navbar  click={this.handlesidebar}/>
        <div className="wrapper" >
        <div className={'sidebar ' + this.state.sidebar_class}>
           <Sidebar /></div>
          <div className="mainpage">
          <AllTaskContainer sideReset={this.sideReset} filter={this.props.match.params.filter || 'Inbox'}/>
          </div>
        </div>
        </div>
    );
  }
}

export default App;
