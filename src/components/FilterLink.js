import React from 'react'
import {NavLink} from 'react-router-dom'

const FilterLink = ({filter,children }) => (
 
    <li> <NavLink exact 
    className="custom-link list-group-item"
     to={filter === 'Inbox' ? '/' : `/${filter}`}>
        {children}
    </NavLink></li>
  
)

export default FilterLink;