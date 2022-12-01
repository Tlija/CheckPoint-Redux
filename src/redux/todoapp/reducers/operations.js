import { ADD_TODO, DELETE_ALL, FILTER_TODO, REMOVE_TODO, UPDATE_TODO } from "../action";
const initialState ={list: [
  { id: 1, todo: "Buy Laptop", completed: false },
  { id: 2, todo: "Master Redux", completed: false },
  { id: 3, todo: "Watering Plants", completed: true },
],filterTodo:'all'};

export const operationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {...state,list:[...state.list, action.payload]};
    case DELETE_ALL:
      return {...state,list:[]};
    case REMOVE_TODO:
      const filterredTodos = state.list.filter((todo) => todo.id !== action.payload);
      return {...state,list:filterredTodos};

    case UPDATE_TODO:
      let data = action.payload;

      const updateArray = [];
      state.list.map((item) => {
        if (item.id === data.id) {
          item.id = data.id;
          item.todo = data.todo;
          item.completed = data.completed;
        }
        updateArray.push(item);
      });
      return {...state,list:updateArray};
      case FILTER_TODO:
        return{...state,filterTodo:action.payload}


    default:
      return state;
  }
};
