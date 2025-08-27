// ! Heart btn click:

const heartIcons = document.querySelectorAll('.heart-icon');

for (let icon of heartIcons) {
  icon.addEventListener('click', () => {
    let heartElement=document.getElementById('heart');
    let navHeart=parseInt(heartElement.innerText);
    console.log(navHeart);
    let increase=navHeart+1;
    heartElement.innerText=increase;
  });
}


// !Alert


const callingBtns=document.querySelectorAll('.calling-btn');

for(let callingBtn of callingBtns){
  callingBtn.addEventListener('click',()=>{

    const nameData= callingBtn.parentNode.parentNode.children[2].innerText;

    const numberData=callingBtn.parentNode.parentNode.children[3].innerText

    console.log(numberData);

    alert(`📞 Calling ${nameData} ${numberData}...`)

  })
}


// document.querySelector('.calling-btn').addEventListener('click',()=>{
//   let dataName=document.querySelector('.heading').innerText;
//   let numberData=document.querySelector('.names').innerText
//   alert(`${dataName} ${numberData}`);
// })