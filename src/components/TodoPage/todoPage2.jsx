import React, { Component } from 'react';
import styles from './todoPage.module.scss';

class TodoPage extends Component {
  constructor(props) {
    super(props);
    this.nextKey = 0;
    this.state = {  
      todoText: '',
      todoMap: new Map()
    }
  }

  generateKey = () => this.nextKey++;

  onChangeTodoInput = (event) => {
    this.setState({ todoText: event.target.value });
  }

  addTodo = (event) => {
    event.preventDefault();
    const todoText = this.state.todoText;
    if (todoText === '') return;

    const modifiedMap = new Map(this.state.todoMap);
    modifiedMap.set(this.generateKey(), todoText);
    this.setState({
      todoText: '',
      todoMap: modifiedMap
    });
  }

  removeTodo = (key) => {
    const modifiedMap = new Map(this.state.todoMap);
    modifiedMap.delete(key);
    this.setState({
      todoMap: modifiedMap
    });
    console.log(modifiedMap);
  }

  render() { 
    const TodoList = [];
    this.state.todoMap.forEach((todo, key) => TodoList.push((
      <div key={key} className={styles.todo_div}>
        <div className={styles.todo_text}>
          {todo}
        </div>
        <div className={styles.todo_remove}>
          <button onClick={() => this.removeTodo(key)}>❌</button>
        </div>
      </div>
    )));

    return ( 
      <div className={styles.todoPage}>
        <div className={styles.controls}>
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
          { TodoList.map(todo => todo) }
        </div>
      </div> 
    );
  }
}

/**
 * connect expects 2 params:
 * 1 - a function to map what you want to READ 
 * 2 - list of actions you want to DISPATCH
 */

export default TodoPage;