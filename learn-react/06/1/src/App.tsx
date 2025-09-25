import { useState } from "react";

function App() {
  const [user, setUser] = useState({ name: "mike", age: 30 });
  const handleUpdate = () => {
    // setUser({
    //   name: "Lee",
    //   age: 30
    // })
    setUser((user) => ({ ...user, age: 40 }));
  };
  return (
    <div>
      <h1>Name: {user.name}</h1>
      <h1>Age: {user.age}</h1>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default App;
