// 타입 오퍼레이터
// 1 유니언 타입 (Union Types) -> |
// 2. 인터섹션 타입 (Intersection Types) -> &

const user: { name: string } & { age: number } = {
  name: "Alice",
  age: 30,
};

const user2: { name: string; age: number } = {
  name: "Bob",
  age: 25,
};

// 타입 가드 (type guards)
// 런타임에 실제 검사 결과를 바탕으로 타입을 조금 더 좁게 추론하도록
// 타입스크립트에 힌트를 주는 방법

const arr1: (string | number)[] = ["Hello", 42, "TypeScript", 100];
const first = arr1[0];

if (typeof first === "string") {
  console.log(first.toUpperCase());
}

// 타입 추론은 실행 컨텍스트 내부에서만 이루어진다.

// 매개변수가 콜백함수인 경우
function printValue(callback: (msg: string) => void) {
  const message = "Hello, TypeScript!";
  callback(message);
}

printValue((msg: string) => {
  console.log(msg);
});

function createMultiplier(factor: number): (num: number) => number {
  return (num) => num * factor;
}

const double = createMultiplier(2);
console.log(double(5)); // 10

const createMultiplier2 = (factor: number): ((num: number) => number) => {
  return (num) => num * factor;
};

function sumAll(...numArray: number[]): number {
  return numArray.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumAll(1, 2, 3, 4, 5)); // 15

//

// 함수 오버리딩
// 오버로드 시그니처를 활용해서 매개변수와 반환값의 경우의 수를 좁히는 방법
function sum(a: string, b: number): string;
function sum(a: number, b: string): string;
function sum(a: number, b: number): number;
function sum(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else return `${a}${b}`;
}
