import _, { get } from "lodash";
import getType from "../js/getType";
import compareOp from "../js/compareOp";
// var username = document.querySelector("#username");
// var userpassword = document.querySelector("#userpassword");

// var register = document.querySelector("#register")

// register.onclick = function name(params) {
//     alert("제출 버튼 클릭시 발생하는 이벤트.");
//     alert(username.value);
//     alert(userpassword.value);
// }

const els = document.querySelectorAll('div')
els.forEach(el => {
    console.log(el.dataset.fruitName)
})
console.log("Hello Js");
console.log("parcel test");
console.log(_.camelCase("camel test"));

// dataType 확인
console.log(getType(123));
console.log(getType(false));
console.log(getType("TEXT"));
console.log(getType(null));
console.log(getType({}));
console.log(getType([]));

// 비교 연산자 (Comparison operator)
console.log(compareOp(1,2));

const a = 1 === 1
const b = 'AB' === 'AB'
const c = false

console.log(a);
console.log(b);
console.log(c);

console.log('&&: ', a && b); // 비굣값이 전부 일치
console.log('||: ', a || b || c); // 비굣값이 하나라도 일치
console.log('!: ', !a); // 비굣값의 반대




