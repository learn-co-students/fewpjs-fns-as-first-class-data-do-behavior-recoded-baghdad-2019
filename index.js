/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}
/* End Given Code, don't edit above here...*/
/* Write your implementation of greet() */
let timeString=document.getElementById('time').value ;
let greeting=document.getElementById('greeting');
let disString;
function greet(timeString){
  let time=parseInt(timeString);
  if(time<12){
    disString="Good Morning";
  }else if(time>=12 && time<=17){
    disString="Good Afternoon";
  }else {
    disString="Good Evening";
  }  
  return disString;
}
/* Write your implementation of displayMessage() */
function displayMessage(disString){
  greeting.innerText=disString;
}