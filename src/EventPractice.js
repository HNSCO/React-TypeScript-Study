import React, {Component} from 'react';

class EventPractice extends Component{
    state = {
        message: ''
    }

    constructor(props){
        super(props);
        // 각 함수들을 바인딩하는 과정
        // - 함수가 호출될 때 this는 호출부에 따라 결정되므로 임의 메서드가 이벤트로 등록되어도
        // this를 컴포넌트 자신으로 제대로 가리키기 위해 바인딩하는 과정이 필요함 (없을 시 undefined)
        this.handleChange = this.handleChange.bind(this); 
        this.handleClick = this.handleClick.bind(this);
    }

    // handle~ : 이벤트 핸들링 메서드
    // 메서드 바인딩은 생성자 메서드에서 하는 것이 정석이지만, 새 메서드를 만들 때마다 추가해야 하는 번거로움이 있음
    // - 화살표 함수 형태로 메서드를 정의하면 constructor()에 바인딩해주지 않아도 된다 
    handleChange(e){ 
        this.setState({
            message: e.target.value
        });
    }

    handleClick(){
        alert(this.state.message);
        this.setState({
            message: ''
        });
    }

    render(){
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input type="text" placeholder="아무거나" name="message"
                // onChange={(e)=> { // e객체는 syntheticEvent, 네이티브 이벤트와 달리 이벤트가 끝나고 나면 초기화되어 정보를 참조할 수 없다
                //     console.log(e);
                //     }
                // }
                value={this.state.message}
                onChange={this.handleChange}
                />

                <button onClick={()=> {
                    alert(this.state.message);
                    this.setState({
                        message: ''
                    });
                }
                }>확인</button>
            </div>
        );
    }
}

export default EventPractice;