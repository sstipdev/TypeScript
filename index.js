// TypeScript로 html 변경과 조작할때
/**
 * 1.narrowing 문법
 * 2.instanceof 문법
 * 3.as 키워드
 * 4.오브젝트 옵셔널 체이닝 ?.
 * 5.strict 모드 끄기
 */
var title = document.querySelector("#title");
if (title !== null) {
    title.innerHTML = "테스트";
}
var link = document.querySelector(".link");
if (link instanceof HTMLAnchorElement) {
    link.href = "https://google.com";
}
var button = document.querySelector("#button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () { });
/** 문제 */
var img = document.querySelector("#image");
if (img instanceof HTMLImageElement) {
    img.src = "new.jpg";
}
var naver = document.querySelectorAll(".naver");
naver.forEach(function (a) {
    if (a instanceof HTMLAnchorElement) {
        a.href = "https://kakao.com";
    }
});
