import { createRoot } from "react-dom/client";
import MainView from ".components/main-view/main-view";
import { addTodo, toggleTodo } from "./actions";
import "./index.scss";

import { createStore } from "redux";
import todos from "./reducers";

const store = createStore(todos);

console.log("Initial State", store.getState());

store.dispatch(addTodo("Dispatch my first action"));
console.log("State after adding first todo", store.getState());
store.dispatch(addTodo("Take a 2 hour rest"));
console.log("State after adding second todo", store.getState());
store.dispatch(addTodo("Resume learning about Redux"));
console.log("State after adding third todo", store.getState());
store.dispatch(toggleTodo(0));
console.log("State after toggling first todo", store.getState());

function App() {
  return <MainView />;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
rootElement.render(<App />);
