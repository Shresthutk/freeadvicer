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