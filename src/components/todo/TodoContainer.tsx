import useTodoStore from "../../hooks/useTodoStore";
import { TODO } from "../../store/slices/todoSlice";
import { Button } from "../button/Button"; // Fix the casing of the import statement

interface TodoContainerProps {
  todo: TODO;
}

export const TodoContainer = ({ todo }: TodoContainerProps) => {
  const { id, content } = todo;

  const { removeTodoAction } = useTodoStore();

  const handleDelete = () => {
    removeTodoAction(id);
  };

  return (
    <div className="px-6 py-4 border border-white text-white rounded-md flex ">
      <p className="flex-1 text-left">{content}</p>
      <Button onClick={handleDelete}>Delete</Button>
    </div>
  );
};
