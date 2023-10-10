// 2023-10-10 js Class Study

// const seo = {
//     firstName : 'Seo',
//     lastName : 'Hyunseok',
//     getfullName: function () {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// console.log(seo);

function user(first, last) {
    this.firstName = first
    this.lastName = last
}
user.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}

// 생성자 함수 new keyWord
const seo = new user('Seo','hyunSeok'); // 생성자 함수를 통해 값이 할당된 seo는 인스턴스(instance)라고 함
const lee = new user('Lee','youKyeng'); // 생성자 함수를 통해 값이 할당된 seo는 인스턴스(instance)라고 함

console.log(seo.getFullName());  
console.log(lee);

// 프로토타입(prototype)을 사용해서 new(생성자 함수 생성)라는 keyword와 함께 생성자 함수로 인스턴스를 만들어 내는 개념들을 JavaScript의 Class 라고 함.