// ### 1. **숫자 배열의 첫 번째 값 구하기**

// ### 문제:

// 다음은 숫자 배열에서 첫 번째 값을 구하는 함수입니다. 제네릭을 활용하여 숫자뿐만 아니라 다른 타입의 배열에서도 첫 번째 값을 구할 수 있도록 개선해보세요.

// ### 기존 코드:

// ```tsx
// function getFirst(arr: number[]): number {
//   return arr[0];
// }

// console.log(getFirst([1, 2, 3])); // 1
// ```

function getFirst<T>(arr: readonly T[]): T | undefined {
  return arr[0];
}

// 사용 예시
console.log(getFirst([1, 2, 3])); // 1
console.log(getFirst(["a", "b", "c"])); // "a"
console.log(getFirst<boolean>([])); // undefined

// ### 요구 사항:

// - 배열의 타입에 관계없이 첫 번째 값을 구할 수 있도록 제네릭을 사용하세요.

// ---

// ### 2. **배열의 길이 구하기**

// ### 문제:

// 배열의 길이를 반환하는 함수입니다. 제네릭을 사용하여 다양한 타입의 배열에 대해 동작하도록 수정하세요.

// ### 기존 코드:

// ```tsx
// function getLength(arr: number[]): number {
//   return arr.length;
// }

// console.log(getLength([1, 2, 3])); // 3
// ```

function getLength<T>(arr: readonly T[]): number {
  return arr.length;
}

// 사용 예시
console.log(getLength([1, 2, 3])); // 3
console.log(getLength(["a", "b"])); // 2
console.log(getLength([{ x: 1 }, { x: 2 }])); // 2

// ### 요구 사항:

// - 배열의 타입에 관계없이 배열의 길이를 구할 수 있도록 제네릭을 사용하세요.

// ---

// ### 3. **배열에서 마지막 값 구하기**

// ### 문제:

// 배열에서 마지막 값을 반환하는 함수입니다. 제네릭을 사용하여 모든 타입의 배열에서도 마지막 값을 구할 수 있도록 개선하세요.

// ### 기존 코드:

// ```tsx
// function getLast(arr: number[]): number {
//   return arr[arr.length - 1];
// }

// console.log(getLast([1, 2, 3])); // 3
// ```

function getLast<T>(arr: readonly T[]): T | undefined {
  if (arr.length === 0) return undefined;
  return arr[arr.length - 1];
}

// 사용 예시
console.log(getLast([1, 2, 3])); // 3
console.log(getLast<string>([])); // undefined

// ### 요구 사항:

// - 배열의 타입에 관계없이 마지막 값을 구할 수 있도록 제네릭을 사용하세요.

// ---

// ### 4. **두 값을 더하는 함수**

// ### 문제:

// 두 값을 더하는 함수입니다. 제네릭을 사용하여 숫자뿐만 아니라 다른 타입의 값을 더할 수 있도록 개선하세요.

// ### 기존 코드:

// ```tsx
// function add(a: number, b: number): number {
//   return a + b;
// }

// console.log(add(2, 3)); // 5
// ```

function addBy<T>(a: T, b: T, combiner: (x: T, y: T) => T): T {
  return combiner(a, b);
}

// 사용 예시
console.log(addBy({ x: 1 }, { x: 2 }, (p, q) => ({ x: p.x + q.x }))); // { x: 3 }

// ### 요구 사항:

// - 숫자뿐만 아니라 다른 타입에 대해서도 더할 수 있도록 제네릭을 사용하세요.

// ---

// ### 5. **객체에서 특정 키의 값 구하기**

// ### 문제:

// 객체에서 특정 키의 값을 반환하는 함수입니다. 제네릭을 사용하여 다양한 객체에 대해 특정 키의 값을 안전하게 구할 수 있도록 개선하세요.

// ### 기존 코드:

// ```tsx
// function getValue(obj: { name: string }, key: string): string {
//   return obj.name;
// }

// console.log(getValue({ name: "Alice" }, "name")); // "Alice"
// ```

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// 사용 예시
console.log(getValue({ name: "Alice", age: 25 }, "name")); // "Alice"
console.log(getValue({ name: "Alice", age: 25 }, "age")); // 25

// ### 요구 사항:

// - 객체의 타입에 맞게 동작하도록 제네릭을 사용하세요.

// ---

// ### 6. **두 값을 비교하는 함수**

// ### 문제:

// 두 값을 비교하여 같은 값이면 `true`, 아니면 `false`를 반환하는 함수입니다. 제네릭을 사용하여 다양한 타입에 대해 동작할 수 있도록 개선하세요.

// ### 기존 코드:

// ```tsx
// function isEqual(a: number, b: number): boolean {
//   return a === b;
// }

// console.log(isEqual(2, 2)); // true
// ```

function isEqual<T>(a: T, b: T): boolean {
  return a === b; // 참조 타입은 '참조 일치' 기준
}

