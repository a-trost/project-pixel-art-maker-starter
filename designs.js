// Select color input
let colorPicker = document.getElementById('colorPicker');
// Select size input
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', makeGrid);

function makeGrid() {
    const pixelCanvas = document.getElementById('pixelCanvas');
    while (pixelCanvas.firstChild) {
    pixelCanvas.removeChild(pixelCanvas.firstChild);
};
    let height = document.getElementById("inputHeight").value;
    let width = document.getElementById("inputWidth").value;
    for (y=0; y < height; y++) {
        let row = pixelCanvas.insertRow(0);
        for (x=0; x < width; x++) {
            let cell = row.insertCell(0);
            // cell.addEventListener('click', changeColor);
            // cell.addEventListener('mousedown', changeColor);
        };
    };
    // pixelCanvas.addEventListener('click', changeColor);
    pixelCanvas.addEventListener('mousedown', changeColor);
};

function changeColor(event) {
    if (event.target.nodeName === "TD") {
    event.target.setAttribute('style', `background: ${colorPicker.value}`);
}
};
