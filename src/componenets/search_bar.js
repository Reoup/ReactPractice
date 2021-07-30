import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props){ // 클래스가 생성될 때마다 자동적으로 실행
        super(props); // 호출하면서 이 부모 클래스의 메소드를 호출할 수 있음

        this.state = {term: ''}; // term은 search term을 의미하는 프로퍼티
    }

    render(){
        return (
            <div className="search-bar">
            <input 
            value = {this.state.term} // 제어 컴포넌트
            onChange={event => this.onInputChange(event.target.value)}  // onInputChange와 새 인풋값을 호출함
            />
            </div>
        );
    }

    onInputChange(term){
        this.setState({term}); // 1. setState
        this.props.onSearchTermChange(term); // 2. onSearchTermChange 콜백 함수를 호출하는 것
    }
}

export default SearchBar;