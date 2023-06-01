// JS 데이터

/**
 * 화살표 함수
 * = 다른 로직 없이 return을 통해 하나의 실행문만 있으면 중괄호 생략하고 바로 실행문 입력
 */
// Google : String mdn

// String: "", '', ``
// Number
// Boolean: true, false
// undefined
// null
// Array: []
// Object: {}

// String.prototype.indexOf()
// 0부터 시작하는 index값 반환(일치하는 값이 없으면 -1 반환)

const result = 'Hello world!'.indexOf('world')
console.log(result) // 6

// const str = '0123'
// console.log(str.length)

// const str = 'Hello world!'
// console.log(str.indexOf('world')) // 6

// Boolean
// console.log(str.indexOf('June') !== -1) // false

// Slice
// console.log(str.slice(0, 3)) // Hel (0~2번까지만 출력)

// Replace
// console.log(str.replace('world', 'JUNE')) // Hello JUNE!
// console.log(str.replace(' world!', '')) // Hello

// 정규표현식
// const str = 'thesecon@gmail.com'
// console.log(str.match(/.+(?=@)/)[0]) // domain 주소 제거되고 출력

// 공백제거 trim
// const str = '    Hello world  '
// console.log(str.trim())


/**
 * 숫자
 * Google : Math mdn
 */

const pi = 3.14159265358979
console.log(pi)

const str = pi.toFixed(2) 
console.log(str) // 3.14
console.log(typeof str) // string

// 전역함수 : parseInt, parseFloat
const integer = parseInt(str)
const float = parseFloat(str)
console.log(integer) // 3
console.log(float) // 3.14
console.log(typeof integer, typeof float) // number number

// 절대값 abs
console.log('abs: ', Math.abs(-12)) // 12
console.log('min: ', Math.min(2, 8)) // 2
console.log('max: ', Math.max(2, 8)) // 8
// 올림 ceil
console.log('ceil: ', Math.ceil(3.14)) // 4
// 내림 floor
console.log('floor: ', Math.floor(3.14)) // 3
// 반올림 round
console.log('round: ', Math.round(3.14)) // 3
// random 0.xxx
console.log('random: ', Math.random()) 


/**
 * 배열
 * Array mdn
 */
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

console.log(numbers[1]) // 2
console.log(fruits[2]) // Cherry

// .length = item 갯수 반환
console.log(numbers.length) // 4
console.log(fruits.length) // 3
console.log([1, 2].length) // 2


// .concat() 
// = 두 개의 배열 데이터를 병합해서 새로운 배열 데이터를 반환, 
// 원본 배열 데이터 손상x
console.log(numbers.concat(fruits))
console.log(numbers)
console.log(fruits)


// .forEach()
// callback 함수
// 새로 반환 X
fruits.forEach(function (element, index, array) {
  console.log(element, index, array)
})


// .map() = 새로운 배열[]로 출력
const a = fruits.forEach((fruit, index) => {
  console.log(`${fruit}-${index}`)
}) // Apple-0 / Banana-1 / Cherry-2
console.log(a) // undefined

// const b = fruits.map(function (fruit, index) {
//   return `${fruit}-${index}`
// })
// console.log(b) // ["Apple-0", "Banana-1", "Cherry-2"]

// const b = fruits.map(function (fruit, index) {
//   return {
//     id: index,
//     name: fruit
//   }
// })
// console.log(b) // [{id: 0, name: "Apple"}, {id: 1, name: "Banana"}, {id: 2, name: "Cherry"}]

const b = fruits.map((fruit, index) => ({
    id: index,
    name: fruit
  }))
console.log(b) // [{id: 0, name: "Apple"}, {id: 1, name: "Banana"}, {id: 2, name: "Cherry"}]


// .filter()
// const c = numbers.map(number => {
//   return number < 3
// })
// console.log(c) // [true, true, false, false]
const c = numbers.map(number => number < 3)
console.log(c) // [true, true, false, false]

// const d = numbers.filter(number => {
//   return number < 3
// })
// console.log(d) // [1, 2]
const d = numbers.filter(number => number < 3)
console.log(d) // [1, 2]


// .find() .findIndex()
// 정규표현식(/^B/) = ^(시작)
const e = fruits.find(fruit => /^B/.test(fruit)) 
console.log(e) // Banana

const f = fruits.findIndex(fruit => /^B/.test(fruit)) 
console.log(f) // 1


// .includes()
// const a = numbers.includes(3)
// console(a) // true

// const b = fruits.includes('JUNE')
// console.log(b) // false


// .push() = 가장 뒷쪽에 삽입 
// .unshift() = 가장 앞쪽에 삽입
// .reverse()
// .splice(index번호, 지울 갯수) / .splice(index번호, 지울 갯수, 끼워 넣을 item)
// 원본 수정됨 주의!
numbers.push(5)
console.log(numbers) // [1, 2, 3, 4, 5]

numbers.unshift(0)
console.log(numbers) // [0, 1, 2, 3, 4, 5]

numbers.reverse()
fruits.reverse()

console.log(numbers)
console.log(fruits)