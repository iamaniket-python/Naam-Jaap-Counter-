let count =0;

const countValue = document.getElementById("display");
const plus= document.getElementById("plus")
const minus=document.getElementById('minus')
const reset= document.getElementById("reset")


countValue.textContent=count;

plus.addEventListener("click",()=>{
    count++;
    countValue.textContent =count;
})

minus.addEventListener("click",()=>{
   
    count--;
    countValue.textContent =count;
    
   
})
reset.addEventListener("click",()=>{
    count=0;
    countValue.textContent =count;
})