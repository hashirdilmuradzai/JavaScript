const tableInput = document.querySelector("#tableInput");
const tableOutput = document.querySelector("#tableOutput");

function printTable(event) {
    event.preventDefault() // Page refresh na ho
    const tableOf = Number(tableInput.value);
    tableOutput.innerHTML = ""; // isy refresh hoga table data porana wala

    for (let i = 1; i <= 12; i++) {
        tableOutput.innerHTML += tableOf + " x " + i + " = " + tableOf * i + "<br>";
    }
}
