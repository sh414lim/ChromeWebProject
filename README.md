## 브라우저 렌더링 과정

#### 브라우저 주소창에 www.naver.com 을 치면 네이버 서버를 찾아간다
#### DNS(실제 서버가 어디에있는지 알고 있는 서버)가 연결해줄 곳을 찾음
#### 여기서 주소 앞에 https 가 붙었다면 https 방식으로 통신
#### 서버의 기본설정이 대부분 index.html되어 있어 서버에서 이 파일을 클라이언트로 보냄
#### 브라우저는 텍스트로 이루어진 index.html 파일을 파싱
- index.html 페이지는 방문자가 사이트를 요청할 때 다른 페이지가 지정되지 않은 경우 웹 사이트에 표시된 기본페이지에 (Redirect) 사용되는 가장 일반적인 이름

#### 한줄한줄 읽으면서 DOM 트리를 만들어나간다
#### 중간에 link태그를 만나 css 요청이 발생하면 요청과 응답과정을 거치고 css를 파싱함
#### CSS 파싱이 끝나면 중단된 html 을 다시 읽고 DOM 트리를 완성
#### 완성된 DOM트리와 CSSOM 트리를 합쳐 Render Tree를 만들고 그린다

- JavaScript
#### 중간에 HTNM 파서는 Script태그를 만나게 되면 javaScript코드를 실행하기 위해 파싱중단 
#### ###제어권한을 자바스크립트 엔진에게 넘기고 자바스크립트 코드 또는 파일을 로드해서 파싱하고 실행

#### HTTP와 HTTOS 통신 방식의 차이

#### 결정적인 차이는 보안
#### HTTP 방식은 네트워크상에서 정보를 누군가가 마음대로 열람,수정이 가능

#### HTTPS 는 누가 볼수없도록 막음

#### HTTP 방식이 Https 방식보다 빠르다


## OOP(Object Oriented Programming ) 객체지향 프로그래밍

#### 1.상속
#### 클래스 개념에서 상위 클래스(부모)로 부터 하위 클래스(자식)이 유산을 물려받는것과 같이 부모의 메소드난 변수를 사용할 수 있는것을 말함

#### 2.다형성
#### 같은 함수가 있다고 가정하였을때 그 함수가 매개변수에 따라 다른 역할을 할 수 도 있다

#### 3. 캡슐화
#### 보통 데이터를 은닉시키니다고 표현하는데, 외부에서 쉽게 데이터를 접근 할수 없게 만들기도 하고 데이터 구조아 데이터를 다르는 방법들을 한데다 묶는것

#### 4.추상화
#### 공통적인 속성이나 기능을 묶어서 이름을 붙이는것 

## 함수형 프로그래밍(Function Programming)

#### 함수형 프로그래밍
#### 함수형 프로그래밍은 순수함수와 보조 함수의 조합을 통해 로직내에 존재하는 조건문 과 반복문을 제거하여 복잡성을 해결하고 변수의 사용을 억제하여 상태 변경을 피하려는 프로그래밍 패러다임

#### 순수함수?
#### 순수함수는 같은 입력이 주어지면 같은 출력을 반환해야하고 ,sideeffect(부작용)이 없어여 한다
# 결국 함수형 프로그래밍은 순수함수를 통해 sideeffect를 최대한 억제하여 오류를 피하고 프로그램의 안정성을 높이려는 노력의 한방법

## OOP 와 함수형 프로그래밍의 차이점

#### 객체지향 은 객체 안에 상태를 저장하고 이 상태를 이용해서 메소드를 추가한다
#### 함수형 프로그래밍은 상태를 제어하는 것보다 상태를 저장하지 않고 없애는데 주력한다
#### 객체 지향은 상태를 저장하는 필드와 그 필드들을 이용해 기능을 제공하는 메소드를 만들고 클래스를 만든다
#### 함수형은 몇몇 자료구조(list,map,set)등 을 이용한 최적화된 동작들을 만들어낸다

