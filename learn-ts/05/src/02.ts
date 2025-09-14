// 제네릭
// 타입을 미리 지정하지 않고, 사용하는 시점에 타입을 정의해서 쓸 수 있는 문법

function getFirstElements(
  arr: number[] | string[]
): number | string | undefined {
  return arr[0];
}

function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

console.log(getFirstElements([1, 2, 3])); // 1
console.log(getFirstElements(["a", "b", "c"])); // "a"
console.log(getFirstElements([])); // undefined
// console.log(getFirstElement([true, false])); // 오류

console.log(getFirstElement<number>([1, 2, 3])); // 1
console.log(getFirstElement<string>(["a", "b", "c"])); // "a"
console.log(getFirstElement<boolean>([true, false])); // true
console.log(getFirstElement<number>([])); // undefined

// T = Type
// K = Key
// V = Value
// E = Element
// U = Another type

//

// 타입 제약
// 제네릭의 타입을 제한하는 문법
// T extends 제한할 타입
function sumArray<T extends number>(arr: T[]): number {
  return arr.reduce((acc, cur) => acc + cur, 0);
}
console.log(sumArray([1, 2, 3, 4])); // 10

class Box<T> {
  private items: T[] = [];
  add(item: T) {
    this.items.push(item);
  }
  getAll(): T[] {
    return this.items;
  }
}

const stringBox = new Box<string>();
stringBox.add("Hello");
stringBox.add("TypeScript");
console.log(stringBox.getAll()); // ["Hello", "TypeScript"]
