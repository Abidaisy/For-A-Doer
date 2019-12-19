import React  from 'react';
import{FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,} from 'react-icons/fa'
import { ListGroup,Badge } from 'reactstrap';
import SidedropContainer from '../container components/sidebarcontainer';
import FilterLink from './FilterLink';
import { connect } from 'react-redux'
import { setVisibilityFilter} from '../action/action_creators'

const Sidebar = (props) => {
      return(
             <ListGroup flush={true} >
              <FilterLink filter={"Inbox"}
              className="custom-link list-group-item"
              onClick={() => props.setVisibilityFilter('Inbox')}>
                <FaInbox className="mx-2"/>
              Inbox
              <Badge color="" className="ml-2"></Badge>
              </FilterLink>
              <FilterLink  filter={"Today"}
              className="custom-link list-group-item"
              onClick={() =>props.setVisibilityFilter('Today')}>
                <FaRegCalendar className="mx-2"/>
              Today
              <Badge color="" className="ml-2"></Badge>
              </FilterLink>
             <FilterLink  filter={"Next Week" }
             className="custom-link list-group-item" 
              onClick={() =>props.setVisibilityFilter('Next Week')}>
                <FaRegCalendarAlt className="mx-2"/>
               Next Week
              <Badge color="" className="ml-2"></Badge>
              </FilterLink>
              <SidedropContainer menuitem="Label"/>
             </ListGroup>
    );
    }
const mapStateToProps = (state) => {
  return {
  labels:state.todos.labels,
  filter:state.todos.filter
}}

const mapDispatchToProps = dispatch => {
  return{
  setVisibilityFilter:(filter) => 
  {dispatch(setVisibilityFilter(filter))}

}}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)