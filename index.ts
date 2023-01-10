/**
 * function return 값에 붙일 수 있는 never type
 * 1.return 값이 없어야함
 * 2.endpoint가 없어야함
 */

// never 타입 등장하는 경우 1
function 함수(a: string) {
  if (typeof a === "string") {
    console.log(a);
  } else {
    console.log(a);
  }
}
