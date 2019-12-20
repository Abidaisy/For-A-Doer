import React from 'react'
import {NavLink} from 'react-router-dom'

const FilterLink = ({filter,children }) => (
 
   <NavLink exact 
     to={filter === 'Inbox' ? '/' : `/${filter}`}>
        {children}
    </NavLink>
  
)

export default FilterLink;