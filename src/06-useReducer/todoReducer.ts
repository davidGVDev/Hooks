export const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((todo) => todo.id !== action.payload);
    case "toggle":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
    default:
      return state;
  }
};
