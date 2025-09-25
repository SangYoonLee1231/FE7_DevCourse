import { useContext } from "react";
import { CounterContext } from "../contexts/counter/counterContext";

// useContext(컨텍스트객체)
export default function CountDisplay() {
  const { count } = useContext(CounterContext);
  return (
    <>
      <h1>Count: {count}</h1>
    </>
  );
}
