import React, { Component } from 'react';
import TodoItems from './TodoItems';
import PropTypes from 'prop-types';




class Todos extends Component {
   
  render() {
    
    
    return this.props.todos.map((todo) => (
         <TodoItems key={todo.id} todo={todo} markComplete ={this.props.markComplete} trash={this.props.trash}/>
    ));
  }
}

//PropTypes
Todos.propTypes ={
    todos:PropTypes.array.isRequired,
    markComplete:PropTypes.func.isRequired,
    trash:PropTypes.func.isRequired
}

export default Todos;
