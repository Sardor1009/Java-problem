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

// let a = 12;
// let b = 15;
// let c = 14;

// if (b > a & c > b){
//     a = 2 * a
//     b = 2 * b
//     c = 2 * c
// }
// else {
//     a = -a
//     b = -b
//     c = -c
// }
// console.log (a)
// console.log (b)
// console.log (c)

// pr14

// let a = 17;
// let b = 15;
// let c = 14;

// if ((b > a & c > b) || ( a > b & b > c)){
//     a = 2 * a
//     b = 2 * b
//     c = 2 * c
// }
// else {
//     a = -a
//     b = -b
//     c = -c
// }
// console.log (a)
// console.log (b)
// console.log (c)

// pr15

// let a = 13;
// let b = 14;
// let c = 13;
// let d = 13;

// if ( a === b & c === b){
//   console.log(4);
// }
// else if( a === b & b === d){
//     console.log(3)
// }
// else if (b === c & c == d){
//     console.log(1)
// }
// else {
//     console.log(2)
// }

// pr 16
// let x = 12;

// if (x >= 2){
//     console.log(4)
// }
// else if (x > 0 & x < 2){
//     console.log(x ** 2)
// }
// else if(x <= 0){
//     console.log(-x)
// }

// pr17

// let a = 1200;

// if (a < 100 & a % 4 ){
//     console.log("Bu yilda 366 kun bor")
// }
// else if( a >= 100 & a % 200 === 0){
//     console.log("Bu yilda 366 kun bor")
// }
// else {
//     console.log("Bu yilda 365 kun  bor")
// }

// let a = +prompt(" 999 gacha bolgan son kiriting: ")

// if (a > 99 & a < 1000 & a % 2 === 0){
//     console.log("uch xonali just son")
// }
// else if(a > 0 & a < 10 & a % 2 === 0){
//     console.log("1 xonali juft son")
// }
// else if (a > 9 & a < 100 & a % 2 === 0){
//     console.log("2 xonali juft son")

// }
// else if(a > 99 & a < 1000 & a % 2 === 1){
//     console.log("uch xonali toq son")

// }
// else if(a > 0 & a < 10 & a % 2 === 1){
//     console.log("1 xonali toq son")
// }
// else if (a > 9 & a < 100 & a % 2 === 1){
//     console.log("2 xonali toq son")

// }
// else {
//     console.log(" kiritilgan son 1000 dan katta")
// }

// PART 2------------------------------------

// let K = 4;
// if (K === 1){
//     console.log("juda yomon")
// }
// else if (K === 2){
//     console.log("yomon")
// }
// else if (K === 3){
//     console.log("qoniqarli")
// }
// else if (K === 4){
//     console.log("yaxshi ")
// }
// else if (K === 5){
//     console.log("a'lo")
// }
// else{
//     console.log(" xato")
// }

// pr2

// let a = 5;
// if (a <= 2 || a == 12){
//     console.log("qish")
// }
// else if (a > 2 & a < 6){
//     console.log(" bahor")
// }
// else if (a > 5 & a < 9 ){
//     console.log(" yoz")
// }else if (a > 8 & a < 12){
//     console.log("kuz")
// }
// else {
//     "!2 gacha bolgan buton son kiriting"
// }

// pr3

// let a = 4;
// if (
//   a === 1 ||
//   a === 3 ||
//   a === 5 ||
//   a === 7 ||
//   a === 8 ||
//   a === 10 ||
//   a === 12
// ) {
//   console.log("BU oy 31 kundan iborat");
// } else if (a === 2) {
//   console.log("Bu oy 28 yoki 29 kundan iborat");
// } else {
//   console.log("bu oy 30 kundan iborat");
// }

// pr4

// let T = +prompt("Enter one to five");
// let L = +prompt("Enter any number: ");

// let res;

// switch (T) {
//   case 1:
//     res = L / 10;
//     break;
//   case 2:
//     res = L * 1000;
//     break;
//   case 3:
//     res = L;
//   case 4:
//     res = L / 1000;
//     break;
//   case 5:
//     res = L / 100;
//     break;
//   default:
//     res = "unsupported value";
// }
// console.log(res, "Metr");

// pr5

// let T = 6;
// let L = 200;

// let res;

// switch (T) {
//   case 1:
//     res = L;
//     break;
//   case 2:
//     res = L / 1000000;
//     break;
//   case 3:
//     res = L / 1000;
//   case 4:
//     res = L * 1000;
//     break;
//   case 5:
//     res = L * 100;
//     break;
//   default:
//    res = "Unsupported value"
// }
// console.log(res, "Kilogram");

// let M = 2;
// let D = 33;

// let res;
// switch (M) {
//   case 1:
//     res = "January";
//     break;
//   case 2:
//     res = "Febraury";
//     break;
//   case 3:
//     res = "March";
//     break;
//   case 4:
//     res = "April";
//     break;
//   case 5:
//     res = "May";
//     break;
//   case 6:
//     res = "June";
//     break;
//   case 7:
//     res = "July";
//     break;
//   case 8:
//     res = "August";
//     break;
//   case 9:
//     res = "September";
//     break;
//   case 10:
//     res = "October";
//     break;
//   case 11:
//     res = "November";
//     break;
//   case 12:
//     res = "December";
//     break;
//     default:
//         res = "Error..."
// }

// console.log(res, D)

// pr7

// let M = 2;
// let D = 33;

