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
