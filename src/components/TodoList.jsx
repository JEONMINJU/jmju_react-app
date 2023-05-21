import React, { useState } from "react";

export default function TodoList() {
	const [todos, setTodos] = useState([
		{id: '1', text:'running', status: 'active'},
		{id: '2', text:'study', status: 'active'},
	]);
	return (
		<section>
			<ul>
					{todos.map((item) => (
						<li key={item.id}>
							{item.text} 
						</li>
					))}
			</ul>
		</section>
	);
}