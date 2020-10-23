import React, {Component} from 'react';
import './Task.css'
import PropTypes from 'prop-types';


class Task extends Component {

    StyleCompleted() {
        return {
            fontSize: '18px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render() {
        const {task} = this.props;

        return <div className="red">
            <p key={task.id} style={this.StyleCompleted()}>
            {task.id} - 
            {task.title} - 
            {task.description}</p>
            <input type="checkbox" onChange={this.props.checkDone.bind(this,task.id)}/>
            <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>X</button>
        </div>
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

const btnDelete = {
    fontSize: '20px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer',
}

export default Task;