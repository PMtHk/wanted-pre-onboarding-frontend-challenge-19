import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "px-6 py-2 border rounded-md border-white text-white hover:bg-white hover:text-black",
        className
      )}
    >
      {children}
    </button>
  );
};
