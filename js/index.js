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