// 클래스
// 1. 타입시스템이 제공된다는 점
// 2. 접근 제한자가 지원된다는 점 (public, private, protected, readonly)
//    #private가 추가되었지만 이거랑 다른 것
// 3. 추상 클래스, 인터페이스와 결합이 가능하다는 점

class Car {
  speed: number;
  constructor(speed: number) {
    this.speed = speed;
  }
  start(name: string): string {
    return `${name}가 출발합니다.`;
  }
}

const benz = new Car(100);
console.log(benz.start("benz"));
console.log(benz.speed);

//

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  introduce(): string {
    return `Hello I'm ${this.name} and I'm ${this.age} years old.`;
  }
}

const person = new Person("Alice", 30);
console.log(person.introduce());

//

class Car2 {
  public speed: number;
  constructor(speed: number) {
    this.speed = speed;
  }
  private secret(): string {
    return "Secret code";
  }
}

const car = new Car2(100);
console.log(car.speed);
// console.log(car.secret); // secret는 private라서 접근 불가

//

class Car3 {
  private engineOn: boolean = false;
  start() {
    if (this.engineOn) {
      console.log("Engine is already on.");
    }
    this.engineOn = true;
    console.log("Engine started.");
  }
  stop() {
    if (!this.engineOn) {
      console.log("Engine is already off.");
    }
    this.engineOn = false;
    console.log("Engine stopped.");
  }
  isEngineOn(): boolean {
    return this.engineOn;
  }
}

const myCar = new Car3();
myCar.start();
myCar.start(); // 이미 시동이 걸려있다고 알려줌
myCar.stop();
console.log(myCar.isEngineOn());
myCar.stop(); // 이미 시동이 꺼져있다고 알려줌

//

class Config {
  readonly apiUrl = "https://api.example.com";
  readonly appVerson = "1.0.0";

  // constructor(apiUrl: string) {
  //   this.apiUrl = apiUrl;
  // }
  displayConfig(): void {
    console.log(`API URL: ${this.apiUrl}, App Version: ${this.appVerson}`);
  }
}

const config = new Config();
console.log(config.apiUrl);
console.log(config.appVerson);
config.displayConfig();

//

// 메소드 오버라이딩

class Benz extends Car {
  constructor(speed: number) {
    super(speed);
  }
  start(name: string): string {
    return `${name} Benz가 빠르게 출발합니다.`;
  }
}

// 추상 클래스
// 직접 인스턴스를 생성할 수 없는 클래스
// 주로 공통의 속성이나 메서드를 정의하기 위해서 사용 (직접 구현도 가능)

abstract class CarAbstract {
  abstract name: string;
  abstract speed: number;
  abstract color: string;
  abstract maxSpeed(): number;
}

class Benz2 extends CarAbstract {
  name: string;
  speed: number;
  color: string;
  constructor(name: string, speed: number, color: string) {
    super();
    this.name = name;
    this.speed = speed;
    this.color = color;
  }
  maxSpeed(): number {
    return this.speed * 2;
  }
}

const benz2 = new Benz2("benz", 100, "black");
console.log(benz2.maxSpeed());

//

type Runner = {
  name: string;
  run(): void;
};

interface Swimmer {
  swim(): void;
}

abstract class PersonAbstract {
  abstract stop(): void;
}

class Person2 extends PersonAbstract implements Runner, Swimmer {
  name: string;
  constructor(name: string) {
    super();
    this.name = name;
  }
  run(): void {
    console.log(`${this.name} is running`);
  }
  swim(): void {
    console.log(`${this.name} is swimming`);
  }
  stop(): void {
    console.log(`${this.name} stopped`);
  }
}

//

interface A {
  a(): void;
}

interface B extends A {
  b(): void;
}

class X implements B {
  a(): void {
    console.log("a");
  }
  b(): void {
    console.log("b");
  }
}

//

type A2 = {
  a(): void;
};

type B2 = A2 & {
  b(): void;
};

class X2 implements B {
  a(): void {
    console.log("a");
  }
  b(): void {
    console.log("b");
  }
}
