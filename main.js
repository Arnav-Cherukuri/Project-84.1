canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover1_width = 130;
rover1_height = 73;

rover2_width = 130;
rover2_height = 73;

background_image = "racing.jpg";         
rover_image1 = "car1.png";
rover_image2 = "car2.jpg";

rover1_y = 10;
rover1_x = 10;

rover2_y = 115;
rover2_x = 10;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag1 = new Image();
    rover_imgTag1.onload = uploadRover1;
    rover_imgTag1.src = rover_image1;

    rover_imgTag2 = new Image();
    rover_imgTag2.onload = uploadRover2;
    rover_imgTag2.src = rover_image2;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover1() {
    ctx.drawImage(rover_imgTag1, rover1_x, rover1_y, rover1_width, rover1_height);
}
function uploadRover2() {
    ctx.drawImage(rover_imgTag2, rover2_x, rover2_y, rover2_width, rover2_height);
}
