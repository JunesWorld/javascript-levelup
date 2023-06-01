// JS 데이터
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