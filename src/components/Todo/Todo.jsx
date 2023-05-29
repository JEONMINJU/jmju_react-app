import React from 'react';
import {FaTrashAlt} from 'react-icons/fa';
import { useState } from 'react';

export default function Todo({ todo,setTodos }) {
	const [isEdit,setIsEdit] = useState(false)
	const { text, status, id } = todo;

	const handleChange = (e) => {
		const status = e.target.checked ? 'completed' : 'active';
		setTodos(prev=>prev.map(item=>item.id === id ? {...item,status} : item))
	};

	const handleDelete = () => {
		setTodos(prev=>prev.filter(item=>item.id !== id))
	};

const handleEdit =()=>{
	setIsEdit(prev=>!prev)
}
const handleTextChange=(e)=>{
	const value = e.target.value;
	
   setTodos(prev => {
    return prev.map(item=>{
			if(item.id ===id){
				return {...item,text:value}
			}else{
				return item
			}
		})
	 })
}

	return (
		<li>
			<form>
				{isEdit ? <>
				<input 
					type="text"
					id='text'
					value={text}
					onChange={handleTextChange}
				/>
				</>:
				<>
				<input 
					type="checkbox"
					id='checkbox'
					checked={status === 'completed'}
					onChange={handleChange}
				/>
				<label htmlFor='checkbox'>{text}</label>
				</>}
				
			</form>
			<button type='button' onClick={handleEdit}>{isEdit?'확인':'수정'}</button>
			<button type='button' onClick={handleDelete}><FaTrashAlt/></button>
		</li>
	)
}