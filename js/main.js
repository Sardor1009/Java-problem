// problem1

// let a = 12;
// if (a > 0){
//    console.log(a += 1);
// }
// else {
//     console.log(a);
// }

// p2

// let a = 0;

// if (a > 0){
//     a++;
// }
// else if (a < 0) {
//     a -= 2;
// }
// else if (a == 0){
//     a = 10;
// }
// console.log(a)

// // P3

// let a = -4;
// let b = -4;
// let c = -3;

// positive = 0;

// if (a > 0 ) {
//     positive++;
// }
// if ( b > 0){
//     positive++;
// }
// if (c > 0){
//     positive++;
// }
// console.log(positive)

// p4

// let a = 0;
// let b = 1;
// if ( a > b){
//     console.log(a);
// }
// else {
//     console.log(b);
// }

// a > b ? console.log(a) : console.log(b) //second way//

// p5

// let a = 12;
// let b = 100;
// a > b ? console.log(2) : console.log(1)

// p6

// let a = -23;
// let b = 0;
// if (a > b){
//     console.log(a);
//     console.log(b)
// }
// else {
//     console.log(b);
//     console.log(a);
// }

// p7
// let A = 112;
// let B = 14;

// if (A < B) {
//     A;
//     B;
// }
// else {
//     B = A + 1
//     A;
// }
// console.log ("A soni",A);
// console.log ("B soni", B);

// p8

// let A = 12;
// let B = 12;
// let a = A;

// if (A !== B) {
//     A = a + B;
//     B = a + B;
// }
// else if (A === B) {
//   A = 0;
//   B = 0;
// }
// console.log(A);
// console.log(B)

// p9

// let A = 14;
// let B = 14;
// // let a = A;

// if (A !== B) {
//    if (A > B){
//     A = A;
//     B = A;
//    }
//    else {
//     B = B;
//     A = B;
//    }
// }
// else if (A === B) {
//   A = 0;
//   B = 0;
// }
// console.log(A);
// console.log(B)

// PR10

// let a = 21;
// let b = 16;
// let c = 15;

// if (a < b ){
//     if (a < c ){
//         console.log(a);
//     }
//     else (
//         console.log(c)
//     )
// }
// else{
//       if (b < c) {
//         console.log(b);
//     }
//     else {
//         console.log(c);
//     }
// }

// pr11

// let a = 13.5;
// let b = 13;
// let c = 14;

// if (a > b) {
//   if (a > c) {
//     if (b > c) {
//       console.log(b);
//     } else {
//       console.log(c);
//     }
//   } else {
//     console.log(a);
//   }
// } else {
//   if (b > c) {
//     if (a > c) {
//       console.log(a);
//     } else {
//       console.log(c);
//     }
//   } else {
//     console.log(b);
//   }
// }

// pr12

// let a = 15;
// let b = 12;
// let c = 19;

// if (a > b) {
//   if (a > c) {
//     console.log(a);
//     if (b > c) {
//       console.log(b);
//     } else {
//       console.log(c);
//     }
//   } else {
//     console.log(c);
//     console.log(a);
//   }
// } else {
//   if (b > c) {
//     console.log(b);
//     if (a > c) {
//       console.log(a);
//     } else {
//       console.log(c);
//     }
//   } else {
//     console.log(c);
//     console.log(b);
//   }
// }

// pr13

let a = 12;
let b = 15; 
let c = 14;


if (b > a & c > b){
    a = 2 * a
    b = 2 * b
    c = 2 * c
}
else {
    a = -a
    b = -b
    c = -c
}
console.log (a)
console.log (b)
console.log (c)

