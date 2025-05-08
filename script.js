//selecting elements
var inputBox = document.getElementById("inputBox")
var result=document.getElementById("result")
var guesscount=document.getElementById("guesscount")
var noofguess=3

//Generate Random Number from 1 to 5

var randomnumber=Math.floor(Math.random()*10)+1  //1 to  10
if(randomnumber>5)
{
    randomnumber=randomnumber-5
}

//EVENT handle function
function checkthenumber()
{
    if(inputBox.value==randomnumber)
    {
        alert("You Got it Right , congratulations.")
        result.textContent="You are Rright!"
    }
    else{
        noofguess=noofguess-1
        if(noofguess==0)
        {
            alert("You Lost,Generated Random Munber is:"+randomnumber)
        }

        guesscount.textContent="Available Guess :"+noofguess
        result.textContent="You are wrong!"
    }
}
