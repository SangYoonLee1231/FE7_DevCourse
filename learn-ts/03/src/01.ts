// 구조적 타이핑
// 타입의 이름이나 선언이 아니라, 내부의 구조가 같으면 같은 타입으로 간주하는 것

const point: { x: number; y: number } = { x: 1, y: 2 };
const position: { x: number; y: number } = point; // 구조적 타이핑으로 인해 오류 없음

// readonly 속성
const user: {
  readonly id: number;
  name: string;
} = {
  id: 1,
  name: "Alice",
};

// user.id = 2; // 오류: 'id'는 readonly이므로 수정할 수 없음
user.name = "Bob"; // 정상: 'name'은 수정 가능

//

// 인덱스 시그니처
// 객체의 키와 값의 타입을 동적으로 지정하는 방법
const scores: { [key: string]: number } = {
  Alice: 90,
  Bob: 85,
};

// 타입 별칭
type Person = {
  name: string;
  age: number;
  gender: string;
};

const user1: Person = {
  name: "kim",
  age: 20,
  gender: "male",
};

// 기본 타입 별칭
type ID = string;
const userId: ID = "user_123";
const productId: ID = "prod_456";
// const invalidId: ID = 789; // 오류: 'number' 타입은 'string' 타입에 할당할 수 없음

// 타입 확장
// 유니온 타입, 인터섹션 타입
type StringID = string;
type NumberID = number;
type UserID = StringID | NumberID; // 유니온 타입
const id1: UserID = "user_123";
const id2: UserID = 456;
// const invalidId2: UserID = true; // 오류: 'boolean' 타입은 'string | number' 타입에 할당할 수 없음

// 리터럴 타입 별칭
type Direction = "up" | "down" | "left" | "right";
const move: Direction = "up";