## 웹 프로토콜
# 웹에서 쓰이는 통신규약
# 통신규약이라는 것은 쉽게 설명하면 통신을 할때 내가 이렇게 할게 너는 이렇게 해줘라고 약속하는것

# Http 통신이랑?
# 웹 프로토콜중 하나로 Hyper text Transfer Protocol의 약자입니다
# 인터넷에서 데이터를 주고 받을 수 있는 통신규약 정도 요청과 응답

# Http 1.1과 2.0의 차이
# 가장 큰차이는 소고도
# 2.0같은 경우는 헤더를 압축해서 보내기도 하고 한변의 연결로 동시에 여러 메시지를 주고 받을 수도 있다.


## 비동기 프로그래밍(Asynchronous)
#### AJAX란?
#### 자바스크립트를 이용해 비동기적으로 서버와 브라우저가 데이터를 교환할 수 잇는 통신 방식
#### 보통은 서버로부터 웹페이지가 반환되면 전체를 갱신해야하는데 AJAX를 이용하면 페이지 일부만을 갱신하고도 동일한 효과를 볼 수 있다.
#### 즉 갱신하면 되므로 빠르고 부드러운 화면효과를 기대할 수 있음

## Promise 와 Callback의 차이점

#### Promise?
#### 자바스크립트에서 비동기 처리를 위해서 사용되는 패턴
#### 프로미스는 주로 서버에서 받아온 데이터를 화면에 표시할 때 사용
#### Callback 같은 경우 함수의 처리 순서를 보장하기 위해서 함수를 중첩하게 사용되는 경우 발생해 콜백핼이 발생하는 단점과 에러처리가 힘들다는 담점
#### Pending(대기) : 비동기 처리 로직이 아직 완료되지 않은 상태
#### Fulfilled(이행) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
#### Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태 
-그래서 나온게 Promise이며 ES6부터 정식 채택되어 사용중이다





