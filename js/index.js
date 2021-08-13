console.log('js file included');
let obj = '';
fetch('https://api.adviceslip.com/advice')
.then(res => res.json())
.then(data => obj = data);
let advice = document.getElementById('advice');
advice.innerHTML='';
setTimeout(() => {
    var displayAdvc = obj.slip.advice;
    advice.innerHTML = displayAdvc;
}, 1500);
let btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    advice.innerHTML = ` <img src="./img/trollFace.gif" alt="trollFace" srcset="">`
});
let footer=document.getElementById('footer');

setInterval(() => {
    let a=(Math.floor(Math.random() * 255));
    let b=(Math.floor(Math.random() * 255));
    let c=(Math.floor(Math.random() * 255));
    footer.style.color=`rgb(${a},${b},${c})`;
}, 1000);