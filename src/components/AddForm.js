import React, { Component } from 'react'

/* Automatically gets Prop objects in Class Components */
export default class AddForm extends Component {
	state = {
		task: ''
	}

	/* Task 3.4: Create a handle change */
	handleChange = (e) => {
		this.setState({
			task: e.target.value
		});
	}
	/* Task 3.4: End */

	handleSubmit = (e) => {
		e.preventDefault();
		// Task Use the prop method to pass the argument
		this.props.addTodo(this.state);
		this.setState({
			task: ''
		})
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>Add new todo:</label>

					{/* Task 3.3: Input type text and call onChange event handler */}
					
					<input type="text" onChange={this.handleChange} value={this.state.task}/>
					
					{/* Task 3.3: End */}
				</form>
			</div>
		)
	}
}
