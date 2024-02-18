import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../store/slices/todoSlice";
import { store } from "../store";

const useTodoStore = () => {
  const dispatch = useDispatch();

  const todos = useSelector(
    (state: ReturnType<typeof store.getState>) => state.todo.todos
  );

  const addTodoAction = (content: string) => {
    dispatch(addTodo(content));
  };

  const removeTodoAction = (id: string) => {
    dispatch(removeTodo(id));
  };

  return { todos, addTodoAction, removeTodoAction };
};

export default useTodoStore;
