// 타입 추론
// 타입을 명시하지 않아도 컴파일러가 흐름을 보고 적절한 타입을 자동으로 결정하는 기능

// 기본 자료형 -> 타입 추론
// 참조 자료형 -> 타입 명시

let str = "Hello, TypeScript!";
const str2 = "Hello, TypeScript!";
let num = 10;

let obj = {
  userId: 1,
  id: 1,
  title: "delectus aut autem",
};
let func = function () {};

{
  const obj = {};
  fetch("")
    .then((res) => res.json())
    .then((json: { userId: number; id: number; title: string }) => {
      console.log(json);
      console.log(json.title);
    });
}
