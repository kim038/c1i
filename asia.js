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

let hamburger = document.querySelector(".hamburger");
let sidebar = document.getElementById("sidebar");
let close = document.querySelector(".close");

close.addEventListener("click", function () {
    sidebar.style.display = "none";
    console.log("clicked");

})

hamburger.addEventListener("click", function () {
    sidebar.style.display = "block";
    console.log("clicked");

})