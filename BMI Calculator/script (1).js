const Calculate = document.getElementById("calculate");
let Height = document.getElementById("height");
let Weight = document.getElementById("weight");
const Bmi=document.getElementById("bmi");
let Health=document.getElementById("result");


Calculate.addEventListener("click",()=>{
  Height= parseFloat(Height.value);
Weight=parseFloat(Weight.value);
  if (isNaN(Height) || isNaN(Weight)) {
     Health.innetHTML=`enter a valid number`;
    return;
  }
   
 let bmi=Weight/((Height/100)**2);
  let rounded=bmi.toFixed(2);
  bmi=parseFloat(rounded);
  Bmi.innerHTML=`${bmi}`;

  if (bmi<18.50) {
     Health.innerHTML="You Are Underweight";
  } else if(18.50<=bmi && bmi<=24.90){
     Health.innerHTML="You Are Healthy";
  }else if(25.00<=bmi && bmi <=29.90){
    Health.innerHTML="You Are Overweight";
  }else{
    Health.innerHTML="You Are Obese";
  }
  
  
});