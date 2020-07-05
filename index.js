const clickedButtonMenu = document.querySelector('navlist-div');

clickedButtonMenu.addEventListener('click',()=>{
    if(clickedButtonMenu.classList)
    clickedButtonMenu.classList.toggle('clicked-button');
});