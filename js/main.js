import _ from "lodash";
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

console.log("parcel test");
console.log(_.camelCase("camel test"));


