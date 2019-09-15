/* Given Code, don't edit */

function handleClick(e) {
    const timeString = document.getElementById('time').value
    displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
    let time = parseInt(string.split(':').join(''));
    if (time < 1200) {
        return 'Good Morning';
    } else if (time >= 1200 && time <= 1700) {
        return 'Good Afternoon';
    } else if (time > 1700) {
        return 'Good Evening';
    }

}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
    document.getElementById('greeting').innerHTML = string;
}