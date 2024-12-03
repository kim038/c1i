let img = document.querySelector('.map');
let button1 = document.querySelector('#button1')
let button2 = document.querySelector('#button2')
let button3 = document.querySelector('#button3')



button1.addEventListener('mouseover', () => {
    map.src = 'Maps/yellow.jpg';
})

button2.addEventListener('mouseover', () => {
    map.src = 'Maps/sable.jpg';
})

button3.addEventListener('mouseover', () => {
    map.src = 'Maps/japanese.jpg';
})