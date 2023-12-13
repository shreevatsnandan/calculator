console.log("hefojnruins");

function appendToScreen(value) {
    document.getElementById('myTextField').value += value;
}

function clearScreen() {
    document.getElementById('myTextField').value = '';
}

function calculate() {
    try {
        document.getElementById('myTextField').value = eval(document.getElementById('myTextField').value);
    } catch (error) {
        document.getElementById('myTextField').value = 'Error';
    }
}