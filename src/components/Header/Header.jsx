import React from "react";

export default function Header({ setTodos }) {
  // 전체선택
  const onAllClick = () => {
    setTodos((todos) => {
      const isEvery = todos.every((prev) => prev.status === "completed");
      return todos.map((todo) => ({
        ...todo,
        status: isEvery ? "active" : "completed",
      }));
    });
    // prev => prev.map(item=>({id:1, test:"test",status:"completed", status:"3"}))
  };

  // 삭제
  const onDeleteAll = () => {
    setTodos([]);
  };

  // 체크삭제
  const onDeleteChecked = () => {
    setTodos((prev) => prev.filter((item) => item.status !== "completed"));
  };

  return (
    <header>
      <button type="button" onClick={onAllClick}>
        all
      </button>
      <button type="button" onClick={onDeleteAll}>
        전체삭제
      </button>
      <button type="button" onClick={onDeleteChecked}>
        checked delete
      </button>
      {/* {filters.map((value, index) => (<li key={index}>
				<button onClick={() => onFilterChange(value)}>{value}</button>
			</li>))} */}
    </header>
  );
}
