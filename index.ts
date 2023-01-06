// TypeScript로 html 변경과 조작할때
/**
 * 1.narrowing 문법
 * 2.instanceof 문법
 * 3.as 키워드
 * 4.오브젝트 옵셔널 체이닝 ?.
 * 5.strict 모드 끄기
 */

let title = document.querySelector("#title");
if (title !== null) {
  title.innerHTML = "테스트";
}

let link = document.querySelector(".link");
if (link instanceof HTMLAnchorElement) {
  link.href = "https://google.com";
}

let button = document.querySelector("#button");
button?.addEventListener("click", function () {});

/** 문제 */

const img = document.querySelector("#image");
if (img instanceof HTMLImageElement) {
  img.src = "new.jpg";
}

const naver = document.querySelectorAll(".naver");
naver.forEach((a) => {
  if (a instanceof HTMLAnchorElement) {
    a.href = "https://kakao.com";
  }
});
