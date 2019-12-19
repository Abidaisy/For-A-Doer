import { connect } from 'react-redux'
import { addLabel,setVisibilityFilter,deleteLabel } from '../action/action_creators'
import Sidedrop from '../components/Sidedrop'

const mapStateToProps = (state) => {
    return {
    labels:state.todos.labels,
    filter:state.todos.filter
  }}
  
  const mapDispatchToProps = dispatch => ({
    addLabel: text => dispatch(addLabel(text)),
    setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter)),
    deleteLabel:id => dispatch(deleteLabel(id))

  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Sidedrop)