import React, {useState, useEffect} from 'react'; 

// useEffect : 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 hook
// 클래스 컴포넌트의 componenetDidMount + componentDidUpdate를 합친 형태와 유사
// 기본적으로 렌더링되고 난 직후마다 실행되며, 두번째 파라미터에 어떤 값을 넣는지에 따라 실행 조건이 달라진다

const InfoHook = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    // 1. componenetDidMount + componentDidUpdate로 사용하기
    useEffect(() => {
        console.log('렌더링 완료');
        console.log({
            name,
            nickname
        }); 
    }, []); // 이렇게 두번째 파라미터에 빈 배열을 넣어주면 마운트될 때 (컴포넌트가 화면에 첫 실행될 때)만 실행된다. (업데이트 시에는 x)

    // 2. componentDidUpdate로 사용하기
    useEffect(() => {
        console.log({
            name,
            nickname
        })
    }, [name]); // 변경되는 값(name)이 update되는 시점에 호출됨
    
    // 3. unmount되기 전, update되기 직전 사용하기
    useEffect(() => {
        console.log('effect');
        console.log(name);
        return ()=> {
            console.log('cleanup');
            console.log(name);
        }
    })

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
                <b>이름:</b>{name}
            </div>
            <div>
                <b>닉네임:</b>{nickname}
            </div>
        </div>
    );
 };

 export default InfoHook;