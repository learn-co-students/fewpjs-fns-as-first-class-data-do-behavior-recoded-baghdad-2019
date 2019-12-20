/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet() 
/* Write your implementation of greet() */
function greet(timeStr) {
  const hour =parseInt(timeStr, 10);
   if ( hour < 12) return "Good Morning"
  if ( hour > 17) return "Good Evening"
  return "Good Afternoon"

}
/* Write your implementation of displayMessage() */
function displayMessage(str) {
   document.getElementById('#greeting').innerText =str
} 
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
