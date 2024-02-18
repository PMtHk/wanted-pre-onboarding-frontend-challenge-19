import useTodoStore from "../../hooks/useTodoStore";
import { TodoAdd } from "../todo/TodoAdd";
import { TodoContainer } from "../todo/TodoContainer";

export const TodoList = () => {
  const { todos } = useTodoStore();

  return (
    <div className="max-w-[360px] flex flex-col p-2 text-left gap-6">
      <TodoAdd />
      <ul className="flex flex-col gap-4">
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoContainer todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};
