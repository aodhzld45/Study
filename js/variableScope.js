// 변수의 유효 범위 (Variable Scope)
// var, let, const 

export default function scope() {
    if (true) {
        console.log(a);
        var a = 123;
    }
}

// var, let const
// 1. var - 재할당 및 업데이트가 가능 / 선언되면 ({}) 중괄호에 국한된다.
// 2. let - 업데이트는 가능하지만 재할당은 불가능 
// 3. const - 일정한 상수값을 유지 -> 재할당 및 업데이트가 불가능

// -> var와 let은 초기화 하지 않은 상태에서 선언이 가능 / const는 선언중에 초기화 해야한다.