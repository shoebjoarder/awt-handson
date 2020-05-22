import React from 'react'

/* Specify the Prop objects in Functional Components */
/* This functional component will try to display the todo list defined as states in App Component */
export default function Todos({todos=0, deleteTodo}) {
	const todoList = todos.length ? (
		todos.map(todo => {
			return (
				<div className="collection-item" key={todo.id}>
					{/* <span>{todo.task}</span> */}

					{/* Task 2.4: Calls the anonymous arrow function to use deleteTodo method passing the props todo.id as the input parameter */}

					<span onClick={() => {deleteTodo(todo.id)}}>{todo.task}</span>

					{/* Task 2.4: End */}
				</div>
			)
		})
	) : (
		<p className="center">You have no todo's left! Hurray!</p>
	)
	return (
		<div class="todos collection">
				{todoList}
		</div>
	)
}
