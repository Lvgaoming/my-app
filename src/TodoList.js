import React, {Component, Fragment} from 'react';
import 'antd/dist/antd.css';
import {Input, Button,List, Typography} from 'antd';
import store from './store/index';

class TodoList extends Component {
  constructor(props) {
    super(props);
    console.log(store.getState());
    this.state = store.getState();
    store.subscribe(()=>this.handleStoreChange());
    // this.state = {
    //   inputValue: '',
    //   list: []
    //
    // }

  }


  render() {
    console.log('render');
    return (
        <Fragment>
          <div style={{marginLeft:'50px' ,marginTop:'10px'}}>
            {/*下面是一个input框*/}
            {/*<label htmlFor="insertArea">输入内容</label>*/}
            <Input
                placeholder="Todo Info"
                style={{width: '300px',marginRight:'10px'}}
                id="insertArea"
                value={this.state.inputValue}
                onChange={this.handleInputChange.bind(this)}
                onKeyDown={this.handleKeyDown.bind(this)}
            />
            <Button type="primary" onClick={()=>this.handleBtnClick()}>提交</Button>

            <List

                style = {{marginTop: '10px' ,width:'300px'}}
                bordered
                dataSource={this.state.list}
                renderItem={(item,index) => (
                    <List.Item onClick={()=>this.handleItemDlete(index)}>
                      <Typography.Text mark>[进行中]</Typography.Text> {item}
                    </List.Item>
                )}
            />
          </div>
          {/*<ul>*/}
            {/*{*/}
              {/*this.state.list.map((item, index) => {*/}
                {/*return (*/}
                    {/*this.renderTodoItem(item, index)*/}
                {/*)*/}
              {/*})*/}
            {/*}*/}
          {/*</ul>*/}


        </Fragment>
    )
  }

  // renderTodoItem(item, i) {
  //   return (
  //       <TodoItem
  //           key={i}
  //           content={item}
  //           deleteItem={() => this.handleItemDlete(i)}
  //       />
  //   );
  // }

  handleInputChange(e) {
    const action = {
      type: 'change_input_value',
      value: e.target.value
    };
    store.dispatch(action);
    // const value = e.target.value;
    // this.setState(() => ({
    //   inputValue: value
    // }))
  }

  handleBtnClick() {
    const action = {
      type: 'add_todo_item',

    };
    store.dispatch(action);

  }

  handleStoreChange() {
    console.log('store change');
    this.setState(store.getState())
  }


  handleItemDlete(index) {

    const action = {
      type: 'delete_todo_item',
      value: index
    };
    store.dispatch(action);

  }


  handleKeyDown(e) {
    if (e.keyCode === 13) {
      this.handleBtnClick();
    }
  }
}

export default TodoList;
