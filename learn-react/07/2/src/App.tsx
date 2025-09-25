// const [상태변수, 액션(리듀서)발생함수] =  useReducer(리듀서함수, 초깃값)
import Count from "./components/Count";
import Form from "./components/Form";

export default function App() {
  return (
    <>
      <Count />
      <Form />
    </>
  );
}
