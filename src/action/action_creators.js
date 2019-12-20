export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const DELETE_TODO = 'DELETE_TODO'
export const ADD_LABEL = 'ADD_LABEL'
export const SET_FILTER_COUNT = 'SET_FILTER_COUNT'
export const DELETE_LABEL ='DELETE_LABEL'
export const EDIT_TODO = 'EDIT_TODO'
export const visibilityFilter = ['Inbox','Today','Next Week']

let s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
}


export const addTodo = (text,label,date) => {
    return {
    type: 'ADD_TODO',
    id: s4(),
    text,  //<--ES6. same as text:text, in ES5
    completed: false ,//<-- initially this is set to false
    label,
    date
    }
   }
   export const editTodo = (id,text,label,date) => {
    return {
    type: 'EDIT_TODO',
    id,
    text,  //<--ES6. same as text:text, in ES5
    label,
    date
    }
   }
   export const setVisibilityFilter = (filter) => {
    return {
    type: 'SET_VISIBILITY_FILTER',
    filter
    }
   }
   
   export const toggleTodo = (id) => {
    return {
    type: 'TOGGLE_TODO',
    id
    }
   }

   export const deleteTodo = (id) => {
    return { 
        type: DELETE_TODO, 
        id
    }
  }

  export const addLabel = (text) => {
    return {
    type: 'ADD_LABEL',
    id: s4(),
    text,  //<--ES6. same as text:text, in ES
    }
   }
   export const setFilterCount = (filterCount) => {
     return{
       type: 'SET_FILTER_COUNT',
       filterCount
     }
   }
   export const deleteLabel = (id) => {
     return{
       type:'DELETE_LABEL',
       id
     }
   }