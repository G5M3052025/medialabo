document.querySelector('button').addEventListener('click', add);

function add() {
    let left = Number(document.querySelector('input[name="left"]').value);
    let right = Number(document.querySelector('input[name="right"]').value);
    document.querySelector('#answer').textContent = left + right;
}