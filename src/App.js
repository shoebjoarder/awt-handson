import React, { Component } from 'react'

// Import the Todos Component
import Todos from './Todos'
import AddForm from './AddForm'

export default class App extends Component {
	// Task 1: Create Constructor, super(props) and a todos array
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{ id: 1, content: "Do the AWT Bootstrap & MongDB Homework by 20th of May" },
				{ id: 2, content: "Finish the final draft of the presentation" },
				{ id: 3, content: "Finish the recordings of the presentation" },
				{ id: 4, content: "Prepare the hands-on session codes" },
			]
		}
	}
	
	// Task 2: Create a Delete method
	deleteTodo = (id) => {
		// Task 2.1: Filter the todo list by filtering out the id onClick
		const todo = this.state.todos.filter(todo => {
			return todo.id !== id
		});
		// Task 2.2: Set the state
		this.setState({
			todos: todo
		})
	}

	addTodo = (todo) => {
		todo.id=Math.random();
		let todos = [...this.state.todos, todo]
		this.setState({
			todos: todos
		})

	}
	render() {
		return (
			<div className="todo-app container">
				<h1 className="center blue-text">A Simple Todo list</h1>
				{/* Add the Todos Component and pass the props (todos array) into the Todos component */}
				{/* Pass the deleteTodo method to the Todos Component */}
				<Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
				<AddForm addTodo={this.addTodo}/>
			</div>
		)
	}
}



