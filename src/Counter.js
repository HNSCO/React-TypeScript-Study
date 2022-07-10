import React, {Component} from 'react';

class Counter extends Component{
    constructor(props){
        super(props);

        // state 초기값 설장
        this.state = {
            number: 0
        };
    }
    render(){
        const {number, fixedNumber} = this.state; // state는 this.state로 조회한다.
        
        return (
            <div>
                <h1>{number}</h1>
                <button
                    onClick ={()=>{ // 버튼 클릭 시 호출되는 onClick() 함수 (이벤트)
                        //this.setState로 state에 새로운 값을 할당할 수 있다.
                        this.setState({number: number + 1});
                    }}
                >
                +1
                </button>
                <button
                    onClick = {() => {
                        this.setState({number: number - 1 });
                    }}
                >
                -1
                </button>
            </div>
        )
    
    }
}

export default Counter;
