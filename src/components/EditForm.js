import React from 'react';
import Label from './Label';
import Schedule from './TaskDate'

class EditForm extends React.Component{
  state = {
    label:'',
    TaskDate:'',
    text:this.props.edit.text 
  }
tosetlabel = (value) =>{
  this.setState({label:value});
}
toSetDate = (value) => {
this.setState({TaskDate:value});
}
resetInput = () =>{
  if(this.state.text || this.props.edit.text){
  const text =this.state.text || this.props.edit.text;
  const label =this.state.label || this.props.edit.label;
  const date =this.state.TaskDate || this.props.edit.date;
  const id = this.props.edit.id;
  this.props.toEditTodo({id,text,label,date});
  this.setState({text:''});
  this.setState({label:''});
  this.setState({TaskDate:''});
  }
}
render(){
    return(
      <form>
      <div className="form-group ">
       <input type="text" className="form-control my-2" placeholder="Add your tasks" autoFocus
       value={this.state.text || ''} onChange = {(e) => this.setState({text:e.target.value})}>
    </input>
    <div className="d-flex">
      <button className="btn btn-add btn-sm mr-2" type="submit" onClick={this.resetInput}>Edit</button>
      <button className="btn btn-secondary btn-sm mr-2" type="submit" onClick={this.props.setHideEdit}>cancel</button>
      <div className="ml-auto d-inline-flex">
        <Label setLabel={this.tosetlabel}/>
        <Schedule setTaskDate={this.toSetDate}/>
      </div>
    </div>
  </div>
   </form>);
}
}

export default EditForm;