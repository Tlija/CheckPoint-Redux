import React from "react";
import { useDispatch } from "react-redux";
import { filterTodo } from "../redux/todoapp/action";

export const FilterTodo = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        type="submit"
        className="btn btn-secondary btn-md"
        onClick={() => dispatch(filterTodo("all"))}
      >
        ALL
      </button>
      <button
        type="submit"
        className="btn btn-secondary btn-md"
        style={{}}
        onClick={() => dispatch(filterTodo("completed"))}
      >
        completed
      </button>
      <button
        type="submit"
        className="btn btn-secondary btn-md"
        style={{}}
        onClick={() => dispatch(filterTodo("Notcompleted"))}
      >
        Notcompleted
      </button>
    </div>
  );
};
