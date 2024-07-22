import { useState } from "react";
import { cn } from "../../../utils";
import apiService from "../../../services/api.service";

const CommnetDialog = ({ id, onCommentAdded }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleClick = async () => {
    await apiService.addReview(id, name, comment);
    onCommentAdded();
  }

  return (
    <div className="my-5 border-t border-slate-700 pt-3 md:pt-5">
      <input
        className={cn(
          "w-full h-10 lg:h-12",
          "rounded-md",
          "px-2 py-1",
          "bg-transparent",
          "border border-white focus:border-red-400",
          "text-white",
          "focus:outline-none active:outline-none",
          "placeholder:text-white"
        )}
        placeholder="Write your name here..."
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        className={cn(
          "w-full h-24 lg:h-32",
          "rounded-md",
          "px-3 py-2 mt-2 lg:mt-3",
          "bg-transparent",
          "border border-white focus:border-red-400",
          "text-white",
          "focus:outline-none active:outline-none",
          "placeholder:text-white"
        )}
        placeholder="Write your comment here..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <button
        className={cn(
          "w-fit",
          "text-white hover:text-red-400",
          "border border-white hover:border-red-400",
          "px-5 py-2",
          "rounded-md",
          "mt-2",
          "transition duration-500"
        )}
        onClick={handleClick}
      >
        Comment
      </button>
    </div>
  );
};

export default CommnetDialog;