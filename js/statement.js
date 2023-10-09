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