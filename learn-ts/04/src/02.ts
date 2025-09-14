// 인덱스 접근 타입
// 객체 타입에서 특정 프로퍼티의 타입을 추출하는 문법

type Person = {
  name: string;
  age: number;
};

type NameType = Person["name"]; // 'string' 타입
type AgeType = Person["age"]; // 'number' 타입

type NameAndAge = Person["name" | "age"]; // 'string | number' 타입

//

// const 단언
// 값을 -> 리터럴
// 객체의 속성의 값을 -> readonly

let x = "hello" as const;
const numArr = [10, 20] as const;
const obj = { name: "Alice", age: 30 } as const;

console.log(x); // "hello"
console.log(numArr); // [10, 20]
console.log(obj); // { name: "Alice", age: 30 }

//

// enum Status {
//     Pending = "PENDING",
//     Success = "SUCCESS",
//     Fail = "FAIL",
// }

// const options = Object.values(Status).map((status) =>

//

const Status = {
  Pending: "PENDING",
  Success: "SUCCESS",
  Fail: "FAIL",
} as const;

type StatusType = (typeof Status)[keyof typeof Status];
console.log(Status.Success); // "SUCCESS"
