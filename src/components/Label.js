import React, { useState } from 'react';
import { Tooltip,Popover, PopoverBody } from 'reactstrap';
import {FaTag} from "react-icons/fa";
import {connect} from 'react-redux'

 const Label = (props) => {
  const [popoverOpen,setpopoverOpen] = useState(false);
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);
    const toggle2 = () => setpopoverOpen(!popoverOpen);
    let label_list;
    if(props.labels.length === 0)
    {label_list = <span>No Labels Yet</span>}
    else{
      label_list = props.labels.map( label => (
       <li className="popover-link p-2 w-100 font-weight-bolder" key={label.id} 
        onClick={() => {props.setLabel(label.text)}}>
        {label.text}</li>)
        );
    }
    return (
      <div>
         <a className="m-2 add-icon" href="#" id="label_tag">
         <FaTag/></a>
        <Tooltip placement="bottom" isOpen={tooltipOpen} target="label_tag" toggle={toggle} >
          Add Label
        </Tooltip>
        <Popover placement="bottom" isOpen={popoverOpen} target="label_tag" trigger="focus" toggle={toggle2}>
        <PopoverBody>
         {(label_list)}
          </PopoverBody>
      </Popover>
      </div>
    );
}
const mapStateToProps = (state) =>{
  return{
    labels:state.todos.labels
  }
}
export default connect(mapStateToProps)(Label);