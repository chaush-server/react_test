import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));

    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}&completed=true`)
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error(error));
  }, [userId]);

  return (
    <div>
      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <h3>Completed Todos:</h3>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
