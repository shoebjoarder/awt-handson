import React from 'react'

/* Speciy the Prop objects in Functional Components */
export default function Todos({todos, deleteTodo}) {
	const todoList = todos.length ? (
		todos.map(todo =>{
			return (
				<div className="collection-item" key={todo.id}>
					{/* Calls the anonymous arrow function */}
					<span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
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
