import TodoList from "./components/TodoList";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTask from "./modals/CreateTask";

function App() {
  return (
    <div className="App">
      <TodoList />
      <CreateTask />
    </div>
  );
}

export default App;
