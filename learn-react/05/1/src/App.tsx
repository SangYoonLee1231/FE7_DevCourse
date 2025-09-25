import { useState } from "react";
import Button from "./components/Button";

// 반복 렌더링
function App() {
  const [items, setItems] = useState<string[]>(["Apple", "Banana", "Cherry"]);
  const handleItemAdd = () => {
    setItems((items) => [...items, "New Item"]);
    event.target.style.color = "red"; // PointerEvent (암묵적 이벤트 객첸)
  };
  return (
    <>
      <ul>
        {items.map((item) => (
          <div>
            <li key={item}>{item}</li>
            <input key={item} placeholder={item} style={{ display: "block" }} />
          </div>
        ))}
      </ul>
      <button onClick={handleItemAdd}>추가</button>
      <Button handleClick={handleItemAdd}>추가</Button>
    </>
  );
}

export default App;
