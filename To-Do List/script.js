const input=document.getElementById('input');
const taskList=document.getElementById('tasklist');
function add() {
   if(input.value===""){
     alert(`you must write a task to add`);
     savedata();
   }else{
   let li=document.createElement("li");
   li.innerHTML=input.value;
   let cross=document.createElement("span");
    cross.innerHTML="×";
     li.appendChild(cross);
     taskList.appendChild(li);
     savedata();
   }
  input.value="";
  savedata();
}
taskList.addEventListener("click",(e)=>{
  if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    savedata();
  }else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    savedata();
  }
},false);
function savedata() {
   localStorage.setItem("data",taskList.innerHTML);
}
function getdata() {
   taskList.innerHTML=localStorage.getItem("data");
}
getdata();