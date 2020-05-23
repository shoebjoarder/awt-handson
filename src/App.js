import React, { Component } from 'react'

// Import the Todos Component
import Todos from './components/Todos'
import AddForm from './components/AddForm'

export default class App extends Component {
	/* Task 1.1: Create Constructor, add super(props) inside and create a state property todos array of atleast 4 elements with "id" and "task" as element's properties. id should be of type int and "task" should be of type string*/
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{ id: 1, task: "Do the AWT Bootstrap & MongoDB Homework by 20th of May" },
				{ id: 2, task: "Finish the final draft of the presentation" },
				{ id: 3, task: "Finish the recordings of the presentation" },
				{ id: 4, task: "Prepare the hands-on session codes" },
			]
		}
	}
	/* Task 1: END */

	/* Task 2.1: Create a deleteTodo method using arrow function to pass a parameter "id" */
	deleteTodo = (id) => {
	/* Task 2.1: END */
		const filteredTodo = this.state.todos.filter(todo => {
			return todo.id !== id
		});
		/* Task 2.2: Set state method to assign the const variable "filterTodo" to todos */
		this.setState({
			todos: filteredTodo
		})
		/* Task 2.2: END */
	}

	/* Task 3.1: Create Todo Method and todo as input parameter, assign the todo variable with Math.random() function, use the spread operator to inject the new todo inside a new list called newListTodos, set the state property todos with the newListTodos */
	addTodo = (newTodo) => {
		newTodo.id = Math.random();
		let newListTodos = [...this.state.todos, newTodo]
		this.setState({
			todos: newListTodos
		})
	}
	/* Task 3.1: Ends */

	render() {
		return (
			<div className="todo-app container">
				<h1 className="center blue-text">A Simple Todo list</h1>
				{/* <Todos /> */}
				{/* Task 1.2: Add the Todos Component and pass the props (todos array) into the Todos component */}

				{/* <Todos todos={this.state.todos} /> */}

				{/* Task 1.2: End */}

				{/* Task 2.3: Pass the deleteTodo method to the Todos Component */}

				<Todos todoProp={this.state.todos} deleteTodoFunc={this.deleteTodo} />

				{/* Task 2.3: End */}

				{/* Task 3.2: Pass the addTodo prop method to the AddForm Component */}

				<AddForm addTodo={this.addTodo} />
				
				{/* Task 3.2: End */}
			</div>
		)
	}
}

