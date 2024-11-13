function playGame(userChoice){
    //user choice
    document.getElementById("user-choice").innerHTML="You chose: "+userChoice;
    //computer choice
    const choices = ["rock","paper","scissors"];
    const computerChoice=choices[Math.floor(Math.random()*choices.length)];//Rounds down the result to the nearest whole number
    document.getElementById("computer-choice").innerHTML="Computer chose: "+computerChoice;
    //compute
    var result;//let is the same but newer
    if(userChoice===computerChoice){
        result="Dead heat!";
    } 
    else if((userChoice==="rock"&&computerChoice==="scissors")||//and operator, or operator
            (userChoice==="paper"&&computerChoice==="rock")||
            (userChoice==="scissors"&&computerChoice==="paper")){
        result="Victory!";
    } 
    else{
        result="Loss!";
    }
    //result
    document.getElementById("game-result").innerHTML=result;
}