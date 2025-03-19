console.log("Hello World");

const initialState = [
  {
    id: 1,
    todo: "Recolectar la piedra del alma",
    done: false,
  },
  {
    id: 2,
    todo: "Recolectar la piedra del poder",
    done: false,
  },
];

const todoReducer = (state = initialState, action: any) => {
  if (action.type === "add") {
    return [...state, action.payload];
  }
};

const newTodo = {
  id: 3,
  todo: "Recolectar la piedra del tiempo",
  done: false,
};

let todos = todoReducer(initialState, {});

todos = todoReducer(todos, { type: "add", payload: newTodo });

console.log(todos);
