let socket;
const BASE_URL = window.location.origin;

function setup() {
    createCanvas(400, 400);
    background(51);

    socket = io.connect(BASE_URL);
    socket.on('mouse', (data) => {
        noStroke();
        fill(255, 0, 0);
        ellipse(data.x, data.y, 10, 10);
    });
}

function mouseDragged() {
    let data = {
        x: mouseX,
        y: mouseY
    }

    socket.emit("mouse", data);

    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 10, 10);
}

