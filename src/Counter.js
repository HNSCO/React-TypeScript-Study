import React, {Component, useReducer} from 'react';

// useReducer : useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트 해줄 때 사용하는 hook
// Reducer : 현재 상태, 업데이트를 위해 필요한 정보를 담은 액션 값을 전달받아 새로운 상태로 반환하는 함수 (불변성을 지켜야 함)
//   - dispatch : 액션을 발생시키는 함수. dispatch(action)처럼 파라미터로 액션 값을 넣어주면 리듀서가 호출된다

function reducer(state, action){
    // action type에 따라 다른 작업 수행
    switch(action.type){ // 컴포넌트에서 호출된 액션
        case 'INCREMENT':
            return {value: state.value + 1}; // 리듀서 함수의 기본 값
        case 'DECREMENT':
            return {value: state.value -1};
        default:
            // 아무것도 해당되지 않을 때 기존 상태 그대로
            return state;
    }
}

const Counter = () => {
    // useReducer(리듀서 함수, 리듀서 함수의 기본 값)
    // 장점 : 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다
    const [state, dispatch] = useReducer(reducer, {value: 0}); // dispatch로 set하는 값은 action 값
    return (
        <div>
            <p>
                현재 카운터 값은 <b>[state.value]</b>
            </p>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>+1</button> 
            <button onClick={() => dispatch({type: 'DECREMENT'})}>-1</button>
        </div>
    );
};

export default Counter;


// class Counter extends Component{
//     constructor(props){
//         super(props);

//         // state 초기값 설장
//         this.state = {
//             number: 0
//         };
//     }
//     render(){
//         const {number, fixedNumber} = this.state; // state는 this.state로 조회한다.
        
//         return (
//             <div>
//                 <h1>{number}</h1>
//                 <button
//                     onClick ={()=>{ // 버튼 클릭 시 호출되는 onClick() 함수 (이벤트)
//                         //this.setState로 state에 새로운 값을 할당할 수 있다.
//                         this.setState({number: number + 1});
//                     }}
//                 >
//                 +1
//                 </button>
//                 <button
//                     onClick = {() => {
//                         this.setState({number: number - 1 });
//                     }}
//                 >
//                 -1
//                 </button>
//             </div>
//         )
    
//     }
// }

// export default Counter;
