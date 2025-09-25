import { useState } from "react";
import Count from "./components/Count";
import CountOutSide from "./components/CountOutSide";

// 상태 끌어올리기(State Lifting)
// 여러 컴포넌트가 같은 상태를 공유해야 할 때,
// 그 상태를 공통 부모 컴포넌트로 옮겨서 관리하는 패턴
export default function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => count + 1);
  };
  const reset = () => {
    setCount(0);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };
  return (
    <>
      <Count
        count={count}
        increment={increment}
        decrement={decrement}
        reset={reset}
      />
      <CountOutSide count={count} />
    </>
  );
}
