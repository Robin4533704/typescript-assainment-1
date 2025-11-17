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