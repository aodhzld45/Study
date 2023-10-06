const boxEls = document.querySelectorAll('.box');

boxEls.forEach(function (boxEl, index) {
    boxEl.classList.add(`order-${index + 1}`);
    console.log(index, boxEl);
});


//요소 하나만 select
const boxEl = document.querySelector('.box');

//Getter, 값을 얻는 용도
console.log(boxEl.textContent); // Box!!

//Setter, 값을 지정하는 용도
boxEl.textContent = 'Seo Js Study!!'; // 문자열 데이터를 지정
console.log(boxEl.textContent); // Box!!



