import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';
import '../assets/sass/Todos.css';

class Todos extends Component {
  render() {
    return (
      <div className='Todos'>
        {
          this.props.todos.map((todo) => {
              return (
                  <TodoItem key={todo.id} 
                            todo={todo}
                            delTodo={this.props.delTodo}
                            toggleComplete={this.props.toggleComplete}/>
              );
          })
        }

      </div>
    );
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default Todos;
