
function handleClick(e) {
    const timeString = document.getElementById('time').value
    displayMessage(greet(timeString))
  }
  
  /* End Given Code, don't edit above here...*/
  function greet(time){
    
    if(time == "8:40"){
      return 'Good Morning';
    }
   if(time > "12:00" && time < "17:00" ){
      return 'Good Afternoon';
    }
        
     if(time > "17:00"){
      return 'Good Evening';
    }
    
    
    

  }
  /* Write your implementation of greet() */
  /* Write your implementation of displayMessage() */
  
  function displayMessage(inputT){
  document.getElementById("greeting").innerText =inputT;

  }