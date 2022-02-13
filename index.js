
const input = document.getElementById('input');

function addingEventListener(name) {
    alert('I was clicked');
    input.addEventListener('click', addingEventListener);
    
}

