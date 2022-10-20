const redColor = document.getElementById('red');
const blueColor = document.getElementById('blue');
const yellowColor = document.getElementById('yellow')

redColor.addEventListener('click',()=>{
    document.body.style.backgroundColor = 'red';
})


blueColor.addEventListener('click',()=>{
    document.body.style.backgroundColor = 'blue';
})

yellowColor.addEventListener('click',()=>{
    document.body.style.backgroundColor = 'yellow';
})

