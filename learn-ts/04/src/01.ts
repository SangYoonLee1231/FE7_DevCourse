// any - 아무 값이나 대입, 사용할 수 있어 타입 검사를 우회하는 특수한 타입
// unknown - 알 수 없는 타입, any와 비슷하지만 타입 검사를 우회하지 않음
let x: unknown = 10;
x = 10.12;

// 차라리 any 대신 unknown을 사용하자
if (typeof x === "number") {
  console.log(x.toFixed(2));
}

//

// 타입 단언
// as, <>
// 타입 단언은 컴파일러에게 "내가 이 값의 타입을 더 잘 알아"라고 알려주는 방법
// 개발자가 타입스크립트 컴파일러보다 더 잘 아는 경우에만 사용

// 시함에 나옴
(x as number).toFixed(1);
(<number>x).toFixed(1);

//

// enum
type Direction = "up" | "down" | "left" | "right";
function moveX(direction: Direction): void {
  if (direction === "up") {
    console.log("move up");
  }
  if (direction === "down") {
    console.log("move down");
  }
  if (direction === "left") {
    console.log("move left");
  }
  if (direction === "right") {
    console.log("move right");
  }
}

moveX("up");
moveX("down");
moveX("left");
moveX("right");

function vehicleMoveX(direction: Direction): void {
  if (direction === "up") {
    console.log("move up");
  }
  if (direction === "down") {
    console.log("move down");
  }
  if (direction === "left") {
    console.log("move left");
  }
  if (direction === "right") {
    console.log("move right");
  }
}

vehicleMoveX("up");
vehicleMoveX("down");
vehicleMoveX("left");
vehicleMoveX("right");

// enum: 고정된 값들의 집합을 정의하는 데 사용하는 특수한 타입

enum CharacterMoveX {
  LEFT,
  RIGHT,
}

enum RotationMoveX {
  LEFT,
  RIGHT,
}

function characterMove(direction: CharacterMoveX | RotationMoveX): void {
  if (direction === CharacterMoveX.LEFT) {
    console.log("Character move left");
  }
  if (direction === CharacterMoveX.RIGHT) {
    console.log("Character move right");
  }
}

characterMove(CharacterMoveX.LEFT);
characterMove(CharacterMoveX.RIGHT);

characterMove(RotationMoveX.LEFT);
characterMove(RotationMoveX.RIGHT);

// 숫자형 enum
enum Direction2 {
  UP,
  DOWN = 100,
  LEFT,
  RIGHT,
}

console.log(Direction2.UP); // 0
console.log(Direction2.DOWN); // 100
console.log(Direction2.LEFT); // 2
console.log(Direction2.RIGHT); // 3

// 문자열형 enum
enum StatusCode {
  OK = 200,
  NotFound = 404,
  BadRequest = 400,
  Unauthorized = 401,
}

function handleResponse(code: StatusCode) {
  switch (code) {
    case StatusCode.OK:
      console.log("Request succeeded");
      break;
    case StatusCode.NotFound:
      console.log("Resource not found");
      break;
    case StatusCode.BadRequest:
      console.log("Bad request");
      break;
    case StatusCode.Unauthorized:
      console.log("Unauthorized access");
      break;
    default:
      console.log("Unknown status code");
  }
}

handleResponse(StatusCode.OK); // "Request succeeded"
handleResponse(StatusCode.NotFound); // "Resource not found"
handleResponse(StatusCode.BadRequest); // "Bad request"
handleResponse(StatusCode.Unauthorized); // "Unauthorized access"

// 혼합형 enum
enum MixedEnum {
  No = 0,
  Yes = "YES",
}

console.log(MixedEnum.No); // 0
console.log(MixedEnum.Yes); // "YES"

// 역방향 매핑
enum Direction3 {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}
console.log(Direction3.UP); // 0
console.log(Direction3[0]); // "UP"
console.log(Direction3.DOWN); // 1
console.log(Direction3[1]); // "DOWN"
