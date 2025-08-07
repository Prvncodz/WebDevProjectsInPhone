const userInput=document.getElementById('qr-input');
const generateBtn=document.getElementById('generate-btn');
const qrSpace=document.getElementById('qr-preview');


generateBtn.addEventListener("click",()=>{
    qrSpace.innerHTML="";
    let Qr=document.createElement("img");
  Qr.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userInput.value}`;
  Qr.alt='my qr';
  qrSpace.appendChild(Qr);
  qrSpace.classList.add('show');
});
  

