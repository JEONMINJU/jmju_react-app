import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

function App() {
	const [todos, setTodos] = useState([]);
  console.log(todos)
	return(
		<div>
			<Header todos={todos} setTodos={setTodos}/>
			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	)
}

export default App;