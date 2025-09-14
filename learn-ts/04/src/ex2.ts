// <aside>
// 💡

// 주어진 코드를 enum으로 리팩토링 해보세요.

// </aside>

// ### 문제 1: 요일을 나타내는 상수

// **주어진 코드**:

const MONDAY = 1;
const TUESDAY = 2;
const WEDNESDAY = 3;
const THURSDAY = 4;
const FRIDAY = 5;
const SATURDAY = 6;
const SUNDAY = 7;

function getDayName(day: number): string {
  if (day === MONDAY) return "Monday";
  if (day === TUESDAY) return "Tuesday";
  if (day === WEDNESDAY) return "Wednesday";
  if (day === THURSDAY) return "Thursday";
  if (day === FRIDAY) return "Friday";
  if (day === SATURDAY) return "Saturday";
  if (day === SUNDAY) return "Sunday";
  return "Invalid day";
}

enum Day {
  MONDAY = 1,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

function getDayNameEnum(day: Day): string {
  switch (day) {
    case Day.MONDAY:
      return "Monday";
    case Day.TUESDAY:
      return "Tuesday";
    case Day.WEDNESDAY:
      return "Wednesday";
    case Day.THURSDAY:
      return "Thursday";
    case Day.FRIDAY:
      return "Friday";
    case Day.SATURDAY:
      return "Saturday";
    case Day.SUNDAY:
      return "Sunday";
    default:
      return "Invalid day";
  }
}

getDayNameEnum(Day.MONDAY); // "Monday"

// ---

// ### 문제 2: 상태 코드

// **주어진 코드**:

const SUCCESS = 200;
const NOT_FOUND = 404;
const INTERNAL_ERROR = 500;

function getStatusMessage(status: number): string {
  if (status === SUCCESS) return "Success";
  if (status === NOT_FOUND) return "Not Found";
  if (status === INTERNAL_ERROR) return "Internal Server Error";
  return "Unknown Status";
}

enum Status {
  SUCCESS = 200,
  NOT_FOUND = 404,
  INTERNAL_ERROR = 500,
}

function getStatusMessageEnum(status: Status): string {
  switch (status) {
    case Status.SUCCESS:
      return "Success";
    case Status.NOT_FOUND:
      return "Not Found";
    case Status.INTERNAL_ERROR:
      return "Internal Server Error";
    default:
      return "Unknown Status";
  }
}

getStatusMessageEnum(Status.SUCCESS); // "Success"

// ---

// ### 문제 3: 우편번호에 따른 지역 이름

// **주어진 코드**:

const SEOUL = "Seoul";
const BUSAN = "Busan";
const DAEGU = "Daegu";

function getCityByZip(zip: string): string {
  if (zip === "100") return SEOUL;
  if (zip === "200") return BUSAN;
  if (zip === "300") return DAEGU;
  return "Unknown City";
}

enum City {
  SEOUL = "Seoul",
  BUSAN = "Busan",
  DAEGU = "Daegu",
}

function getCityByZipEnum(zip: string): string {
  switch (zip) {
    case "100":
      return City.SEOUL;
    case "200":
      return City.BUSAN;
    case "300":
      return City.DAEGU;
    default:
      return "Unknown City";
  }
}

getCityByZipEnum("100"); // "Seoul"

// ---

// ### 문제 4: 사용자 권한

// **주어진 코드**:

const ADMIN = "admin";
const USER = "user";
const GUEST = "guest";

function getPermissionLevel(role: string): string {
  if (role === ADMIN) return "Full access";
  if (role === USER) return "Limited access";
  if (role === GUEST) return "Guest access";
  return "No access";
}

enum Role {
  ADMIN = "admin",
  USER = "user",
  GUEST = "guest",
}

function getPermissionLevelEnum(role: Role) {
  if (role === Role.ADMIN) return "Full access";
  if (role === Role.USER) return "Limited access";
  if (role === Role.GUEST) return "Guest access";
  return "No access";
}

getPermissionLevelEnum(Role.ADMIN); // "Full access"

// ---

// ### 문제 5: 상품 상태

// **주어진 코드**:

const PENDING = 1;
const SHIPPED = 2;
const DELIVERED = 3;

function getProductStatus(status: number): string {
  if (status === PENDING) return "Pending";
  if (status === SHIPPED) return "Shipped";
  if (status === DELIVERED) return "Delivered";
  return "Unknown Status";
}

enum ProductStatus {
  PENDING = 1,
  SHIPPED,
  DELIVERED,
}

function getProductStatusEnum(status: ProductStatus): string {
  if (status === ProductStatus.PENDING) return "Pending";
  if (status === ProductStatus.SHIPPED) return "Shipped";
  if (status === ProductStatus.DELIVERED) return "Delivered";
  return "Unknown Status";
}

getProductStatusEnum(ProductStatus.PENDING); // "Pending"

// ---

// ### 문제 6: 주문 상태

// **주어진 코드**:

const ORDER_PLACED = "Order Placed";
const PAYMENT_PENDING = "Payment Pending";
const SHIPPED2 = "Shipped";
const DELIVERED2 = "Delivered";

function getOrderStatus(status: string): string {
  if (status === ORDER_PLACED) return "Your order has been placed.";
  if (status === PAYMENT_PENDING) return "Payment is pending.";
  if (status === SHIPPED2) return "Your order has been shipped.";
  if (status === DELIVERED2) return "Your order has been delivered.";
  return "Unknown Status";
}

enum OrderStatus {
  ORDER_PLACED = "Order Placed",
  PAYMENT_PENDING = "Payment Pending",
  SHIPPED2 = "Shipped",
  DELIVERED2 = "Delivered",
}

function getOrderStatusEnum(status: OrderStatus): string {
  if (status === OrderStatus.ORDER_PLACED) return "Your order has been placed.";
  if (status === OrderStatus.PAYMENT_PENDING) return "Payment is pending.";
  if (status === OrderStatus.SHIPPED2) return "Your order has been shipped.";
  if (status === OrderStatus.DELIVERED2)
    return "Your order has been delivered.";
  return "Unknown Status";
}

getOrderStatusEnum(OrderStatus.ORDER_PLACED); // "Your order has been placed."

// ---

// ### 문제 7: 상태 변경

// **주어진 코드**:

const IS_ACTIVE = true;
const IS_INACTIVE = false;

function toggleStatus(status: boolean): boolean {
  return !status;
}

enum StatusToggle {
  IS_ACTIVE = 1,
  IS_INACTIVE = 0,
}

function toggleStatusEnum(status: StatusToggle): StatusToggle {
  return status === StatusToggle.IS_ACTIVE
    ? StatusToggle.IS_INACTIVE
    : StatusToggle.IS_ACTIVE;
}

toggleStatusEnum(StatusToggle.IS_ACTIVE); // StatusToggle.IS_INACTIVE

// ---

// ### 문제 8: 선택지 값

// **주어진 코드**:

const OPTION_ONE = "Option 1";
const OPTION_TWO = "Option 2";
const OPTION_THREE = "Option 3";

function getOptionValue(option: string): string {
  if (option === OPTION_ONE) return "You selected Option 1.";
  if (option === OPTION_TWO) return "You selected Option 2.";
  if (option === OPTION_THREE) return "You selected Option 3.";
  return "Invalid option";
}

enum Option {
  OPTION_ONE = "Option 1",
  OPTION_TWO = "Option 2",
  OPTION_THREE = "Option 3",
}

function getOptionValueEnum(option: Option): string {
  if (option === Option.OPTION_ONE) return "You selected Option 1.";
  if (option === Option.OPTION_TWO) return "You selected Option 2.";
  if (option === Option.OPTION_THREE) return "You selected Option 3.";
  return "Invalid option";
}

getOptionValueEnum(Option.OPTION_ONE); // "You selected Option 1."

// ---

// ### 문제 9: 식사 시간

// **주어진 코드**:

const BREAKFAST = "Breakfast";
const LUNCH = "Lunch";
const DINNER = "Dinner";

function getMealTime(meal: string): string {
  if (meal === BREAKFAST) return "Good morning, it's breakfast time!";
  if (meal === LUNCH) return "Good afternoon, it's lunch time!";
  if (meal === DINNER) return "Good evening, it's dinner time!";
  return "Invalid meal time";
}

enum Meal {
  BREAKFAST = "Breakfast",
  LUNCH = "Lunch",
  DINNER = "Dinner",
}

function getMealTimeEnum(meal: Meal): string {
  if (meal === Meal.BREAKFAST) return "Good morning, it's breakfast time!";
  if (meal === Meal.LUNCH) return "Good afternoon, it's lunch time!";
  if (meal === Meal.DINNER) return "Good evening, it's dinner time!";
  return "Invalid meal time";
}

getMealTimeEnum(Meal.BREAKFAST); // "Good morning, it's breakfast time!"

// ---

// ### 문제 10: 로그인 상태

// **주어진 코드**:

const LOGGED_IN = true;
const LOGGED_OUT = false;

function checkLoginStatus(status: boolean): string {
  if (status === LOGGED_IN) return "You are logged in.";
  if (status === LOGGED_OUT) return "You are logged out.";
  return "Unknown status";
}

enum LoginStatus {
  LOGGED_IN = 1,
  LOGGED_OUT = 0,
}

function checkLoginStatusEnum(status: LoginStatus): string {
  if (status === LoginStatus.LOGGED_IN) return "You are logged in.";
  if (status === LoginStatus.LOGGED_OUT) return "You are logged out.";
  return "Unknown status";
}

checkLoginStatusEnum(LoginStatus.LOGGED_IN); // "You are logged in."
