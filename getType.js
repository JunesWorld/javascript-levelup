// Default = 이름 지정 안해도 된다.
// getType 없어도 된다. -> main.js에서도 이름 변경해서 사용 가능
// 하나의 데이터만 나올 수 있다!! vs getRandom
export default function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}