import React from 'react';
import {FaTrashAlt} from 'react-icons/fa';

export default function Todo({ todo, onUpdate, onDelete }) {
	return (
		<li>
			<form>
				<input 
					type="checkbox"
					id='checkbox'
					checked={todo.status === 'completed'}
				/>
				<label>{todo.text}</label>
			</form>

			<button type='button'><FaTrashAlt/></button>
		</li>
	)
}