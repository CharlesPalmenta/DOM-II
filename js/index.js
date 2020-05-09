// Your code goes here
const mouseNav = document.querySelectorAll('a');
mouseNav.forEach(link => {
    link.addEventListener('mouseover', (event) =>{
        event.target.style.color = '#17A2B8';
    })
})
mouseNav.forEach(link => {
    link.addEventListener('mouseleave', (event) =>{
        event.target.style.color = '#212529';
    })
})
const funBus = document.querySelector('.logo-heading');
funBus.addEventListener('dblclick', (event) =>{
   funBus.textContent = 'Bus Fun'; 
})
const changeBus = document.querySelector('.intro img');
changeBus.addEventListener('click', (e)=>{
    changeBus.src = 'img/reno-laithienne-odHhPgEgkWM-unsplash.jpg';
})
const imageMove = document.querySelector('.img-content img');
imageMove.addEventListener('contextmenu', (e)=>{
    imageMove.src = 'img/fun.jpg';
})

const footerColor = document.querySelector('.footer');
window.addEventListener('resize', (e)=>{
    console.log('event obj', e);
    footerColor.style.backgroundColor = '#C0C0C0';
    e.stopPropagation();
})

// const buttonColor = document.querySelectorAll('body');
// window.addEventListener('fullscreenchange', (e)=>{
//     buttonColor.style.backgroundColor = 'pink';
//     console.log('full screen', buttonColor)
// })

// const backGround = document.querySelectorAll('body');
// backGround.addEventListener('wheel', (e)=>{
//     backGround.style.backgroundColor = '#17A2B8';
// })

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('.img-fluid-rounded');
  el.onwheel = zoom;
  
  el.addEventListener('wheel', zoom);

  