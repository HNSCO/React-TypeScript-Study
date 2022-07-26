// 데이터 배열을 컴포넌트 배열로 변환하기 (map 이용)
import React from 'react';

// map 내 key (index)를 활용하면 컴포넌트 배열을 렌더링할 때 어떤 원소에 변동이 있는지 
// 빠르게 알아낼 수 있다.
// map으로 생성한 새 배열에 유일한 값(key값)이 없을 때만 index를 활용하는게 좋다. index를 활용하면 리렌더링이 비효율적임
const Iteration = () => {
    const names = ['data1', 'data2', 'data3'];
    const nameList = names.map((name, index) => <li key={index}>{name}</li>); // iteration item
return <ul>{nameList}</ul>; // 컴포넌트로 변환된 새 배열 추가
}

export default Iteration;