# Promise 생성자 함수를 통해 인스턴스 화
//promise 객체의 생성
const promiose =new Promise((resolve,reject)=>{
    //비동기 작업을 수행한다

    if(/* 비동기 작업 수행 성공*/){
        resolve('result)
        ;
    }
    else{
        /*비동기 작업 수행 실패*/
        reject('failure reason)
        }

}

#### 비동기 처리에 성공하면 resolve 메서드를 호출해서 비동기 처리결과를 후속처리 메소드로 전달한다
#### 비동기 처리에 실패하면 reject 메소드를 호출해서 에러메시지를 후속처리 메소드로 전달한다
#### 후속 처리 메소드는 then 과 catch가 있다 둘다 Promise를 반환한다
#### then 과 catch가 있다 둘단 Promise를 반환한다
#### then을 가지고 메소드 체이닝을 통하여서 콜백헬 문제를 해결가능

## Async,Awit 와 Promise 차이

#### Promise를 더욱 쉽게 사용할 수 있도록 ES2017(ES8)문법이다
#### 함수의 앞부분에 async 키워드를 추가하고 함수 내부에서 Promise 앞부분에 await 키워드를 사용한다

#### async await 를 사용할 경우 코드가 간결해지지만 에러처리를 잡기 위해 try catch 를 사용해야한다 동기적인 코드 흐름으로 개발가능하다


## asunc / await 의 기초
### async function
#### async function 선언은 AsyncFunction 객체를 반환하는 하나의 비동기 함수

#### 이벤트 함수는 이벤트 루프를 통해 비동기적으로 작동하는 함수로
#### 암시적으로 Promise를 사용하여 결과를 반환한다
#### 그러나 비동기 함수를 사용하는 코드의 구문과 구조는 표준 동기 함수를 사용하는 것과 많이 비슷하다

### 스코프
#### 스코프(유효범위)
#### 변수는 자신이 선언된 위치에 의해 자시이 유효한 범위 즉 다른 코드가 변수 자신을 참조할 수 있는 결정된다
#### 모든식별자(변수 이름 , 함수이름 클래스 이름 등) 자신이 선언된 위치에 의해  다른 코드가 식별자 자신을 참조할 수 있는 유효범위가 결정된다
### 스코프는 식별자가 유효한 범위
- 스코프는 전역과 지역으로 구별가능
- 코드의 가장 바깥 영역(전역 스코프) 전역변수
- 함수 몸체 내부(지역 스코프) 지역변수

### 스코프 체인
#### 스코프가 함수의 중첩에 의해 계층적 구조를 갖느다
#### 스코프가 계층적으로 연결된 것을 스코프 체인이라고 한다
- 최상단 에는 전역 스코프 위치


## 실행 컨텍스트(Execution Context)
### 자바스크립트르의 코드들이 실행되기 위한 환경
#### 전역 컨텍스트 , 함수 컨텍스트 2가지 존재
#### 전역컨텍스트 하나 생성후에 함수 호출할 때마다 함수 컨텍스트가생성
#### 컨택스트를 생성시에 변수 객체 스코프체인 this가 생성된다
#### 컨텍스트 생성 후 함수가 실행되는데 사용되는 변수들은 변수 객체 안에서 값을 찾고  없다면 스코프 체인을 따라 올라가며 찾음
#### 함수 실행이 마무리되면 해당 컨텍스트는 사라짐 페이지가 종료되면 전역 컨텍스트가 사라짐
### 즉 자바스크립트의 코드가 실행되기 위해서는 변수객체 스코프체인 this 정보들을 담고 있는곳을 실행 컨텍스트라고 부른다

###  렉시컬 환경
#### 렉시컬 환경은 식별자와 식별자에 바인딩된 값
#### 상위 스코프에 대한 참조를 기록하는 자료구조로 실행 컨텍스트를 구성하는 컴포넌트 다
#### 실행 컨텍스트 스택이 코드의 실행 순서를 관리한다면 렉시컬 환경은 스코프와 식별자를 관리한다.
- 렉시컬 스코프 자바스크립트 엔진은 함수를 어디서 호출 했는지가 아니라 함수를 어디에 정의했는지에 따라 상위스코프를 결정(이것을 렉시컬 스코프라고 부른다)

### 자바스크립트의 호이스팅
#### 변수를 선언하고 초기화 했을대 선언부분이 최상단으로 끌어올려지는 현상
#### 함수의 경우 함수 표현식은 호이스팅이 적용되지 않는다
#### 일반 함수 선언문은 함수 호이스팅이 적용

## 클로저
### 함수가 선언된  렉시컬 환경
### 반환된 내부함수가 자신이 선언됬을때 의 환경인 스코프를 기억하여 자신이 선언되었을때의 환경밖에서 호출되어도 그환경에 접근 할 수 있는 함수
# 자신이 생성될때의 환경을 기억하는 함수
### 사용 이유
#### 현재 상태를 기억하고 변경된 최신 상태를 유지하기 위해
#### 전역 변수의 사용을 억제 하기위해
#### 정보를 은닉하기 위해
#### 

## DOM
### DOM 은 HTML 문서의 계층적 구조를 표현하여 이를 제어할 수 있는 API, 즉 프로퍼티와 메서드를 제공하는 트리 자료구조다

### 자바스크립트의 배열이 실제 자료구조 배열이 아닌 이유
#### 자바스크립트 배열은 실제 자료구조의 배열과 다르게 HashMap구현
#### HashMap을 구현하기 위해서는 연결리스트로 구현하게된다

### 이벤트 루프
#### 자바스크립트는 싱글 스레드 기반 언어이다
- 프로세스가 할당받은 자원을 이용하는 실행의 단위
#### 함수를 실행하면 함수 호출이 스택에 순차적으로 쌓이고 스택의 맨위에서 부터 아래로 한번에 하나의 함수만 처리할 수 있다.
### 하지만 자바스크립트는 이벤트 루프를 통한 동시성 지원
-동시에 일어나는 것이 아니라 동시에 일어나는 것처럼 보이게 하는것

#### 이벤트 루프는 콜 스택에서 실행중인게 있는지 확인
#### Event queue에 작업이 있는지 확인해서 콜스택이 비어있다면 이벤트 큐 내의 작업이 콜스택으로 이동되어서 실행된다


## 프로토타입
#### 자바스크립트는 프로토타입을 기반으로 상속을 구현하여 불필요한 중복을 제거 (중복을 제거하는 방법은 기존의 코드를 재사용하는것)

#### 즉 생성자 함수가 생성할 모든 인스턴스가 공통적으로 사용할 프로퍼티나 메소드를 프로토타입에 미리 구현해 놓음으로써 또 구현하는 것이아니라 상위*(부모) 객체인 프로토타입의 자산을 공유하여 사용할 수 있다.

### __proto__ 접근자 프로퍼티로 자신의 프로토타입 즉 Prototoype 내부슬룻에 접근할 수 있음
##### 프로퍼티는 키:값 형식으로 구성
##### 프로퍼티에는 함수도 지정할 수 있다
##### 객체에 함수를 정의할 경우 이를 메소드라고 지칭


### 프로토타입 체인
#### 객체의 프로퍼티에 접근하려고 할때 객체에 접근하려는 프로퍼티가 없으면 __proto__ 접근자 프로퍼티가 가리키는 링크를 따라 자신의 부모역할을 하는 프로토타입의 프로퍼티를 순차적 검색
#### 프로토타입 체인의 최상위 객체는 Opject.prototype이다
#### 이 객체의 프로퍼타와 메소드는 모든 객체에게 상속된다
#### prototype 프로퍼티는 생성자 함수가 생성할 인스턴스의 프로토타입을 가르킨다


## This 
### 일반함수의 this와 화살표 함수의 this
#### 자바스크립트의 내부함수는 일반함수 메소드 콜백함수 어디에서 선언되었든지 전역객체를 가리킨다
#### 일반함수 this 는 windows 를 가리키며 this는 언제나 상위 스코프 this를 가치킨다

# Babel
## Babel 이란
### babel 은 트렌스파일러로서 한언어로 작성된 소스코드를 비슷한 수준의 추상화를 가진 다른 언어로 변환

### ES6 추가스팩
#### let const arrow Function 클레스 프로미스 스프레드 연산자
###  ES6 사양에서 메서드는 메서드 축약표현으로 정의된 함수만을 의미한다
- 일반적으로 메서드는 객체에 바인딩된 함수를 일컫는 의미

## Arrow Function
- 회실표 함수는 함수 선언문으로 정의할 수 없고 함수 표현식으로 정의한다
### 화살표 함수는 표현만 간략한 것이 아니라 내부 동작도 기존의 함수보다 간략하다


# React

### 특징
#### VirtualDOM 을 사용
#### 서버 사이드 렌더링 지원
#### 단방햔 데이터 흐름 또는 데이터 바인딩을 따른다
#### UI 구서요소를 재사용할 수 있도록 개발

### React 는 사용자 인터페이스를 구축하기 위한 선언적이고 효율적이며 유연한 javaScript 라이브러리
### 단일 페이지 응용 프로그램에서 사용자 인터페이스를 구성하는데 사용되는 오픈 소스 프론트엔드 JS 라이브러리

### state란?
#### Component State 는 component 의 life cycle 동안 변경될 수 있는 정보를 담고 있는 객체

### props란?
#### Props 는 HTML 태그 속성과 유사한 규칙을 사용하여 React component에 전달되는 값을 포함하는 단일 값 또는 객체

### state 와 props의 차이점
#### 둘다 js 객체이지만 props는 함수 매개별수로 같이 component 요소로 전달 state는 component 안에서 관리되고 사용할 변수 선언과 비슷하다.

## 컴포넌트라고 불리는 작고 고립된 코드의 파편을 이용하여 복잡한 UI를 구성하도록 돕는다 

## React 라이프 사이클
### React 의 클래스형 컴포넌트에서 사용하는 LifeCycle API는 컴포넌트가 DOM 위에 생성되거나 사라질대 혹은 업데이트 될때 호출되는 API

## 클래스형에 라이프사이클 메소드에는 크게 mount update,unmount 3가지 과정으로 나뉜다.
### mount
#### 컴포넌트가 만들어질때 componentDidMount 에서 비동기 처리같은것을 주로한다

### update
#### shouldComponentUpdate 에서 업데이트 직전에 랜더링시(상태가 변경)에 조건으로 재렌더링을 하냐마냐 결정을 할 수 있고,componentDidUpdate 업테이트 직후

### unmount 에서 컴포넌트가 소멸된 시점에 타이머나 비동기 API를 제거 하는 곳이다

### render() 함수
#### 라이프사이클 메서드 중 유일한 필수 메서드
#### render() 함수 메서드 안에서 this.props 와 this.state 에 접근할 수 있으며 리액트 요소를 반환한다
#### 요소는 div 같은 태그가 될 수도 있고 따로 선언한 컴포넌트가 될 수도 있다.
#### 아무것도 보여주고 싶지 않다면 null 값이나 false 값을 반환하도록 한다

#### render() 함수 메서드 안에서는 이벤트 설정이 아닌 곳에서 setState를 사용하면 안되며 브라우저의 DOM에 접근해서도 안된다
#### DOM정보를 가져오거나 state에 변화를 줄 떄는 componentDidMount 에서 처리해야한다

### constructor 메서드
- constructor(props) {....}
#### 이것은 컴포넌트의 생성자 메서드로 컴포넌트를 만들 때 처음으로 실행된다.
#### 이 메서드에서 초기 state를 정할 수 있다.

### getDerivedStateFromProps(props,state)
#### 리액트 v16.3 이후에 새로 만든 라이프사이클 메서드이다
#### props로 받아 온 값을 state에 동기화시키는 용도로 컴포넌트가 마운트될 때 와 업데이트될때 호출

-static getDerivedStateFromProps(nextProps,prevState){
    if(nextProps.value !== prevState.value){
        //조건에 따라 특정 값 동기화
        return(value:nextProps.value);    }
}
return null ; //state를 변경할 필요가 없다면 null을 반환
}

### ComponentDidMount 메서드
-componentDidMount(){....}
#### 컴포넌트를 만들고 첫 렌더링을 다 마친후 실행한다
#### 이 안에서 다른 자바스크립트 라이브러리 또는 프레임워크의 함수를 호출하거나 이벤트 등록 ,setTimeout,setInterval,네트워크 요청 같은 비동기 작업을 처리하면 된다.

### shouldComponentUpdate()메서드
-shouldComponentUpdate(nextProps,nextState){....}
#### 이것은 props 또는 state를 변경했을때, 리렌더링을 시작할지 여부를 지정하는 메서드 입니다
#### 이 메서드에서는 반드시 true 값 또는 false 값을 반환해야한다 컴포넌트를 만들 때 이 메서드를 따로 생성하지 않으면 true 값을 반환한다 이 메서드가 false 값을 반환한다면 업데이트 과정은 여기서 중지된다

### componentDidUpdate 메서드
-componentDidUpdate(prevProps,prevState,snpshot){....}
#### 이것은 리렌더링을 완료한 후 실행
#### 업데이트가 끝난 직후이므로 DOM 관련 처리를 해도 무방하다
#### 여기서는 prevProps 또는 prevState를 사용하여 컴포넌트가 이전에 가졌던 데이터에 접근할 수 있다.
#### 또 getSnapshotBeforeUpdate에서 반환한 값이 있다면 여기서 snapshot 값을 전달 받을 수 잇다.

### componentWillUnmount 메서드
#### componentWillUnmount(){....}
#### 이것은 컴포넌트를 DOM에서 제거할 때 실행된다.
#### componentDidMount 에서 등록한 이벤트 타이머 직접 생성한 DOM이 있다면 여기서 제거 작업

### componentDidCatch 메서드
#### componentDidCatch 메서드는 리액트 v16에서 새롭게 도입되었으며 컴포넌트 렌더링 도중에 에러가 발생했을 때 애플리케이션이 먹통이 되지 않고 오류 UI 를 보여 줄 수 있게 해준다

-componentDidCatch(error,infi){
    this.setState({
        error:true0
    });
    console.log(error,info)
}

##### error는 파라미터에 어떤 에러가 발생했지는 알려준다
##### info 파라미터는 어디에 있는 코드에서 에러가 발생했는지 에 대한 정보를 준다.


### Angular 와 React 의 차이점
#### Angular 은 프레임워크 React 는 라이브러리
#### Angular는 양방향 바인딩 개념으로 Model과 view가 연결되어 있어 데이터 값이 한쪽에서 변화하면 다른쪽에서도 바로 업데이트가 진행된다.
#### 서비스 라는 개념은 컴포넌트 간의 의존성관리를 용이하게 해준다.

### React
#### React는 Virtual DOM을 가지고 있다.
#### 가상 DOM이 있기 떄문에 상태를 비교하여 부분적으로 렌더링 할 수 있어 속도가 빠르다.
#### 오직 UI컴포넌트를 만들기 위한 리이브러리이다.

##### Angular 는 HTML 스크립팅이 templete 기반 React 는 JSX 이용/Angular는 기본 Typescript


## 라이브러리 프레임워크 차이
### 자유도의 차이
#### 프레임워크는 짜여진 패턴이나 틀 기반에서 내가 코딩하는 것
#### 라이브러리는 내가 가져다 사용해서 자유롭게 사용

### 메소드 체이닝
#### 메소드 체이닝의 장접은 코드가 짧아진다는 장점
#### 단점은 에러가 났을때 어느 부븐의 메소드에서 오류가 났는지 확인이 어렵다

### 메모라이제이션?
#### 불필요한 연산이나 계산을 하지 않고 기억을 해놓고 그 기억해놓은 것을 활용하는것

# Restful API

### REST API 는 URL 로 접근가능하고 내용이 JSON , XML 등으로 표현된 자원에 대한 행위를 HTTP Method로 정의
### RESTfUL 하다 라는것은 REST API 의 설계의도를 명확하게 지켜주는것
#### 슬래시를 통해 계층 관계를 표시한다던가 숫자는 ID를 나타낸다든가 동사보단 명사 위주로 사용

### DOM 을 건드리는 방식과 아닌 방식들의 차이
 
#### 직접 DOM 을 건드리는 경우 DOM의 구조를 파악하고 있어야 하며 클래스명이나 태그명이 바뀌는 경우 다시 DOM을 변경
#### React 의 경우 가장 DOM 이 있고 가상 DOM이 실제 DOM 과 비교하여 state가 변화되엇는지 감지한다

## 반응형 프로그래밍
##### 데이터 스트림 : 데이터가 열을 지어 흐르는 것처럼 입력되는거 2.정해진 포멧을 사용하여 문자 또는 바이트 형식으로 송수신 되는 데이터 항목의 연속적인 흐름 3.데이터 양이 한정되어 있지 않고 지속적으로 생성되고 시간에 따라 값이 변하는 데이터의 흐름 4.연속적으로 흘러들어오는 데이터

### 반응형 프로그래밍이란 데이터 스트림이라는 하나의 일관된 형식으로 만들고 이 데이터스트림을 구독하여 데이터스트림의 상태변화에 반응하는 방식으로 동작하는 애플리케이션 을 만드는것
#### tv랑 tv방송국이 있다고 가정 tv방속국이 일정한 시간 단위로 영상에 대한 프레임을 계속해서 방출하고 tv는 방속국을 관찰하다가 새로운 영상을 방출하면 이를 흭드하는 방식 방송국=> 옵저버블 tv=>옵저버 영상프레임=>Notification 이다

### null vs undefined?
#### 기본적으로 둘다 값이 없음을 나타낸다.
#### undefined는 데이터 타입이자 값을 나타냄 정의되지 않는것
#### null 은 명시적으로 값이 비어있음을 나타내는데 사용
#### nudefined는 변수를 선언만 한더라도 할당되지만 null은 변수를 선언한후 null 값을 바꾼다

# 가상돔 Virtual DOM 은 실제 DOM 변화를 최소화 시켜주는 역할을 한다
## 브라우저는 HTML 파일을 스크린에 보여주기 위해 DOM 노드 트리 생성 ,렌더트리 생성,레이아웃 페인팅 과정 을 거친다.
### DOM 노드는 HTML의 각 엘리먼트와 연관되기 때문에 HTML파일에 20개의 변화가 생기면 DOM 노드가 변경되고 그 이후의 과정역시 20회 다시 이루어진다 작은 변화에도 매우 복잡한 과정들이 다시 실행되기 때문에 DOM 변화가 잦을 경우 성능저하
### Virtual DOM은 뷰에 변화가 있다면 그 변화가 실제 DOM에 적용되기 전에 Virtual DOM에 적용시키고 최종결 과만 실제 DOM에 전달한다.
### 따라서 20개의 변화가 있다면 Virtual DOM 은 변화된 부분만 가려내어 실제 DOM에 전달하고 실제 DOM은 그 변화를 1회로 인식하여 단 한번의 렌더링 과정만 거친다


## Redux는 무엇인가?
#### Redux 는 React 를 위한 써드파티 state 관리 라이브러리로 context API 가 개발되기 전 부터 존재했다.
#### Redux는 store라고 불리는 state 컨테이너의 개념을 기반으로 하는데 store컴포넌트는 데이터를 props로 받을 수 있다.
#### store를 업데이트하는 유일한 방법은 reducer를 통해 전달되는 store에 action을 보내는것
#### reducer는 action과 현재의 state를 받고 새로운 state를 반환(return)하고 구독된(subscribed)컴포넌트를 다시 렌더링

### 리액트 네이티브

#### 리액트의 접근 방법을 확장화는 페이스북의 오픈소스 프로젝트

##### 기존의 모바일 자바스크립트 툴들이 웹 뷰를 통해 인터페이스를 구축하는 하이브리드 방식이었다면 리액트 네이티브는 자바스크립트로 작업하지만 인터페이스는 네이티브 위젯으로 표시하는 방법, 리액트 네이티브는 네이티브 UI를 통해서 이질감 없고 쾌적한 사용자 경험을 제공합니다

#### 리액트 네이티브는 네이티브 브릿지를 통해 네이티브 스레드 와 통신 하면서 웹앱과 다르게 성능을 최적화  시킨다.
#### 네이티브와 통신하는 방법을 사용하는 것을 하이브리드 앱이라 블리며 자마립 네이티브 스크립트 플루터 등이 있다.


### 리액트 의 네이티브의 장점
#### 러닝커브가 낫다
#### 소스 코드의 재사용과 생산성
- React 는 Component 기반으로 기능들을 분리해 재사용할 수 있는 구조로 되어 있다.
-또한  기존에 리애트로 개발된 사이트가 있다면 그 사이트이 Component 코드를 그대로 사용할 수 있기 때문에 재사용 가능하면 생산성을 더욱 올라간다.

#### 비용 , 오픈소스
##### 하나의 언어 그리고 하나의 코드로 두개 OS 앱을 개발 할 수 있기 때문에 일반적인 네이티브 앱을 개발하는 것보다 두배 비용이 저렴하다,또한 유지보수의 비용절


### 리액트 네이티브의 단점
#### 러닝커브 => 자바스크립트를 학습해야하고 JSX의 리액트 고유 방식을 이해하고 리액트가 사용하는 props state 등의 개발 방식을 이해해야 한다.

#### 네이티브 보다 성능이 떨어진다
##### 리액트 네이티브는 네이티브 브릿지를 사용하여 네이티브 스레드를 연결시켜 동작하는 하이브리드 앱이기 때문에 네이티브 개발 방식보다는 당연하게 성능이 떨어진다.
##### 일반적인 애플리케이션을 만든다고 한다면 문제는 없지만 애니메이션 60프레임 이사을 사용하거나 자바스크립트 스레드에서 5ms보다 시간이 걸리는 처리를 하게 된다면 성능 저하 경험
#### 오픈소스 그리고 네이티브 기능개발.
##### 오픈 소스 이므로 업데이트가 자주 발생, 또한 업데이트 시 수정되는 기능들 때문에 버그가 발생, 또한 네이티브 기능을 개발하기 위해서는 리액트 네이티브 에서 기능을 제공해야한다. 

### 스레드
#### 프로세스(process)
- 프로세스 란 단순히 실행 중인 프로그램 이라고 할 수 있다.
- 즉, 사용자가 작성한 프로그램이 운영체제에 의해 메모리 공간을 할당 받아 실행중인 것을 말한다.
- 이러한 프로세스는 프로그램에 사용되는 데이터와 메모리 등의 자원 그리고 스레드로 구성

#### 스레드 란?
- 스레드(thread) 란 프로세스 (process) 내에서 실제로 작업을 수행하는 주체를 의미 한다
- 모든 프로세스에는 한 개 이상의 스레드가 존재하여 작업을 수행
- 또한 두 개 이상의 스레드를 가지는 프로세르를 멀티스레드 프로세스 라고 한다.



### React Native 의 작동원리
- React Native 앱은 크게 두가지  부분으로 구성되어 있다.
- Native 부분과 JavaScript 부분이 그것이다.
#### Native 부분은  IOS 에서는 Object-C / Swift,Android 에서는 Java/Kotlin 이 담당하는 곳으로 UI를 렌더한다.
#### UI스레드(메인스레드)? 라 불리는 것이 UI룰 생선한다
#### 반면 JavaScript 부분에서는 JS스레드가 있다.
#### 이곳은 말그대로 자바스크립트 엔진을 통해 자바스크립트 코드가 실행되는곳,
#### 비즈니스 로직을 포함하여 뷰를 언제 어떻게 표시할지 와 같은 React 관련 자바스크립트 코드가 실행되는 스레드이다.

### 스레드의 생성과 실행
#### 자바에서 스레드를 생성하는 방법에는 다음과 같이 두 가지 방법이 있습니다.
#### 1. Runnable 인터페이스를 구현하는 방법
##### 2. Thread 클래스를 상속받는 방법

### React Native앱의 실행과정

- 1. 앱이 시작되면서 main thread 가 실행되고 메인 스레드는 JS 스레드를 실행 시키고 자바스크립트 번들을 로드
- 2. JS 스레드가 실행되면서 React 는 Virtual DOM을 생성하고 diffing 알고리즘을 통해 변경사항을 Native Bridge 를 경유하여 shadiw 스레드로 전달한다.
- 3 shadow 스레드는 변경사항 메시지를 통해 화면의 레이아웃을 계산하고 계산이 끝난 레이아웃 의 파라미터나 객체를 메인 스레드로 보낸다
- 4 메인 스레드가 UI를 화면에 표시한다.
- 5 사용자가 화면에 입력한 UI 이벤트 정보들이 Native Bridge 를 경유하여 JS 스레드로 보내진다
- 6 UI 이벤트 메시지를 활용하여 JS 스레드에서 비즈니스 로직들이 실행되고 React 는 다시 Vitual Dom 을 생성하여 변경사항을 다시 Native Bridge 를 경유하여 shdow thread 로 전달