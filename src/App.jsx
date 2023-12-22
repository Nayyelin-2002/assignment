import { useEffect, useState } from "react";

function App() {
  let [id, setId] = useState([]);
  let [error, setError] = useState(false);
  let [todo, setTodo] = useState([]);
  let getdata = async (e) => {
    e.preventDefault();
    if (id < 1) {
      setError(true);
      setId("");
      setTodo("");
      return;
    }
    let respone = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    let data = await respone.json();
    setError(false);
    setTodo(data);
    setId("");
  };
  return (
    <section>
      <form onSubmit={getdata}>
        <input
          type="number"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <button type="submit">Click</button>
      </form>
      <div>
        {error && <h1>Please enter a valid id (1 , 2 , 3 , 4 etc ...)</h1>}

        {todo && (
          <div>
            <h1>title : {todo.title}</h1>
            <h3>id : {todo.id}</h3>
            <h3>userId : {todo.userId}</h3>
            <h1>Completed : {todo.completed ? <p>Done</p> : <p>Not yet</p>}</h1>
          </div>
        )}
      </div>
    </section>
  );
}

export default App;
