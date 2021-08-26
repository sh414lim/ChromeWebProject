//html element 에서 가져와서 JS에서 사용한다
const loginForm=document.querySelector("#login-form");
//document에서 찾는 대신에 위에 작성한 loginForm에서 검색
const loginInput=loginForm.querySelector("input");
//더 짧은 코드

const link=document.querySelector("a");

//click에 대한 event 반응 함수
//중요한건 event 가 발생할때 브라우저가 fubction울 호출한다.
function onLoginSubmit(event){
    //브라우저가 기본동작을 실행하지 못하도록 막는다
    
    event.preventDefault();
console.log(loginInput.value);
}

function handleLinkClick(){
    //alert 는 모든 동작들을 막는다.
    alert("clicked!");
}

//form의 submit event 를 감지
//form을 submit 할 때 입력값을 받아낸다

//브라우저는 우선 onLoginSubmit function을 호출
//submit event 가 발생할 때 JS는 onLoginSubmot function을 호출
//이때 event object를 argument로 주고 있고
loginForm.addEventListener("submit",onLoginSubmit);
link.addEventListener("click",handleLinkClick);
link.addEventListener

//submit event 가 발생하면 브라우저가 알아서 저 function을 실행시켜준다.
//()을 더하면 브라우저가 보자마자 자동으로 이 function을 실행시켜 버린다.
// onLoginSubmit();




