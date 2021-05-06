import React, { Component } from 'react';
import styles from './todoPage.module.scss';
import { connect } from 'react-redux';
import { todoActions } from '../../redux/actions';

class TodoPage extends Component {
  constructor(props) {
    super(props);
    this.nextKey = 0;
    this.state = {  
      todoText: ''
    }
  }

  generateKey() {
    return this.nextKey++;
  }

  onChangeTodoInput = (event) => {
    this.setState({ todoText: event.target.value });
  }

  addTodo = (event) => {
    event.preventDefault();
    const todoText = this.state.todoText;
    if (todoText === '') return;
   
    this.props.addTodo(this.state.todoText);
    this.setState({ todoText:'' })
  }

  removeTodoByText = (todoText) => {
    this.props.removeTodo(todoText);
  }

  render() { 
    console.log( this.props );
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
          { 
              this.props.todoItems.map((todo, index) => (
                <div key={index} className={styles.todo_div}>
                  <div className={styles.todo_text}>
                    {todo}
                  </div>
                  <div className={styles.todo_remove}>
                    <button onClick={() => this.removeTodoByText(todo)}>❌</button>
                  </div>
                </div>
              ))
          }
        </div>
      </div> 
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoItems: state.todo
  }
}

export default connect(mapStateToProps, todoActions)(TodoPage);