<!-- What are some differences between interfaces and types in TypeScript? -->
Interface এর সবচেয়ে বড় সুবিধা হলো—একই নামে বারবার declare করলে TypeScript এগুলো merge করে একটি interface বানিয়ে ফেলে।
interface: interface person { name: string; age:number;}

Interface দিয়ে শুধু object structure define করা যায়।
কিন্তু type alias দিয়ে তৈরি করা যায়
type ID = string | number;
type Employee = person & {salary: number};

<!-- What is the use of the keyof keyword in TypeScript? Provide an example. -->
TypeScript হলো JavaScript-এর শক্তিশালী টাইপ–সিস্টেম যুক্ত একটি সুপারসেট। এর অন্যতম গুরুত্বপূর্ণ ফিচার হলো keyof keyword। এটি এমন একটি operator যা কোনো object type-এর সবগুলো key-এর নামকে একটি ইউনিয়ন (union type) হিসেবে রিটার্ন করে।
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}
type UserKeys = keyof User;

<!-- qus:3 -->
<!-- Explain the difference between any, unknown, and never types in TypeScript. -->
any — সবচেয়ে ঢিলা টাইপ (No Type Safety)
যেকোনো কিছু assign করা যায়
যেকোনো জায়গায় ব্যবহার করা যায়
TypeScript কোনও error দেখাবে না
type checking বন্ধ হয়ে যায়

let x: any = 10;
x = "hello";
x = true;

x.toUpperCase(); 

unknown নিরাপদ any (Type Safe)
যেকোনো ভ্যালু assign করা যায়
কিন্তু ব্যবহারের আগে টাইপ চেক করতে হবে
না হলে error দিবে

let y: unknown = "Hello";
y.toUpperCase(); 
if (typeof y === "string") {
    console.log(y.toUpperCase()); 

}
never — এমন টাইপ যা কখনো ঘটতেই পারে না
never মানে অসম্ভব value
functions that never return
infinite loop
always throwing error

function that always throws
function fail(msg: string): never {
 throw new Error(msg);
}

<!-- 4 -->
<!-- What is the use of enums in TypeScript? Provide an example of a numeric and string enum. -->
TypeScript -এ enum (Enumeration) হলো একটি বিশেষ ডাটা টাইপ ,যা আপনাকে কিছু নিদিষ্ট মানকে একটি নাম দেওয়ার সুযোগ দেয়। সহজভাবে বললে enum হলো কিছু সম্পর্কিত মানকে গ্রুপ করে রাখার একটি উপায় ।
আরও পরিষ্কার
✔ আরও পাঠযোগ্য
✔ কম ভুলপ্রবণ
✔ এবং সহজে মেইনটেইনযোগ্য করে তোলে।

enum Status {
  Pending,
  InProgress,
  Completed
}
let taskStatus: Status = Status.InProgress;
console.log(taskStatus);

enum UserRole {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

let role: UserRole = UserRole.Admin;
console.log(role);

<!-- Provide an example of using union and intersection types in TypeScript. -->
Union type মানে — একটি ভেরিয়েবল একাধিক টাইপের যেকোনো একটিকে ধারণ করতে পারে।
let value: string | number;

value = "Hello";  
value = 100;   
function printId(id: string | number) {
  console.log("Your ID is:", id);
}

printId("AB123");
printId(101);
