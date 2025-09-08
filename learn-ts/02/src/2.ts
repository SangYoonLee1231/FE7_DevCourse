// 함수에 타입을 지정하는 방법
// 함수에 매개 변수와 반환값에 타입을 지정

function sum(n1: number, n2: number): number {
  return n1 + n2;
}

sum(10, 20);

function concat(str1: string, str2: string): string {
  return str1 + str2;
}

concat("Hello, ", "TypeScript!");

function printValue(value: string): void {
  console.log(value);
}

function throwError(message: string): never {
  throw new Error(message);
}

// void와 never은 특수한 타입
