import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    DELETE_TODO,
    ADD_LABEL,
    SET_FILTER_COUNT,
    DELETE_LABEL,
    EDIT_TODO,
  } from '../action/action_creators'
  import {combineReducers} from 'redux';
 

  const INITIAL_DATA = {
    todos:[],
    labels:[],
    filter:'Inbox'
  }

  function todos(state=INITIAL_DATA , action){
       
    switch(action.type){
        case ADD_TODO: 
        return {
          ...state,
          todos:[
            ...state.todos,
            {
                id:action.id,
                text: action.text,
                completed: false,
                label: action.label,
                date:action.date
              }]
      }
       
      case EDIT_TODO: 
        return {
          ...state,
          todos:state.todos.map(todo =>
            {
              if(todo.id === action.id){
                todo.text = action.text;
                todo.label = action.label;
                todo.date = action.date;
              }
              return todo;
            })
          }
        case TOGGLE_TODO:
            return { ...state,
              todos:state.todos.map(todo => 
            {
            if(todo.id === action.id)
            todo.completed = !todo.completed;
             return todo;
            })
          }
           
        case DELETE_TODO:
            return { ...state,
              todos: state.todos.filter(todo => todo.id!==action.id)}
        
        case ADD_LABEL:
          return { ...state,
           labels: [ ...state.labels,
          {
            id: action.id,
            text:action.text
          }]
          }
          case SET_VISIBILITY_FILTER:
            return{ ...state,
              filter:action.filter
            }
          case SET_FILTER_COUNT:
            return{ ...state,
              filterCount:action.filterCount
            }
            case DELETE_LABEL:
              return{ ...state,
                labels: state.labels.filter(label => label.id!==action.id)}
        default:
            return state;

        }
  }

  export default combineReducers({
    todos
  })