// let res;
// let d = D + 1;
// switch (M) {
//   case 1:
//     res = "January";
//     break;
//   case 2:
//     res = "Febraury";
//     break;
//   case 3:
//     res = "March";
//     break;
//   case 4:
//     res = "April";
//     break;
//   case 5:
//     res = "May";
//     break;
//   case 6:
//     res = "June";
//     break;
//   case 7:
//     res = "July";
//     break;
//   case 8:
//     res = "August";
//     break;
//   case 9:
//     res = "September";
//     break;
//   case 10:
//     res = "October";
//     break;
//   case 11:
//     res = "November";
//     break;
//   case 12:
//     res = "December";
//     break;
//     default:
//         res = "Error..."
// }

// console.log(res, d)

// pr8

// let M = 3;
// let N = 9;

// let red;

// switch (M) {
//   case 1:
//     red = "G'isht";
//     break;
//   case 2:
//     red = "Olma";
//     break;
//   case 3:
//     red = "Chillak";
//     break;
//   case 4:
//     red = "Qarg'a";
//     break;
//   default:
//     red = "Error...";
// }

// switch (N) {
//   case 6:
//     res = "Olti";
//     break;
//     case 7:
//     res = "Yetti";
//     break;
//     case 8:
//     res = "Sakkiz";
//     break;
//     case 9:
//     res = "To'qqiz";
//     break;
//     case 10:
//     res = "O'n";
//     break;
//     case 11:
//     res = "Valet";
//     break;
//     case 12:
//     res = "Dama";
//     break;
//     case 13:
//     res = "Qirol";
//     break;
//     case 14:
//     res = "Tuz";
//     break;
//     default:
//         res = "Error..."
// }

// console.log(res, red)

// pr10

// let A = 4;
// let B = 1;

// let res;

// switch (A) {
//   case 1:
//     res = " O'n";
//     break;
//   case 2:
//     res = "Yigirma";
//     break;

//   case 3:
//     res = "O'ttiz";
//     break;
//   case 4:
//     res = "Qirq";
//     break;
//   default:
//     res = " error...";
// }
// let red;
// switch (B) {
//   case 1:
//     red = "bitta";
//     break;
//     case 1:
//     red = "Bitta";
//     break;
//     case 1:
//     red = "Bitta";
//     break;
//     case 1:
//     red = "Bitta";
//     break;
//     case 1:
//     red = "Bitta";
//     break;
//     case 1:
//     red = "Bitta";
//     break;
//     default:
//         red = " error"
// }
// console.log(res, red , "masala")

// pr11

// let abc = 999;
// let c = abc % 10;
// let b = ((abc - c) / 10) % 10;
// let a = (abc - 10 * b - c) / 100;

// let res;
// switch (a) {
//   case 1:
//     res = "Bir yuz";
//     break;
//   case 2:
//     res = "Ikki yuz";
//     break;
//   case 3:
//     res = "Uch yuz";
//     break;
//   case 4:
//     res = "To'rt yuz";
//     break;
//   case 5:
//     res = "Besh yuz";
//     break;
//   case 6:
//     res = "Olti yuz";
//     break;
//   case 7:
//     res = "Yetti yuz";
//     break;
//   case 8:
//     res = "Sakkiz yuz";
//     break;
//   case 9:
//     res = "To'qqiz yuz";
//     break;
//   default:
//     res = "Error...";
// }
// let ans;
// switch (b) {
//     case 1:
//     ans = "O'n";
//     break;
//   case 2:
//     ans = "Yigirma";
//     break;
//   case 3:
//     ans = "O'ttiz";
//     break;
//   case 4:
//     ans = "Qirq";
//     break;
//   case 5:
//     ans = "Ellik";
//     break;
//   case 6:
//     ans = "Oltmish";
//     break;
//   case 7:
//     ans = "Yetmish";
//     break;
//   case 8:
//     ans = "Sakson";
//     break;
//   case 9:
//     ans = "To'qson";
//     break;
//   default:
//     ans = "Error...";
// }

// let rep;
// switch (c){
//     case 1:
//         rep = "bir";
//         break;
//       case 2:
//         rep = "Ikki";
//         break;
//       case 3:
//         rep = "Uch";
//         break;
//       case 4:
//         rep = "To'rt";
//         break;
//       case 5:
//         rep = "Besh";
//         break;
//       case 6:
//         rep = "Olti";
//         break;
//       case 7:
//         rep = "Yetti";
//         break;
//       case 8:
//         rep = "Sakkiz";
//         break;
//       case 9:
//         rep = "To'qqiz";
//         break;
//       default:
//         rep = "Error...";
// }

// console.log(res, ans, rep)

let Y = +prompt("Enter a year Number");
let D = Y - 1984;
if (Y < 1984){
    console.log("Mininum insertable number is 1984")
}
else{
    let k = D % 12;
    let red;
    
    if(parseInt(D) === D){
        switch (k) {
            case 0:
              red = "sichqon yili";
              break;
            case 1:
              red = "sigir yili";
              break;
            case 2:
              red = "yo'lbars yili";
              break;
            case 3:
              red = "quyon yili";
              break;
            case 4:
              red = "ajdar yili";
              break;
            case 5:
              red = "ilon yili";
              break;
            case 6:
              red = "ot yili";
              break;
            case 7:
              red = "qo'y yili";
              break;
            case 8:
              red = "maymun yili";
              break;
            case 9:
              red = "tovuq yili";
              break;
            case 10:
              red = "it yili";
              break;
            case 11:
              red = "to'ngiz yili";
              break;
            default:
              red = "Enter an integer";
              break;
          }
          let res = (parseInt(D / 12)) % 5
    
          switch (res) {
            case 0:
              res = "Yashil";
              break;
            case 1:
              res = "Qizil";
              break;
            case 2:
              res = "Sariq";
              break;
            case 3:
              res = "Oq";
              break;
            case 4:
              res = "Qora";
              break;
            default:
              res = "Min number 1984";
          }
          console.log(res, red) 
    }
    else {
        console.log("Enter an integer")
    }
}

