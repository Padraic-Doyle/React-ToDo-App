import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItems extends Component {
    
    getStyle=()=>{
        return{
            background:'#f4f4f4f4',
            padding: '10px',
            borderBottom:'1px #ccc dotted',
            textDecoration:this.props.todo.completed ? 'line-through' : 'none'
        }
        
     }

    
 
  render() {
    const {title,id}=this.props.todo;
    return (
      <div style={this.getStyle()}>
       <p>
       <input type='checkbox' onChange={this.props.markComplete.bind(this,id,title)}/>
        {' '}
        {title}
        <button style={btnStyle} onClick={this.props.trash.bind(this,id)}>x</button>
        </p>
      </div>
    )
  }

 
}


//PropTypes
TodoItems.propTypes ={
    todo: PropTypes.object.isRequired,
    markComplete:PropTypes.func.isRequired,
    trash:PropTypes.func.isRequired,
}

const btnStyle ={
    background:'#ff0000',
    color: 'white',
    border:'none',
    padding:'10px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
}

export default TodoItems
