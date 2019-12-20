import React from 'react';
import { FaBars} from "react-icons/fa";
class Navbar extends React.Component{
    render(){
        return(
            <nav className=" fixed-top navbar navbar-expand my_nav">
            <div className="navbar-brand toggle-btn my-auto mt-0 nav-btn pt-0" style={{cursor:"pointer"}} onClick={this.props.click}>
              <FaBars />
             </div>
              <span className="navbar-brand ml-2 bold">Your Todo</span>
            </nav>
        );
    }
}
export default Navbar;