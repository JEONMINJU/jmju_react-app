import React, { useState } from "react";
import AddTodo from "./AddTodo";

export default function TodoList() {
	const [todos, setTodos] = useState([
		{id: '1', text:'running', status: 'active'},
		{id: '2', text:'study', status: 'active'},
	]);
	// const handleAdd = (todo) => {
	// 	// 새로운 투두 업데이트 하기
	// 	 console.log("todo", todo)
	// }

	const handleAdd = (todo) => setTodos([...todos, todo]); // 기존의 todos 배열에 todo 추가
	return (
		<section>
			<ul>
					{todos.map((item) => (
						<li key={item.id}>
							{item.text} 
						</li>
					))}
			</ul>

			{/* todo가 추가되면 알려주기(콜백함수 prop으로 전달) */}
			<AddTodo onAdd={handleAdd}/>
		</section>
	);
}