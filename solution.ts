// problem-1
function formatValue(value: string | number | boolean): string | number | boolean {

     if(typeof value === "string"){
   return value.toUpperCase();
     }

    if(typeof value === "number"){
        return value * 10 ;
    }
    if(typeof value === "boolean"){
        return !value;
    }
   return value;
}

// console.log(formatValue("hello"));
// console.log(formatValue(5));
// console.log(formatValue(true));


// problem-2
function  getLength(value: string | any []):number {
    if(typeof value === "string"){
        return value.length;
    }
    if (Array.isArray(value)){
        return value.length
    }
    return 0;
}


//  console.log(getLength("typescript"));    
// console.log(getLength([10, 20, 30, 40]));

// probem-3
class Person {
    name: string;
    age: number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age ;
    }

    getDetails(): string{
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const person1 = new Person('John Doe', 30);

// console.log(person1.getDetails()); 
// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());


// problem-4
interface Item {
    title : string;
    reting : number;
}

function filterByRating(Items: Item[]): Item[]{
return Items.filter(item => item.reting >= 4)
}

const books: Item[] = [
    {title: 'Book A', reting:4.5},
    {title: 'Book B', reting:3.2},
    {title: 'Book C', reting:5.0},
]

// console.log(filterByRating(books));

// problem-5
interface User {
    in: number;
    name: string;
    email: string;
    isActive : boolean;
}

function filterActiveUsers(users: User[]): User[] {
return users.filter(user => user.isActive);
}

const users: User[] = [
    {id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true},
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false},
    { id: 3, name: 'Rume', email: 'rumi@example.com', isActive: true},
]
// console.log(filterActiveUsers(users));

// problem-6
interface Book{
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(book: Book): void{
    // console.log( `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}` )
}

const myBook: Book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
}
printBookDetails(myBook);

// problem-7
function getUniqueValues(array1: (number | string)[], array2: (number | string)[]): (number | string)[] {
  const result: (number | string)[] = [];

   for (let i = 0; i < array1.length; i++) {
    let exists = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j] === array1[i]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      result.push(array1[i]);
    }
  }

   for (let i = 0; i < array2.length; i++) {
    let exists = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j] === array2[i]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      result.push(array2[i]);
    }
  }

  return result;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

// console.log(getUniqueValues(array1, array2)); 


// problem-8
interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;

  return products.reduce((total, product) => {
    const basePrice = product.price * product.quantity;
    const discountedPrice = product.discount ? basePrice * (1 - product.discount / 100) : basePrice;
    return total + discountedPrice;
  }, 0);
}


const products: Product[] = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

// console.log(calculateTotalPrice(products)); 
