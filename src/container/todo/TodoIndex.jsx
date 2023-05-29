import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import TodoList from "../../components/TodoList/TodoList";
import { useSearchParams } from "react-router-dom";
import TodoSwiper from "../../components/TodoSwiper/TodoSwiper";

function TodoIndex() {
  // let [searchParams] = useSearchParams();
  // const todoIds = searchParams.get("id");

  const [todos, setTodos] = useState([]); // 상태관리
  // useEffect(() => {
  //   setTodos(
  //     todoIds?.split("::")?.map((item, index) => ({
  //       id: `${item}_${index}`,
  //       text: item,
  //       status: "active",
  //     }))
  //   );
  // }, [searchParams, todoIds]);

  return (
    <div>
      <TodoSwiper/>
      <Header setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default TodoIndex;
