import React, { useState } from "react";
import AddTodo from "../AddTodo";
import Todo from "../Todo/Todo";

export default function TodoList({todos,setTodos}) {
	const handleAdd = (todo) => setTodos(prev=>[...prev, todo]); // 기존의 todos 배열에 todo 추가
	// const handleAdd = (todo) => setTodos((prev)=>prev.concat(todo));
	return (
		<section>
			<ul>
					{todos.map((item) => (
						<Todo 
							key={item.id} 
							todo={item}
							setTodos={setTodos}
						/>
					))}
			</ul>

			{/* todo가 추가되면 알려주기(콜백함수 prop으로 전달) */}
			<AddTodo onAdd={handleAdd}/>
		</section>
	);
}