// 사용 예시
console.log(isEqual(2, 2)); // true
console.log(isEqual("a", "b")); // false
console.log(isEqual({ x: 1 }, { x: 1 })); // false (다른 객체 참조)
const same = { x: 1 };
console.log(isEqual(same, same)); // true

// ### 요구 사항:

// - 제네릭을 사용하여 다른 타입의 값들에 대해서도 비교할 수 있도록 하세요.

// ---

// ### 7. **배열의 모든 값을 제곱하는 함수**

// ### 문제:

// 배열의 모든 값을 제곱하는 함수입니다. 제네릭을 사용하여 숫자뿐만 아니라 다양한 타입의 배열에 대해 제곱할 수 있도록 개선하세요.

// ### 기존 코드:

// ```tsx
// function square(arr: number[]): number[] {
//   return arr.map(num => num * num);
// }

// console.log(square([1, 2, 3])); // [1, 4, 9]
// ```

function squareBy<T>(
  arr: readonly T[],
  toNumber: (x: T) => number,
  fromNumber: (n: number, original: T) => T
): T[] {
  return arr.map((item) => fromNumber(toNumber(item) ** 2, item));
}

// 사용 예시: 문자열 숫자 배열을 제곱한 문자열로
console.log(
  squareBy(
    ["2", "3"],
    (s) => Number(s),
    (n) => String(n)
  )
); // ["4", "9"]

// ### 요구 사항:

// - 숫자뿐만 아니라 다른 타입의 배열에도 동작할 수 있도록 제네릭을 사용하세요.

// ---

// ### 8. **배열의 첫 번째와 마지막 값을 반환하는 함수**

// ### 문제:

// 배열에서 첫 번째와 마지막 값을 반환하는 함수입니다. 제네릭을 사용하여 모든 타입의 배열에서 첫 번째와 마지막 값을 구할 수 있도록 개선하세요.

// ### 기존 코드:

// ```tsx
// function getFirstAndLast(arr: number[]): number[] {
//   return [arr[0], arr[arr.length - 1]];
// }

// console.log(getFirstAndLast([1, 2, 3])); // [1, 3]
// ```

function getFirstAndLast<T>(arr: readonly T[]): [T | undefined, T | undefined] {
  if (arr.length === 0) return [undefined, undefined];
  return [arr[0], arr[arr.length - 1]];
}

// 사용 예시
console.log(getFirstAndLast([1, 2, 3])); // [1, 3]
console.log(getFirstAndLast<string>([])); // [undefined, undefined]

// ### 요구 사항:

// - 제네릭을 사용하여 다양한 타입의 배열에서 첫 번째와 마지막 값을 반환하도록 개선하세요.

// ---

// ### 9. **두 개의 객체 병합 함수**

// ### 문제:

// 두 개의 객체를

// 병합하는 함수입니다. 제네릭을 사용하여 다양한 타입의 객체도 병합할 수 있도록 개선하세요.

// ### 기존 코드:

// ```tsx
// function mergeObjects(obj1: { name: string }, obj2: { age: number }) {
//   return { ...obj1, ...obj2 };
// }

// console.log(mergeObjects({ name: "Alice" }, { age: 25 })); // { name: "Alice", age: 25 }
// ```

function mergeObjects<T extends object, U extends object>(
  obj1: T,
  obj2: U
): T & U {
  return { ...obj1, ...obj2 };
}

// 사용 예시
const merged = mergeObjects({ name: "Alice" }, { age: 25 });
/* 타입: { name: string } & { age: number } */
console.log(merged); // { name: "Alice", age: 25 }

// ### 요구 사항:

// - 제네릭을 사용하여 다양한 객체를 병합할 수 있도록 개선하세요.

// ---

// ### 10. **배열에서 고유한 값을 반환하는 함수**

// ### 문제:

// 배열에서 중복을 제거하고 고유한 값만 반환하는 함수입니다. 제네릭을 사용하여 다양한 타입의 배열에 대해서도 동작하도록 개선하세요.

// ### 기존 코드:

// ```tsx
// function getUnique(arr: number[]): number[] {
//   return Array.from(new Set(arr));
// }

// console.log(getUnique([1, 2, 2, 3])); // [1, 2, 3]
// ```

function getUnique<T>(arr: readonly T[]): T[] {
  return Array.from(new Set(arr));
}

// 사용 예시
console.log(getUnique([1, 2, 2, 3])); // [1, 2, 3]
console.log(getUnique(["a", "a", "b"])); // ["a", "b"]
console.log(getUnique([{ x: 1 }, { x: 1 }])); // 서로 다른 참조이므로 원소 유지 ( [{x:1}, {x:1}] )

// ### 요구 사항:

// - 제네릭을 사용하여 다른 타입의 배열에도 동작하도록 개선하세요.

// ---
