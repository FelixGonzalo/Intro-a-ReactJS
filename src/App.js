import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import tasks from './sample/tasks.json';

import Tasks from './components/cTasks/Tasks';
import TaskForm from './components/cTasks/TaskForm';
import Posts from './components/cPosts/Posts'

class App extends React.Component {

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length,
      done: false
    }
    this.setState ({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = id => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    console.log(newTasks);
    this.setState({
      tasks: newTasks
    });
  }

  checkDone = id => {
    const newTasks = this.state.tasks.map(task => {
      if(task.id === id) {
        task.done = !task.done
      }
      return task;
    })
    this.setState({tasks: newTasks})
  }

  render() {
    return <div>
      <Router>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/posts">Posts</Link>
        <br/>
        <Route exact path="/" render={()=>{
          return <div>
            <TaskForm addTask = {this.addTask}/>
            <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone}/>
          </div>
        }}></Route>
        <Route path="/posts" component={Posts}/>
      </Router>
    </div>
  }
}

export default App;