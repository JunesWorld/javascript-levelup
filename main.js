// JS 데이터

// module.js
// Default export : 이름 지정 x
// Named export : 이름 지정
import _ from 'lodash' // from `node_modules`
import getType from './getType' // getType.js
// import { random, userC as kevin } from './getRandom' // getRandom.js
import * as R from './getRandom' // *(와이드카드) = 모든 내용
import myData from './myData.json'
import axios from 'axios'

// console.log(userC)
// console.log(kevin) // as
console.log(R)

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

const strA = pi.toFixed(2) 
console.log(strA) // 3.14
console.log(typeof strA) // string

// 전역함수 : parseInt, parseFloat
const integer = parseInt(strA)
const float = parseFloat(strA)
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


/**
 * Lodash -> Google
 * import _ from 'lodash'
 * _.uniqueBy(중복되는 값이 있는 배열 데이터, 중복을 구분할 고유한 속성)
 * 합치기 전 = _.unionBy(usersA, usersB, 'userId')
 * _.find(배열 데이터, 객체 데이터)
 * _.findIndex(배열 데이터, 객체 데이터)
 * _.remove(배열 데이터, 객체 데이터)
 */

// [배열] {객체}
const usersA = [
  { userId: '1', name: 'JUNE' },
  { userId: '2', name: 'Neo' }
]
const usersB = [
  { userId: '1', name: 'JUNE' },
  { userId: '3', name: 'Amy' }
]
// concat = 병합 (중복)
const usersC = usersA.concat(usersB)
console.log('concat', usersC) // 1,2,1,3
// _.uniqueBy(중복되는 값이 있는 배열 데이터, 중복을 구분할 고유한 속성)
console.log('uniqBy', _.uniqBy(usersC, 'userId')) // 1,2,3

// 합치기 전 = _.unionBy(usersA, usersB, 'userId')
const usersD = _.unionBy(usersA, usersB, 'userId')
console.log('unionBy', usersD)

const users = [
  { userId: '1', name: 'JUNE' },
  { userId: '2', name: 'NEO' },
  { userId: '3', name: 'Amy' },
  { userId: '4', name: 'Evan' },
  { userId: '5', name: 'Lewis' }
]

const foundUser = _.find(users, { name: 'Amy' })
const foundUserIndex = _.findIndex(users, { name: 'Amy' })
console.log(foundUser) 
console.log(foundUserIndex)

_.remove(users, { name: 'JUNE' })
console.log(users)


/**
 * JSON (JavaScript Object Notation)
 * 자바스크립트의 객체 표기법
 * " "로 표기
 * package.json & myData.json 파일 참고!
 * import myData from './myData.json'
 * 자동으로 변환되서 객체데이터로 출력되는 것이지 json 파일은 하나의 문자 데이터이다!
 * JSON.stringify = 문자데이터화 해줌 str
 * JSON.parse = str를 parse라는 전역객체에 인수로 넣어 분석해서 obj로 재조립 -> 다시 자바스크립트의 실제 데이터로 변환!
 */

console.log(myData)

const userE = {
  name: 'June',
  age: 30,
  email: [
    'june@gmail.com',
    'sung@gmail.com'
  ]
}
console.log('userE', userE)

// JSON.stringify = 문자데이터화 해줌 str
const str = JSON.stringify(userE)
console.log('str', str)
console.log(typeof str)

// JSON.parse = str를 parse라는 전역객체에 인수로 넣어 분석해서 obj로 재조립 -> 다시 자바스크립트의 실제 데이터로 변환!
const obj = JSON.parse(str)
console.log('obj', obj)


/**
 * Storage
 * Google : local storage mdn
 * 작업관리자 Application
 * |- Local : 데이터 만료 x (활용성이 높다)
 * |- Session : 페이지를 닫을 때 데이터가 사라진다.
 */

const userF = {
  name: 'June',
  age: 30,
  email: [
    'june@gmail.com',
    'sung@gmail.com'
  ]
}

// localStorage.setItem('userF', userF) // local storage [object Object]

// 문자 데이터로 출력 & Storage에서 삭제되지 않는다
localStorage.setItem('userF', JSON.stringify(userF)) 
console.log('---')
console.log(JSON.parse(localStorage.getItem('userF')))

// 삭제
// localStorage.removeItem('userF')

// 수정
// const str = localStorage.getItem('user')
// const obj = JSON.parse(str)
// obj.age = 22
// console.log(obj)
// localStorage.setItem('user', JSON.stringify(obj))


/**
 * OMDb API -> Google
 * 영화 데이터를 받아 main.js에서 출력
 */

// Query String
// 주소?속성=값&속성=값&속성=값
// 속성
// |- apikey : 사용자 인증
// |- s = 영화정보 : 어떠한 영화 정보를 검색하고 싶은지

// 사용방법 -> OMDb API -> Google
// Usage : 주소 복사(http://www.omdbapi.com/?apikey=[yourkey]&)
// |- yourkey : 7035c60c / s=frozen
// 완성 = https://www.omdbapi.com/?apikey=7035c60c&s=frozen

// main.js에서 요청 처리해 줄 수 있게 axios 활용!
// https://github.com/axios/axios 
// 설치 = ctrl + c
// npm install axios 
// import axios from 'axios'

function fetchMovies() {
  axios
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
    .then(res => {
      console.log(res)
      const h1El = document.querySelector('h1')
      const imgEl = document.querySelector('img')
      h1El.textContent = res.data.Search[0].Title
      imgEl.src = res.data.Search[0].Poster
    })
}
fetchMovies()