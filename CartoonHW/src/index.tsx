function changeCanvasColor() {
    let canvas = document.getElementById("mycanvas");
    let context = canvas.getContext("2d");
    context.fillStyle = "cyan";
    context.fillRect(0, 0, canvas.width, canvas.height);
}

document.addEventListener('DOMContentLoaded', changeCanvasColor);