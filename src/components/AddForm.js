import React, { Component } from 'react'

/* Automatically gets Prop objects in Class Components */
export default class AddForm extends Component {
	state = {
		task: ''
	}

	/* Task 3.4: Create a handleChange method with event parameter "e" and set state property "task", to the event parameters target value */
	handleChange = (e) => {
		this.setState({
			task: e.target.value
		});
	}
	/* Task 3.4: End */

	/* The handleSubmit method takes the event parameter and called the Synthetic event handler to avoid the post method of the form's onSubmit */
	handleSubmit = (e) => {
		e.preventDefault();
		/* Task 3.5: START // The prop method is called and passed the local state value to the App component */
		this.props.addTodo(this.state);
		/* Task 3.5: END // After passing the local state value, the state is set to empty string */
		this.setState({
			task: ''
		})
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>Add new todo:</label>

					{/* Task 3.3: Create an onChange event handler and pass the method handleChange */}

					<input 
						type="text" 
						onChange={this.handleChange} 
						value={this.state.task} 
					/>

					{/* Task 3.3: End */}
				</form>
			</div>
		)
	}
}
