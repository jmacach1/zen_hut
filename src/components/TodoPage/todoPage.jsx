import React, { Component } from 'react';
import styles from './todoPage.module.scss';

class TodoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      todoText: '',
      todoList: []
    }
  }

  onChangeTodoInput = (event) => {
    this.setState({ todoText: event.target.value });
  }

  addTodo = (event) => {
    event.preventDefault();
    const todoText = this.state.todoText;
    
    if (todoText === '') return;
    this.setState({
      todoText: '',
      todoList: [...this.state.todoList, todoText]
    });
    console.log(this.state.todoText);
  }

  render() { 
    return ( 
      <div className={styles.todoPage}>
        <div className="controls">
          <h2>Todo App</h2>
          <form  onSubmit={this.addTodo}>
            <input type="text" id="todo" name="todo" 
              placeholder="todo text" 
              onChange={this.onChangeTodoInput}
              value={this.state.todoText}
              />
              <br/>
            <input type="submit" value="Create Todo"/>
          </form>
        </div>
        <div className="todo-list">
          <TodoList todoList={this.state.todoList} />
          {/* {
            this.state.todoList.map(
              (todo, index) => (<div key={} className={styles.todoDiv}>{todo}</div>))
          } */}
        </div>
      </div> 
    );
  }
}

function TodoList(props) {
  return props.todoList.map((todo, index) => (
    <div key={index} className={styles.todoDiv}>{todo}</div>
    )
  );
}
 
export default TodoPage;