import React ,{Component} from 'react';

class TodoItem extends Component{


  render(){
    return <div onClick={()=>this.props.deleteItem()}>{this.props.content}</div>
  }

  // handleClick() {
  //   this.props.deleteItem(this.props.index)
  // }
}

export default TodoItem;
