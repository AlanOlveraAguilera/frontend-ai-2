

// const, var, let

const bar = document.querySelector('#bar'); 
const cross = document.querySelector('#cross');
const nav = document.querySelector('.nav');

bar.addEventListener('click', ()=>{
  //  console.log('button has been clicked')

  bar.style.display = 'none';
  cross.style.display = 'block';

} )