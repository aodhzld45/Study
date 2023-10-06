const boxEls = document.querySelectorAll('.box');

boxEls.forEach(function (boxEl, index) {
    boxEl.classList.add(`order-${index + 1}`);
    console.log(index, boxEl);
});


// 요소 하나만 select
const boxEl = document.querySelector('.box');

// Getter, 값을 얻는 용도
console.log(boxEl.textContent); // Box!!

// Setter, 값을 지정하는 용도
boxEl.textContent = 'Seo Js Study!!'; // 문자열 데이터를 지정
console.log(boxEl.textContent); // Box!!

// 메소드 체이닝
const testText = 'Seo~';
// split : 문자를 인수 기준으로 쪼개서 배열로 반환.
// reverse : 배열을 뒤집기.
// join : 배열을 인수 기준으로 분자로 병합해 반환.
const methodChaining = testText.split('').reverse().join(''); // 메소드 체이닝

console.log(testText);
console.log(methodChaining);



