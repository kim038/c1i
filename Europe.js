let img = document.querySelector('.map');
let button1 = document.querySelector('#button1')
let button2 = document.querySelector('#button2')


button1.addEventListener('mouseover', () => {
    map.src = 'Maps/pine.jpg';
})

button2.addEventListener('mouseover', () => {
    map.src = 'Maps/beech.jpg';
})