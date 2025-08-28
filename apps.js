// ! Heart btn click:


const heartIcons = document.querySelectorAll('.heart-icon');

for (let icon of heartIcons) {
  icon.addEventListener('click', () => {
    let heartElement=document.getElementById('heart');
    let navHeart=parseInt(heartElement.innerText);
    console.log(navHeart);
    let increase=navHeart+1;
    heartElement.innerText=increase;
    icon.style.color='red'
  });
}


// !Alert


const callingBtns=document.querySelectorAll('.calling-btn');

for(let callingBtn of callingBtns){
  callingBtn.addEventListener('click',()=>{

    // coin deduct

    let coinValue=parseInt(document.getElementById('coin-count').innerText);

    if(coinValue<20){
     return alert("❌আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে বিশটি কয়েন লাগবে।");

    }
    let newCoinValue=coinValue-20;
    
    document.getElementById('coin-count').innerText=newCoinValue;


    // calling alert
       
    const nameData= callingBtn.parentNode.parentNode.children[2].innerText;

    const numberData=callingBtn.parentNode.parentNode.children[3].innerText

    // console.log(numberData);

    alert(`📞 Calling ${nameData} ${numberData}...`)


    // ! asidebar--call history

    const historyName=callingBtn.parentNode.parentNode.children[1].innerText;

    let dateNow=new Date().toLocaleTimeString();

  let cardCointener= document.getElementById('card-cointener')

    
   let divElement=document.createElement('div')
   
   divElement.innerHTML=`<div  class="flex justify-between  items-center  mt-3 mb-3 p-4 gap-3 rounded-lg bg-gray-100">
     <div >
       <h1 >${historyName}</h1>
      <p class="text-gray-500">${numberData}</p>
     </div>
     <h1>${dateNow}</h1>
    </div>`

   console.log(divElement);

   cardCointener.appendChild(divElement)

  })
}


// !clear btn

let clearBtn=document.getElementById("clear-btn");

clearBtn.addEventListener('click',()=>{
  let cardCointener= document.getElementById('card-cointener');

  cardCointener.remove();
})



// !Copy btn

let copyBtns=document.querySelectorAll(".copy-btn")

for (let copyBtn of copyBtns){
  copyBtn.addEventListener('click',()=>{
    let copySave=parseInt(document.getElementById("copydata").innerText);
    // console.log(copySave);
    let updateSave=copySave+1;
    console.log(updateSave);
    document.getElementById('copydata').innerText=updateSave;

    const numberData=copyBtn.parentNode.parentNode.children[3].innerText;
    // console.log(numberData);

    alert(`©️ নাম্বার কপি হয়েছে - ${numberData}`)
    navigator.clipboard.writeText(numberData);
  })

  

}
