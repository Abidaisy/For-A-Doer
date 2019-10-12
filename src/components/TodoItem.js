import React from 'react';


 class TodoItem extends React.Component {
     
    
     render(){
        // console.log(this.props.todo.id);
         const { title} = this.props.todo;
         return (
                <div className = "container">
                <div className={this.formatCompletedTask()} >
                <h6 className="card-body" >
                <input  type="checkbox" className="m-1" checked={this.props.todo.completed} onChange={() => this.props.onChange(this.props.id) }/>
                {title}
                <button className="btn btn-danger float-sm-right " onClick={() => this.props.onDelete(this.props.id) }>X</button>
                 </h6>
                </div>
                </div>
         );
     }
     formatCompletedTask() {
           let classes = " card bg-light m-1 ";
         if(this.props.todo.completed === true)
           {
               classes = " card bg-success m-1";
           }
           return classes;
     }
 }

 export default TodoItem;
