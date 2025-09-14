// ### 1. **사람 객체 생성**

// ### 문제:

// 다음은 사람 객체를 생성하는 생성자 함수입니다. 이를 타입스크립트 클래스 문법을 사용하여 변환하세요.

// ### 기존 코드:

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  greet(): void {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person = new Person("Alice", 30);
person.greet(); // "Hello, my name is Alice and I am 30 years old."

// ### 요구 사항:

// - 타입스크립트 클래스로 변환하세요.
// - `name`과 `age`를 타입스크립트 타입으로 지정하세요.

// ---

// ### 2. **학생 클래스**

// ### 문제:

// 다음은 학생 객체를 생성하는 생성자 함수입니다. 이를 타입스크립트 클래스로 변환하세요.

// ### 기존 코드:

class Student {
  name: string;
  grade: number;

  constructor(name: string, grade: number) {
    this.name = name;
    this.grade = grade;
  }
  displayInfo(): void {
    console.log(`${this.name} is in grade ${this.grade}.`);
  }
}

const student = new Student("Bob", 10);
student.displayInfo(); // "Bob is in grade 10."

// ### 요구 사항:

// - 타입스크립트 클래스로 변환하세요.
// - `name`과 `grade`에 타입을 추가하세요.

// ---

// ### 3. **자동차 클래스**

// ### 문제:

// 다음은 자동차 객체를 생성하는 생성자 함수입니다. 이를 타입스크립트 클래스로 변환하세요.

// ### 기존 코드:

class Car {
  brand: string;
  model: string;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }

  getCarInfo(): string {
    return `${this.brand} ${this.model}`;
  }
}

const car = new Car("Toyota", "Corolla");
console.log(car.getCarInfo()); // "Toyota Corolla"

// ### 요구 사항:

// - 타입스크립트 클래스로 변환하세요.
// - `brand`와 `model`에 타입을 추가하세요.

// ---

// ### 4. **사각형 클래스**

// ### 문제:

// 다음은 사각형 객체를 생성하는 생성자 함수입니다. 이를 타입스크립트 클래스로 변환하세요.

// ### 기존 코드:

class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(5, 10);
console.log(rectangle.getArea()); // 50

// ### 요구 사항:

// - 타입스크립트 클래스로 변환하세요.
// - `width`와 `height`에 타입을 추가하세요.

// ---

// ### 5. **도서 클래스**

// ### 문제:

// 다음은 도서 객체를 생성하는 생성자 함수입니다. 이를 타입스크립트 클래스로 변환하세요.

// ### 기존 코드:

class Book {
  title: string;
  author: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  getBookInfo(): string {
    return `"${this.title}" by ${this.author}`;
  }
}

const book = new Book("1984", "George Orwell");
console.log(book.getBookInfo()); // ""1984" by George Orwell"

// ### 요구 사항:

// - 타입스크립트 클래스로 변환하세요.
// - `title`과 `author`에 타입을 추가하세요.

// ---

// ### 6. **직원 클래스**

// ### 문제:

// 다음은 직원 객체를 생성하는 생성자 함수입니다. 이를 타입스크립트 클래스로 변환하세요.

// ### 기존 코드:

class Employee {
  constructor(public name: string, public salary: number) {
    this.name = name;
    this.salary = salary;
  }

  getSalary(): string {
    return `${this.name} earns $${this.salary}`;
  }
}

const employee = new Employee("Alice", 50000);
console.log(employee.getSalary()); // "Alice earns $50000"

// ### 요구 사항:

// - 타입스크립트 클래스로 변환하세요.
// - `name`과 `salary`에 타입을 추가하세요.

// ---

// ### 7. **도형 클래스**

// ### 문제:

// 다음은 도형 객체를 생성하는 생성자 함수입니다. 이를 타입스크립트 클래스로 변환하세요.

// ### 기존 코드:

class Shape {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getShapeName(): string {
    return `This is a ${this.name}`;
  }
}

const shape = new Shape("Circle");
console.log(shape.getShapeName()); // "This is a Circle"

// ### 요구 사항:

// - 타입스크립트 클래스로 변환하세요.
// - `name`에 타입을 추가하세요.

// ---

// ### 8. **도서관 클래스**

// ### 문제:

// 다음은 도서관 객체를 생성하는 생성자 함수입니다. 이를 타입스크립트 클래스로 변환하세요.

// ### 기존 코드:

class Library {
  name: string;
  books: string[];

  constructor(name: string, books: string[]) {
    this.name = name;
    this.books = books;
  }

  getBooks(): string {
    return `${this.name} has the following books: ${this.books.join(", ")}`;
  }
}

const library = new Library("City Library", ["1984", "Brave New World"]);
console.log(library.getBooks()); // "City Library has the following books: 1984, Brave New World"

// ### 요구 사항:

// - 타입스크립트 클래스로 변환하세요.
// - `name`과 `books`에 타입을 추가하세요.

// ---

// ### 9. **날짜 클래스**

// ### 문제:

// 다음은 날짜 객체를 생성하는 생성자 함수입니다. 이를 타입스크립트 클래스로 변환하세요.

// ### 기존 코드:

class DateUtil {
  day: number;
  month: number;
  year: number;

  constructor(day: number, month: number, year: number) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  getDate(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }
}

const date = new DateUtil(12, 5, 2024);
console.log(date.getDate()); // "12/5/2024"

// ### 요구 사항:

// - 타입스크립트 클래스로 변환하세요.
// - `day`, `month`, `year`에 타입을 추가하세요.

// ---

// ### 10. **점 클래스**

// ### 문제:

// 다음은 점 객체를 생성하는 생성자 함수입니다. 이를 타입스크립트 클래스로 변환하세요.

// ### 기존 코드:

class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  getDistance(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

const point = new Point(3, 4);
console.log(point.getDistance()); // 5

// ### 요구 사항:

// - 타입스크립트 클래스로 변환하세요.
// - `x`와 `y`에 타입을 추가하세요.

// ---
