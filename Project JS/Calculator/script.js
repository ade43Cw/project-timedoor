function appendToDisplay(value) {
    document.getElementById("tampil").value += value;
}


function clearDisplay() {
    document.getElementById("tampil").value = "";
}


function clearToDisplay() {
    let input = document.getElementById("tampil").value;
    document.getElementById("tampil").value = input.slice(0, -1);
}


function TambahKurang() {
    let input = document.getElementById("tampil").value;
    document.getElementById("tampil").value = parseFloat(input) * -1;
}


function resullt() {
    let input = document.getElementById("tampil").value;
    document.getElementById("tampil").value = eval(input);
}
