/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(string) {
  string.split();
  let s = parseInt(string);
  if (s<12)
    return "Good Morning";
    else if (s>=12 && s<17)
    return "Good Afternoon";
    else if (s>17)
    return "Good Evening";


}


function displayMessage(msg) {
  let update = document.getElementById('greeting');
  update.innerText = msg;
}
