import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem'
import './style.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []

    }

  }


  render() {
    return (
        <Fragment>
          <div>
            {/*下面是一个input框*/}
            <label htmlFor="insertArea">输入内容</label>
            <input
                id="insertArea"
                className="input"
                value={this.state.inputValue}
                onChange={this.handleInputChange.bind(this)}
                onKeyDown={this.handleKeyDown.bind(this)}
            />
            <button onClick={this.handleBtnClick.bind(this)}>提交</button>
          </div>
          <ul>
            {
              this.state.list.map((item, index) => {
                return (
                    this.renderTodoItem(item, index)
                )
              })
            }
          </ul>
        </Fragment>
    )
  }

  renderTodoItem(item, i) {
    return (
        <TodoItem
            key = {i}
            content={item}
            deleteItem={() => this.handleItemDlete(i)}
        />
    );
  }

  handleInputChange(e) {
    const value = e.target.value;
    this.setState(()=>({
      inputValue: value
    }))
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleItemDlete(index) {

    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState(()=>({
      list: list,
    }));
    console.log(index)
  }


  handleKeyDown(e) {
    if (e.keyCode === 13) {
      this.handleBtnClick();
    }
  }
}

export default TodoList;
