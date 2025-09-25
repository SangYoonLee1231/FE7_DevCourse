import Input from "./components/Input";
import Button from "./components/Button";
import CheckBox from "./components/CheckBox";

function App() {
  return (
    <>
      <Button type="button" disabled>
        Add
      </Button>
      <Button className="bg-[#ed4848]">Cancel</Button>
      <Input type="text" placeholder="이름을 입력해주세요" />
      <CheckBox>
        <span>
          I agree with <strong>terms</strong> and <strong>policies</strong>.
        </span>
      </CheckBox>
    </>
  );
}

export default App;

// 버튼, 인풋, 체크박스
