// function formatValue(value: string | number | boolean): string | number | boolean {
//      if(typeof value === "string"){
//    return value.toUpperCase();
//      }
//     if(typeof value === "number"){
//         return value * 10 ;
//     }
//     if(typeof value === "boolean"){
//         return !value;
//     }
//    return value;
// }
function getLength(value) {
    if (typeof value === "string") {
        return value.length;
    }
    if (Array.isArray(value)) {
        return value.length;
    }
    return 0;
}
console.log(getLength("typescript"));
console.log(getLength([10, 20, 30, 40]));
