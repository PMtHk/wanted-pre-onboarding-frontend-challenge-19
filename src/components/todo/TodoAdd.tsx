import { useState } from "react";
import useTodoStore from "../../hooks/useTodoStore";
import { Button } from "../button/Button";

export const TodoAdd = () => {
  const { addTodoAction } = useTodoStore();

  const [input, setInput] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    if (input === "") return;
    addTodoAction(input);
    setInput("");
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="w-full flex justify-between">
      <input
        type="text"
        value={input}
        onChange={handleInput}
        onKeyDown={handleEnter}
        placeholder="input"
        className="border border-white rounded-md px-6 py-2 bg-black text-white placeholder:text-white"
      />
      <Button onClick={handleAdd}>Add</Button>
    </div>
  );
};
