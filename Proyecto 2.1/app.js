

// const, var, let

const bar = document.querySelector('#bar'); 
const cross = document.querySelector('#cross');
const nav = document.querySelector('.nav');

bar.addEventListener('click', () => {
  bar.style.display = 'none';
  cross.style.display = 'block';
  nav.style.left = '20%' ;
});

cross.addEventListener('click', ()=>{
    cross.style.display = 'none';
    bar.style.display = 'block';
    nav.style.left = '100%'; 
})