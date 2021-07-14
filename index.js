function scuberGreetingForFeet(a) { 
  if (a<=199) {
    return (`This one is on me!`) 
  }
   else if (a>2500) {
    return ('No can do.')
  }
  else if (a>=2001) {
    return ('I will gladly take your thirty bucks.')
  }  
}

function ternaryCheckCity(city) {
  return city==='NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
        return 'Thank you so much.';
        break;
    case 'not as generous':
        return 'Thank you.';
        break;
    default:
        return 'Bye.';
        break;
  }
}