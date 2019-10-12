import React from 'react';
import { IconContext } from "react-icons";
import { FaChevronDown} from "react-icons/fa";


class Sidebar extends React.Component{

    render(){
      return(
         <div className="left_menu" >
         <ul className="list-group list-group-flush">
         <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center list-group-item-dark ">
         All Tasks
         <span className="badge badge-light badge-pill">12</span>
         </a>
         <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center list-group-item-dark">
         Today
         <span className="badge badge-light badge-pill">12</span>
         </a>
         <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center list-group-item-dark">
         This week
        <span className="badge badge-light badge-pill">12</span>
        </a>
<a href="#"  className="list-group-item d-inline-flex list-group-item-action d-flex justify-content-between align-items-center list-group-item-dark ">
  <div className="bg_color d-inline-flex"  data-toggle="collapse" data-target="#labels">
  Labels<IconContext.Provider value={{ color: "black" ,size:"1.2em", className: "react-icons" }}>
              <div className="bg_color" >
              < FaChevronDown/>
               </div>
             </IconContext.Provider>
  </div>
  <aside><button data-track="navigation|projects_quick_add" type="button" className=" btn adder_icon">
             <svg className="bg_color" width="13" height="13"><path d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z" 
             fill="currentColor" fill-rule="evenodd"></path></svg></button></aside></a>
             <div id="labels" class="collapse list-group">
    <a className="list-group-item list-group-item-action list-group-item-dark" href="#">Link 1</a>
  </div>
  <a href="#"  className="list-group-item d-inline-flex list-group-item-action d-flex justify-content-between align-items-center list-group-item-dark ">
  <div className="bg_color d-inline-flex"  data-toggle="collapse" data-target="#groups">
  Groups<IconContext.Provider value={{ color: "black" ,size:"1.2em", className: "react-icons" }}>
              <div className="bg_color" >
              < FaChevronDown/>
               </div>
             </IconContext.Provider>
  </div>
  <aside><button data-track="navigation|projects_quick_add" type="button" className=" btn adder_icon">
             <svg className="bg_color" width="13" height="13"><path d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z" 
             fill="currentColor" fill-rule="evenodd"></path></svg></button></aside></a>
             <div id="groups" class="collapse list-group">
    <a className="list-group-item list-group-item-action list-group-item-dark" href="#">Link 1</a>
   </div>
  </ul>
  </div>  
    );
    }
}
export default Sidebar;