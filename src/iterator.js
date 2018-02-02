// function makeIterator(arr) {
//   let nextIndex = 0

//   // next() 方法返回结果对象
//   function next() {
//     if (nextIndex < arr.length) {
//       return {
//         value: arr[nextIndex++],
//         done: false
//       }
//     } else {
//       return {
//         value: undefined,
//         done: true
//       }
//     }
//   }

//   // 返回一个迭代器对象
//   return {
//     next: next
//   }
// }

// var iterator = makeIterator(['吃饭', '睡觉', '打豆豆'])

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

function *makeIterator(arr) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i]
  }
}

let gen = makeIterator(['吃饭', '睡觉', '打豆豆'])
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

