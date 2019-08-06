import React, {Component, Fragment} from 'react';
import 'antd/dist/antd.css';
import {Input, Button,List, Typography} from 'antd';
import TodoList from "./TodoList";

const TodoListUI = (props)=>{
  return(
      <Fragment>
        <div style={{marginLeft:'50px' ,marginTop:'10px'}}>
          <Input
              placeholder="Todo Info"
              style={{width: '300px',marginRight:'10px'}}
              id="insertArea"
              value={props.state.inputValue}
              onChange={props.handleInputChange}
              onKeyDown={(e)=>props.handleKeyDown(e)}
          />
          <Button type="primary" onClick={()=>props.handleBtnClick()}>提交</Button>
          <List

              style = {{marginTop: '10px' ,width:'300px'}}
              bordered
              dataSource={props.state.list}
              renderItem={(item,index) => (
                  <List.Item onClick={() =>{props.handleItemDlete(index)}}>
                    <Typography.Text mark>[进行中]</Typography.Text> {item}
                  </List.Item>
              )}
          />
        </div>
      </Fragment>
  )
};
export default TodoListUI;
