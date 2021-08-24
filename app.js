//html element 에서 가져와서 JS에서 사용한다
const loginForm=document.querySelector("#login-form");
//document에서 찾는 대신에 위에 작성한 loginForm에서 검색
const loginInput=loginForm.querySelector("input");
//더 짧은 코드
const loginButton=document.querySelector("#login-form button");


//click에 대한 event 반응 함수
function handleLoginBtnClick(){
    console.log(loginInput.value);
    console.log("click");
}

loginButton.addEventListener("click",handleLoginBtnClick)

