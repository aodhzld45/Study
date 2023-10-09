import Random from "./getRandom";

console.log(Random);

// 조건문 (if-else statement)

const a = Random();

if (a === 0) {
    console.log('a가 0입니다.');
} else if (a === 2) {
    console.log('a가 2입니다.');
} else {
    console.log('rest...');
}

// 조건문 (Switech Statment)

switch (a) {
    case 0:
        console.log('a가 0입니다.');
        break;
    case 2:
        console.log('a가 2입니다.');
        break;
    case 4:
        console.log('a가 4입니다.');
        break;
    default:
        console.log('나머지 결과값.');
        break;
}

// 반복문 (For Statement)
// for (시작조건: 종료조건: 변화조건) {}

const ulEL = document.querySelector('ul');

for(let i =0; i < 10; i +=1){
    const li = document.createElement('li');
    li.textContent = `list-${i+1}`;

    if ((i + 1) % 2 === 0) { // 짝수 li 부분만 클릭시 이벤트 발생하도록 조건문 추가.
        li.addEventListener('click', function() {
            console.log(li.textContent);
        });
    }
    ulEL.appendChild(li);
}