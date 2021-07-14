function scuberGreetingForFeet(x){
  if (x < 400){
    return 'This one is on me!'
  }
  else if (x > 2500){
    return 'No can do.'
  }
  else if (x > 2000){
    return 'I will gladly take your thirty bucks.'
  }
  
  // Write your code here!
}

function ternaryCheckCity(x){
  return x === 'NYC' ?  "Ok, sounds good." : "No go.";
  // Write your code here!
}

function switchOnCharmFromTip(x){
    if (x === 'generous'){
      return 'Thank you so much.'
}
    else if (x === 'not as generous'){
      return 'Thank you.'
    }
    else if ( x === 'thanks for everything'){
      return 'Bye.'
    }
}  
  