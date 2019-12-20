import {FaChevronDown,FaChevronRight,FaPlus,FaRegTrashAlt,FaCheck,FaEllipsisH} from 'react-icons/fa';
import React, { useState ,useEffect} from 'react';
import { Collapse } from 'reactstrap';
import { ListGroup, ListGroupItem} from 'reactstrap';
import {  Modal, ModalHeader, ModalBody, ModalFooter,InputGroup,Input } from 'reactstrap';
import {withRouter} from 'react-router-dom'
import FilterLink from './FilterLink';

const Sidedrop = (props) => {

  const [projectName, setProjectName] = useState('');

  const [collapse, setCollapse] = useState(false);

  const [status, setStatus] = useState('Closed');

  const onEntered = () => setStatus('Opened');

  const onExited = () => setStatus('Closed');

  const toggle = () => setCollapse(!collapse);

  const [modal, setModal] = useState(false);

  const toggle_modal = () => setModal(!modal);

  const addProject = (e) => {
    e.preventDefault();
   if(projectName !== '')
   {
     props.addLabel(projectName);
    setProjectName('');}
  }
   const addToggle = () => {
   setCollapse(true);
    setModal(!modal);
   }
   useEffect(() => {
     const data = JSON.parse(localStorage.getItem("side-drop-status"));
     if(data)
     setCollapse(data);
   },[])
  //  console.log(props);
  useEffect(() => {
    localStorage.setItem("side-drop-status",JSON.stringify(collapse));
  })
   
  return (
    <div>
      <ListGroupItem className="custom-link d-flex" style = {{display:"flex",cursor:"pointer"}}>
        <span onClick={toggle} className="flex-grow-1">
        <span  className="mx-2 pt-0.5" style={{transition:"all 0.5s linear"}}>
         {status === 'Closed' ?< FaChevronRight/>:<FaChevronDown/>}</span>
         <span  onClick={toggle}>{props.menuitem}s</span>
         </span>
         <aside className='ml-auto sidebar-link-icon' onClick={() => addToggle()}><FaPlus/></aside>
         </ListGroupItem>
      <Collapse
        isOpen={collapse}
        onEntered={onEntered}
        onExited={onExited}
      >
        {/* <a href="#" className="text-white d-flex p-3 add_task" 
          onClick={toggle_modal}><FaPlus className="mx-4 align-self-center"/><span>Add {props.menuitem}</span></a> */}
        <ul style={{listStyleType:"circle"}}>
          {props.labels.map( label => (
            <li key={label.id} style={{position:'relative'}}>
           <FilterLink className="d-flex" filter={`${label.text}`}  
            onClick={() =>{props.setVisibilityFilter(label.text)}}>
              <FaEllipsisH/>
              <span className="text-style">{label.text}</span></FilterLink>
            <span className="sidebar-link-icon align-self-center" style={{color:'white'}} 
               onClick={() => {
                 props.deleteLabel(label.id);
                 if(label.text === props.match.params.filter)
                   props.history.push('/');
              }}><FaRegTrashAlt/>
                </span>
                </li>
          )) } 
          <Modal  isOpen={modal} toggle={toggle_modal} centered={true} autoFocus={false}>
        <ModalHeader toggle={toggle_modal}><span>Add {props.menuitem}</span></ModalHeader>
        <ModalBody >
          <form>
          <span>{props.menuitem} Name</span>
          <InputGroup  className="py-2">
        <Input placeholder="Name" autoFocus={true} value={projectName} 
          onChange={(e) => setProjectName(e.target.value) }/>
      </InputGroup>
      <ModalFooter>
          <button className="btn btn-add" type="submit" onClick={(e) => addProject(e)}>
            Add</button>
          <button className="btn btn-secondary" type="reset" onClick={toggle_modal}>Cancel</button>
          </ModalFooter>
          </form>
          </ModalBody>
      </Modal>
      
        </ul>
      </Collapse>
    </div>
  );
}

export default withRouter(Sidedrop);