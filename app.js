let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");

let turno = true; //playerx,playery0

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
       if(turno){
        box.innerText="0";
        turno = false;
       }else{
        box.innerText="x";
        turno= true;
       }
       box.disabled=true;

       checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = 'excllent,winner is ${winner}';
    msgContainer.classList.remove("hide");
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val===pos2val&&pos2val===pos3val){
                console.log("winner",pos1val);
                showWinner();
            }
        }
    }
};