// const increase = document.querySelector('.increase');
// const decrease = document.querySelector('.decrease');
// const reset = document.querySelector('.reset');
let count = 0;
const btns = document.querySelectorAll('.btn');
const counter = document.getElementById('value');



btns.forEach((btn) => {
   btn.addEventListener('click', e => {
       const styles = e.currentTarget.classList;
       if (styles.contains('decrease')) {
           count--;
       } else if (styles.contains('increase')) {
           count++;
       } else {
           count = 0;
       }
       counter.textContent = count;
       if(count < 0) {
           counter.style.color = 'red';
       } else if (count > 0) {
           counter.style.color = 'green';
       } else {
           counter.style.color = 'black'
       }
   }) 
})