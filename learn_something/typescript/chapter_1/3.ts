// 1

// class Person {
//   firstName = "";
//   lastName = "";
//   age = 0;
// }

// class Employee extends Person {
//   department = "";
// }

// const empl = new Employee();

// console.log(empl.age);

// 2

// class Person {
//   firstName = "";
//   lastName = "";
//   age = 0;

//   sayHello(): string {
//     return `My name is ${this.firstName} ${this.lastName}`;
//   }
// }

// class Employee extends Person {
//   department = "";
// }

// const empl = new Employee();

// console.log(empl.sayHello());

// class Person {
//   public firstName = "";
//   public lastName = "";
//   private age = 0;

//   protected sayHello(): string {
//     return `My name is ${this.firstName} ${this.lastName}`;
//   }
// }

// class Employee extends Person {
//   department = "";

//   reviewPerformance(): void {
//     this.sayHello();
//   }
// }

// const empl = new Employee();

// console.log(empl.sayHello()); // 오류가 발생합니다

// class Person {
//   public firstName = "";
//   public lastName = "";
//   private age = 0;

//   protected sayHello(): string {
//     return `My name is ${this.firstName} ${this.lastName}`;
//   }
// }

// class Employee extends Person {
//   department = "";

//   reviewPerformance(): void {
//     this.sayHello();
//     this.age; // private 상속자로 인해 오류가 발생합니다
//   }
// }

// const empl = new Employee();

// console.log(empl.sayHello()); // protected 상속자로 인해 오류가 발생합니다

class Gangsta {
  static totalBullets = 10;
  shot(): void {
    // Gangsta.totalBullets--;
    console.log(`Bullets left: ${Gangsta.totalBullets}`);
  }
}

const g_1 = new Gangsta();
g_1.shot(); // Bullets left: 9
const g_2 = new Gangsta();
g_2.shot(); // Bullets left: 8

class AppState {
  counter = 0; // 앱 상태를 나타냅니다
  private static instanceRef: AppState; // AppState의 단일 인스턴스에 대한 참조를 저장합니다
  private constructor() {}
  static getInstance(): AppState {
    if (AppState.instanceRef === undefined) {
      AppState.instanceRef = new AppState();
    }
    return AppState.instanceRef;
  }
}

// const appState = new AppState(); // private 생성자 때문에 오류가 발생합니다

// AppState 인스턴스에 대한 참조를 가져옵니다
const appState_1 = AppState.getInstance();
const appState_2 = AppState.getInstance();

// 카운터 값을 수정합니다.
appState_1.counter++;
appState_1.counter++;
appState_2.counter++;
appState_2.counter++;

// 카운터 값을 인쇄합니다
console.log(appState_1.counter);
console.log(appState_2.counter);

// class Person {
//   constructor(
//     public firstName: string,
//     public lastName: string,
//     private age: number
//   ) {}
// }

// class Employee extends Person {
//   constructor(
//     firstName: string,
//     lastName: string,
//     age: number,
//     public department: string
//   ) {
//     super(firstName, lastName, age);
//   }
// }

// const emp_1 = new Employee("Junseo", "Park", 27, "Soongsil");

class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    private age: number
  ) {}

  sellStock(symbol: string, numberOfShare: number) {
    console.log(`Selling ${numberOfShare} of ${symbol}`);
  }
}

class Employee extends Person {
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    public department
  ) {
    super(firstName, lastName, age); // 부모의 생성자를 호출
  }

  sellStock(symbol: string, share: number): void {
    // 자식의 sellStock() 메서드
    super.sellStock(symbol, share); // 부모의 sellStock 메서드
    this.reportToCompliance(symbol, share);
  }

  private reportToCompliance(symbol: string, share: number) {
    console.log(
      `${this.lastName} from ${this.department} sold ${share} shares of ${symbol}`
    );
  }
}

const emp_1 = new Employee("Junseo", "Park", 27, "Soongsil");
emp_1.sellStock("IBM", 100); // Employee 객체에서 sellStock()을 호출합니다.

// Selling 100 of IBM
// Park from Soongsil sold 100 shares of IBM
