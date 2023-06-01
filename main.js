// JS 데이터
import _ from 'lodash'

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
 * Google: Array mdn
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
// fruits.reverse()

console.log(numbers)
console.log(fruits)


/**
 * 객체
 * Google : Object mdn
 */

// Objcet.assign() : 정적 method
// 열거할 수 있는 하나 이상의 출처 객체(source)로부터 대상 객체(target)로 속성을 복사할 때 사용
// 대상 객체를 반환

// const target = { a: 1, b: 2}
// const source = { b: 4, c: 5}

// const returnedTarget = Object.assign(target, source)
// console.log(target) // {a: 1, b: 4, c: 5}
// console.log(returnedTarget) // {a: 1, b: 4, c: 5}

const userAge = {
  // key : value
  name: 'June',
  age: 30
}
const userEmail = {
  name: 'June',
  email: 'june@gmail.com'
}

// const target = Object.assign(userAge, userEmail)
// console.log(target) // {name: "June", age: 30, email: "june@gmail.com"}
// console.log(userAge)// {name: "June", age: 30, email: "june@gmail.com"}
// // 참조형 Data = {}, [], function = 메모리에 저장 = userAge와 target은 같은 곳을 바라보고 있다
// console.log(target === userAge) // true

// const target = Object.assign({}, userAge, userEmail)
// console.log(target) // {name: "June", age: 30, email: "june@gmail.com"}
// console.log(userAge)// {name: "June", age: 30}
// console.log(target === userAge) // false

const target = Object.assign({}, userAge)
console.log(target) // {name: "June", age: 30}
console.log(userAge)// {name: "June", age: 30}
// 복사되었지만 다른 Memory에 저장
console.log(target === userAge) // false

// const a = { k: 123 }
// const b = { k: 123 }
// console.log(a === b) // false


// Object.keys
const user = {
  name: 'June',
  age: 30,
  email: 'june@gmail.com'
}

const keys = Object.keys(user)
console.log(keys) // ['name', 'age', 'email']
console.log(user['email']) // june@gmail.com

const values = keys.map(key => user[key]) // callback 3번 반복
console.log(values) // ["June", 30, "june@gmail.com"] 



// * 구조 분해 할당 (Destructuring assignment)
// * 비구조화 할당

const userA = {
  name: 'June',
  age: 30,
  email: 'june@gmail.com',
  address: 'USA'
}
// 기본값 지정해줄 수 있다.
const { name: june, age, address = 'Korea' } = userA
// E.g, user.address

console.log(`사용자의 이름은 ${june}입니다.`)
console.log(`${june}의 나이는 ${age}세입니다.`)
console.log(`${june}의 이메일 주소는 ${userA.email}입니다.`)
console.log(userA.address) // USA

const [, , g] = fruits
console.log(g) // Cherry


// 전개 연산자 (Spread) : ...

console.log(fruits) // ["Apple", "Banana", "Cherry"] : 배열
console.log(...fruits) // Apple Banana Cherry : 문자 = console.log('Apple', 'Banana', 'Cherry')

// ...c = rest parameter : 
// function toObject(a, b, ...c) {
//   return {
//     a,
//     b: b,
//     c: c
//   }
// }
const toObject = (a, b, ...c) => ({ a, b, c })
console.log(toObject(...fruits)) // {a: "Apple", b: "Banana", c: "Cherry"}


// 데이터 불변성(Immutability)
// 원시 데이터 : String, Number, Boolean, undefined, null
// |- 쉽게 말해 메모리에 저장되어 있으면(생긴것이 같다면) === true

// 참조형 데이터: Object, Array, Function
// |- 같은 메모리를 바라보고 있다. 그래서 값을 바꾸면 모두 변경된다.
// let a = { k: 1 }
// let b = { k: 1 }
// console.log(a, b, a === b) // { k: 1 } { k: 1 } false
// a.k = 7 
// b = a  
// console.log(a, b, a === b) // { k: 7 } { k: 7 } true

/**
 * 복사
 * 얇은 복사 : 참조형 데이터(객체, 배열), 내부에 다른 데이터가 없다면 사용
 * 깊은 복사 : 참조형 데이터 안에 또 다른 참조형 데이터가 있을 때 사용 ex) Emails
 *  |- Google : lodash mdn -> clone
 */

// userB 내용만 바꾸어도 copyUser 값도 바뀐다
// const userB = {
//   name: 'June',
//   age: 30,
//   emails: ['june@gmail.com']
// }
// const copyUser = userB
// console.log(copyUser === userB) // true

// userB.age = 22
// console.log('userB', userB) // [Log] userB – {name: "June", age: 22, emails: ["june@gmail.com"]}
// console.log('copyUser', copyUser) // [Log] copyUser – {name: "June", age: 22, emails: ["june@gmail.com"]} 


// 얕은 복사(Shallow copy)
const userB = {
  name: 'June',
  age: 30,
  emails: ['june@gmail.com']
}
// 얕은 복사
// const copyUser = Object.assign({}, userB)
// const copyUser = {...userB}

// 깊은 복사
const copyUser = _.cloneDeep(userB)
console.log(copyUser === userB) // false

userB.age = 22
console.log('userB', userB) // [Log] userB – {name: "June", age: 22, emails: ["june@gmail.com"]}
console.log('copyUser', copyUser) // [Log] copyUser – {name: "June", age: 30, emails: ["june@gmail.com"]} 


// 깊은 복사(Deep copy)
// lodash pkg 도움을 받는다
userB.emails.push('sung@gmail.com')
console.log(user.emails === copyUser.emails) // 얕은 복사 일 때 =true : 같은 메모리를 바라본다. / 깊은 복사 일 때 = false
console.log('userB', userB) // email 2개
console.log('copyUser', copyUser) // email 1개
