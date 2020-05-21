import React, { Component } from 'react'

/* Automatically gets Prop objects in Class Components */
export default class AddForm extends Component {
	state = {
		content: ''
	}
	// Task: Create a handle change
	handleChange = (e) => {
		this.setState({
			content: e.target.value
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		// Task Use the prop method to pass the argument
		this.props.addTodo(this.state);
		this.setState({
			content: ''
		})
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>Add new todo:</label>
					<input type="text" onChange={this.handleChange} value={this.state.content}/>
				</form>
			</div>
		)
	}
}
