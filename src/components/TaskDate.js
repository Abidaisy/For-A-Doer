import React, { useState } from 'react';
import { Tooltip,Popover, PopoverBody } from 'reactstrap';
import { FaRegCalendarPlus} from "react-icons/fa";
import moment from 'moment';

const Schedule = (props) => {
    const [popoverOpen,setpopoverOpen] = useState(false);
   const [tooltipOpen, setTooltipOpen] = useState(false);
   const toggle = () => setTooltipOpen(!tooltipOpen);
   const toggle2 = () => setpopoverOpen(!popoverOpen);
   return (
     <div>
        <a className="m-2 add-icon" href="#" id="schedule" >
          <FaRegCalendarPlus/></a>
       <Tooltip placement="bottom" isOpen={tooltipOpen} target="schedule" toggle={toggle}>
         Add Schedule
       </Tooltip>
       <Popover placement="bottom" isOpen={popoverOpen} target="schedule" toggle={toggle2} trigger="focus">
       <PopoverBody>
           <li href="#" 
           className="popover-link p-2 w-100 font-weight-bolder"
           onClick={() => {
             props.setTaskDate(moment().format('DD/MM/YYYY'));}}>
           Today</li>
           <li href="#" 
           className="popover-link p-2 w-100 font-weight-bolder"
           onClick={() => {
            props.setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'));}}>
           Tomorrow</li>
           <li href="#" 
           className="popover-link p-2 w-100 font-weight-bolder"
           onClick={() => {
            props.setTaskDate(moment().add(7, 'days').format('DD/MM/YYYY'));}}>
           Next week</li>
         </PopoverBody>
     </Popover>
     </div>
   );
}

export default Schedule;
