import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../store/slice/counterSlice";
import { setIsDark, setIsLight } from "../store/slice/configureSlice";

export default function CountButtons() {
  console.log("CountButtons Rendering");
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <button onClick={() => dispatch(decrement())}>감소</button>
      <button onClick={() => dispatch(reset())}>리셋</button>
      <button onClick={() => dispatch(increment())}>증가</button>
      <button
        onClick={() =>
          dispatch({
            type: "counterSlice/incrementByAmount",
            payload: { amount: 20 },
          })
        }
      >
        증가(+20)
      </button>
      <button onClick={() => dispatch(incrementByAmount({ amount: 20 }))}>
        증가(+20)
      </button>
      <br />
      <br />
      <button onClick={() => dispatch(setIsLight())}>라이트모드</button>
      <button onClick={() => dispatch(setIsDark())}>다크모드</button>
    </>
  );
}
