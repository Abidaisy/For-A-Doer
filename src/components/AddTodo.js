  import React from 'react';
  import Label from './Label';
  import Schedule from './TaskDate'
  import moment from 'moment'


class AddTodo extends React.Component {
  state={
    // addButToggler:false,
   value:'',
   label:'Inbox',
   TaskDate:moment().format('DD/MM/YYYY')
  };
  // handleTaskButton =() => {
  //     this.setState({addButToggler:true});
  //  }
  // handleTaskBlock = () => {
  //   this.setState({addButToggler:false});
  // }
  
  tosetlabel = (value) =>{
    this.setState({label:value});
  }
  toSetDate = (value) => {
  this.setState({TaskDate:value});
    
  }
  resetInput = (e) =>{
    e.preventDefault();
    if(this.state.value){
    const text =this.state.value;
    const label = this.state.label;
    const date =this.state.TaskDate;
    this.props.toAdd({text,label,date});
    this.setState({value:""});
     this.setState({label:'INBOX'});
     this.setState({TaskDate:moment().format('DD/MM/YYYY')});
    }
  }
    render(){
       let toDisplay;
     
        toDisplay = <form>
        <div className="form-group">
          <input type="text" className="form-control my-2" placeholder="Add your tasks" autoFocus
          value={this.state.value} 
          onChange={(e) => this.setState({value:e.target.value}) }>
          </input>
          <div className="d-flex">
            <button className="btn btn-add btn-sm mr-2" type="submit" onClick={(e) =>this.resetInput(e)}>Add</button>
            <button className="btn btn-secondary btn-sm mr-2" type="reset" onClick={this.props.setHideAdd}>cancel</button>
            <div className="ml-auto d-inline-flex">
              <Label setLabel={this.tosetlabel}/>
              <Schedule setTaskDate={this.toSetDate}/>
            </div>
          </div>
        </div>
         </form>
        return(<div> {toDisplay} </div>);
    }
  }

 
export default AddTodo;