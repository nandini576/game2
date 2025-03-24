let choice=document.querySelectorAll(".choice");
let msg=document.getElementById("msg")
let msgContainer=document.querySelector(".msg-container");
let userscore=0;
let compscore=0;
let uScore=document.getElementById("your-score");
let cScore=document.getElementById("comp-score");
function getcompChoiceChoice(){
    let options=["rock","paper","scissor"];
    let compChoice=Math.floor(Math.random()*3);
    return options[compChoice];
}
function playGame(UserChoice,compChoice){
    if(UserChoice===compChoice)
    {
        msg.innerText="Draw";
        msgContainer.style.backgroundColor="lightgrey";
    }
    else if( UserChoice==="rock" && compChoice==="scissor" || 
             UserChoice==="paper" && compChoice==="rock"  ||
             UserChoice==="scissor" && compChoice==="paper")
        {
           msg.innerText="User Won";
           userscore++;
           uScore.innerText=userscore;
           msgContainer.style.backgroundColor="green";
        }
    else if( UserChoice==="scissor" && compChoice==="rock" ||
             UserChoice==="rock" && compChoice==="paper" ||
             UserChoice==="paper" && compChoice==="scissor")
        {
            compscore++;
            cScore.innerText=compscore;
            msg.innerText="Computer Won";
            msgContainer.style.backgroundColor="red";
        }
}
choice.forEach((ch)=>{
    ch.addEventListener(("click"),()=>{
        let UserChoiceChoice=ch.getAttribute("id");
        let compChoice=getcompChoiceChoice();
        playGame(UserChoiceChoice,compChoice);
    })
})