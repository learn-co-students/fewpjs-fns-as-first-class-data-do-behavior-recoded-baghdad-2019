/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet (timeString) {
      
  if (parseInt(timeString.split(":").join('')) < 1200 ) {
    
    return "Good Morning";
  }
    if (parseInt(timeString.split(":").join('') > 1200 && timeString.split(":").join('')) < 1700) {
    
    return "Good Afternoon";
  }
    if (parseInt(timeString.split(":").join('')) >= 1700) {
    
    return "Good Evening";
  }
  
  
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  document.getElementById('greeting').innerText = string;
}
