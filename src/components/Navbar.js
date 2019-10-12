import React from 'react';
import { IconContext } from "react-icons";
import { FaAngleDown,FaBars} from "react-icons/fa";

class Navbar extends React.Component{
    render(){
        return(
         
            <nav className="navbar navbar-expand bg-dark navbar-dark">
            <span className="navbar-brand bg-dark"><IconContext.Provider value={{ color: "white" ,size:"1.5em"}}>
              <div  >
              <FaBars />
               </div>
             </IconContext.Provider></span>
              <span className="navbar-brand bg-dark">YourToDos</span>
            </nav>
        );
    }
}

export default Navbar;