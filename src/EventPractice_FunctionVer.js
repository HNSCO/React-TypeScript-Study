// 함수형 컴포넌트로 이벤트 예제 적용
import React, {useState} from 'react';

const EventPractice_FunctionVer = () => { // 함수형 컴포넌트
    const [username, setUsername] = useState(''); // username value를 업데이트
    const [message, setMessage] = useState(''); // message value를 업데이트
    // 이벤트 처리
    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);
    const onClick = () => {
        alert(username + ': ' + message);
        setUsername('');
        setMessage('');
    };
    const onKeyPress = e => {
        if (e.key === 'Enter'){
            onClick();
        }
    };

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input type="text" name="username" placeholder="사용자명" value={username} onChange={onChangeUsername}></input>
            <input type="text" name="message" placeholder="아무거나 입력하세요" value={message} onChange={onChangeMessage} onKeyPress={onKeyPress}></input>
            <button onClick={onClick}>확인</button>
        </div>
    )


}

export default EventPractice_FunctionVer;