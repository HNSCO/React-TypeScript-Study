import React, {useState} from 'react';

const CounterHook = () => {
    const [value, setValue] = useState(0); // [상태값, 상태설정 함수] 기본값은 0으로 설정

    return (
        <div>
            <p>현재 카운터 값은 <b>{value}</b>입니다.</p>
            <button onClick={() => setValue(value +1)}>+1</button>
            <button onClick={() => setValue(value -1)}>-1</button>
        </div>
    );
};

export default CounterHook;

