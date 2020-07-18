function buttonPress(element) {
  //gets element where number enters on press of buttons
  var numdisplay=document.getElementById('current');
  //gets element where history is displayed for current calculation
  var historydisplay=document.getElementById('history');
  //console.log(element.className);
  if(element.className=='num' || element.className=='num zero'){
    console.log(element.value);
    //stores number being entered
    //var num=numdisplay.value;
    //digit entered
    var digit=element.value;
    //checks if users enters a decimal point
    if(digit=='.'){
      //checks if number already contains a decimal point
      for(var i=0; i<historydisplay.value.length; i++){
        if(historydisplay.value[i]=='.'){
          console.log("Error! Number already contains a decimal point");
          digit='';
        }
      }
    }
    //checks if num is 0
    if(historydisplay.value==='0'){
      //checks if 0 needs to be replaced
      if(digit!='.'){
        historydisplay.value='';
      }
    }
    historydisplay.value=historydisplay.value+digit;
  }
  else if(element.className=='oper' || element.className=='oper brackets'){
    console.log(element.value);
    //operator buttons pressed
    switch (element.value) {
      case 'clear':
        historydisplay.value='0';
        numdisplay.value='';
        break;
      case 'backspace':
        historydisplay.value=historydisplay.value.slice(0, -1);
        if(historydisplay.value==''){
          historydisplay.value='0'
        }
        break;
      default:
        console.log('Oops! how did this happen?');
        break;
      case '%':
      case '/':
      case '*':
      case '-':
      case '+':
      case ')':
        switch(historydisplay.value.slice(-1)){
          case '-':
          case '+':
          case String.fromCharCode(247):
          case String.fromCharCode(215):
            historydisplay.value=historydisplay.value.slice(0, -1);
          break;

        }
      case '(':
        if(historydisplay.value.slice(-1)=='.'){
          console.log("bla");
          historydisplay.value=historydisplay.value+'0'
        }
        historydisplay.value=historydisplay.value+element.textContent;
        break;
      case '=':
        historydisplay.value=historydisplay.value+numdisplay.value;
        matchUpParenthesis(historydisplay.value);
        break;
    }
  }
}
/*
function calculate(equation) {
  console.log('We are in calculate function');
  while (true) {
    //counts total number of opening parenthesis
    equation
  }
}
*/
function matchUpParenthesis(equation) {
  //a function to check if total no. of opening parenthesis is equal to closing parenthesis
  historydisplay=document.getElementById('history')
  console.log('matching brackets...');
  oParenthesis=equation.split('(').length-1;
  console.log('('+oParenthesis);
  cParenthesis=equation.split(')').length-1;
  console.log(')'+cParenthesis);
  if (oParenthesis!=cParenthesis) {
    var diff=oParenthesis-cParenthesis;
    if(diff>0){
      console.log('adding '+diff+' closing parenthesis at end');
      var extraParenthesis='';
      for (var i = 1; i <= diff; i++) {
        extraParenthesis=extraParenthesis+')';
      }
      historydisplay.value=historydisplay.value+extraParenthesis;
    }
    else{
      diff=-1*diff;
      console.log('adding '+diff+' opening parenthesis at start');
      var extraParenthesis='';
      for(var i=1; i<=diff; i++){
        extraParenthesis='('+extraParenthesis;
      }
      historydisplay.value=extraParenthesis+historydisplay.value;
    }
  }
}
