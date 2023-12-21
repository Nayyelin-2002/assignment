import { useEffect, useState } from "react";

function App() {
  let [todos, setTodos] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let response = await fetch("https://jsonplaceholder.typicode.com/todos/");
      let data = await response.json();
      setTodos(data);
      console.log(data);
    }
    fetchData();
  }, []);
  return (
    <section>
      <table>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>completed</th>
        </tr>
        {todos.map((todo) => (
          <tr>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            {todo.completed ? <p>Completed</p> : <p>Not completed</p>}
          </tr>
        ))}
      </table>
    </section>
  );
}

export default App;
