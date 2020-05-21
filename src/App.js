import React, { Component } from 'react'

// Import the Todos Component
import Todos from './components/Todos'
import AddForm from './components/AddForm'

export default class App extends Component {
	// Task 1.1: Create Constructor, super(props) and a todos array of atleast 4 elements
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{ id: 1, task: "Do the AWT Bootstrap & MongDB Homework by 20th of May" },
				{ id: 2, task: "Finish the final draft of the presentation" },
				{ id: 3, task: "Finish the recordings of the presentation" },
				{ id: 4, task: "Prepare the hands-on session codes" },
			]
		}
	}

	// Task 2.2: Create a Delete method and ID as input parameter
	deleteTodo = (id) => {
		// Task 2.3: Filter the todo list by filtering out the id onClick - maybe not use it because its more of a JavaScript basics
		const todo = this.state.todos.filter(todo => {
			return todo.id !== id
		});
		// Task 2.4: Set state method to assign the const variable to todos
		this.setState({
			todos: todo
		})
	}

	/* Task 3.2: Create Todo Method and todo as input parameter */
	addTodo = (todo) => {
		todo.id = Math.random();
		let todos = [...this.state.todos, todo]
		this.setState({
			todos: todos
		})
	}
	/* Task 3: Ends */
	render() {
		return (
			<div className="todo-app container">
				<h1 className="center blue-text">A Simple Todo list</h1>
				<Todos />
				{/* Task 1.2: Add the Todos Component and pass the props (todos array) into the Todos component */}

				{/* <Todos todos={this.state.todos} /> */}

				{/* Task 1.2: End */}

				{/* Task 2.1: Pass the deleteTodo method to the Todos Component */}

				{/* <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} /> */}

				{/* Task 2.1: End */}

				{/* Task 3.1: Pass the addTodo prop method to the AddForm Component */}

				{/* <AddForm addTodo={this.addTodo} /> */}

				{/* Task 3.1: End */}
			</div>
		)
	}
}
