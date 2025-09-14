// 타입스크립트 클래스

class User {
  readonly name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  greet(): string {
    return `Hello, my name is ${this.name}`;
  }
}
const person = new User("Alice", 30);
// person.name = "Bob"; // 오류: name은 readonly 속성입니다.
console.log(person.greet());
