// dataType을 확인하기 위한 getType 함수
// 외부에서 사용하기 위해 export default(내보내지는 함수)로 선언
export default function getType(data) {
    return Object.prototype.toString.call(data).slice(8, -1);
}