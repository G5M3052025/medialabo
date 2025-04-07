b = document.querySelector('button#print');
b.addEventListener('click', greeting);
function greeting() {
    let i = document.querySelector('input[name="shimei"]');
    let shimei = i.value;
    let aisatsu = 'こんにちは，' + shimei + 'さん';
    let p = document.querySelector('p[id="message"]');
    p.textContent = aisatsu;
    // console.log('こんにちは');
}