//faulty calculater 
const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

var rand=Math.random();
console.log(rand);
rl.question("Enter the first number:",function(num1){
rl.question("Enter the operator(+,-,*,/):",function(operator){
rl.question("Enter the second number:",function(num2){
num1=parseInt(num1);
num2=parseInt(num2);
let result;
//faulty calculations
if(rand<0.1){
  
   if(operator=="+"){
  console.log("the result is:"+num1*num2);
     
}
else if(operator=="-"){
  console.log("the result is:"+num1/num2);
}
else if(operator=="*"){
  console.log("the result is:"+num1+num2);
}
else if(operator=="/"){
  console.log("the result is:"+num1-num2);
}
else{
  console.log("wrong operator");
} 
  rl.close();
}
else{
if(operator=="+"){
  result=num1+num2;
}
else if(operator=="-"){
  result=num1-num2;
}
else if(operator=="*"){
  result=num1*num2;
}
else if(operator=="/"){
  result=num1/num2;
}
else{
  console.log("wrong operator");
  rl.close();
  return;
}
console.log("the result is:"+ result);
rl.close();
}
  });
 });
});
  
