let evenNumber = [];
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    evenNumber.push(i);
  }
}

// const arr = [];
// for (let i = 1; i <= 100; i++) {
//   arr.push(i);
// }

// // menggunakan fungsi filter
// const evenNumber = arr.filter((even) => {
//   return even % 2 === 0;
// });

// // forEach() — mungkin sangat cocok ketika anda tidak ingin mengubah nilai datanya itu sendiri misalkan memasukan data ke database.
// const evenNumForEach = [];
// arr.forEach((num) => {
//     if (num % 2 === 0) {
//         evenNumForEach.push(num);
//     }
// });

// // map() — dapat digunakan untuk perubahan data dalam bentuk array.
// const evenNumMap = [];
// arr.map((num) => {
//   if (num % 2 === 0) {
//     evenNumMap.push(num);
//   }
// });

// console.log(evenNumber);
// console.log(evenNumForEach);
// console.log(evenNumMap);
