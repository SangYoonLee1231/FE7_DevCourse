type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  type: "text" | "password" | "email" | "number" | "date";
}; // Omit: 특정 속성을 제외하고 타입을 정의할 때 사용
// "input" 요소의 모든 속성을 가져오되, "type" 속성은 제외하고, 그 대신 우리가 원하는 타입들로 제한된 "type" 속성을 추가

function Input(props: InputProps) {
  const { ...rest } = props;
  return (
    <>
      <input
        className="inter w-60 h-11 rounded-lg placeholder:text-[#acacac] bg-white border border-[#4f4f4f]"
        {...rest}
      />
    </>
  );
}

export default Input;
