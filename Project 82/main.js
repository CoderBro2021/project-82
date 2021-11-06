var mouseEvent = "empty";
var last_loc_x,last_loc_y;
canvas = document.getElementById('mycanvas');
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown (e){
    color = "black";
    radius = 40;
    Line_Width = 5;
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_loc_x = e.clientX - canvas.offsetLeft;
    current_loc_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
  ctx.beginPath();
  ctx.strokeStyle= color;
  ctx.lineWidth =Line_Width;
  ctx.arc(current_loc_x, current_loc_y, radius, 0, 2 * Math.PI);
  ctx.stroke();
  
  ctx.moveTo(last_loc_x,last_loc_y);
  ctx.lineTo(current_loc_x,current_loc_y);

  console.log("Last position of x and y cordinates = ")
  console.log("X= "+last_loc_x+" Y= "+last_loc_y);

  console.log("current position of x and y cordinates = ")
  console.log("X= "+current_loc_x+" Y= "+current_loc_y);

  last_loc_x=current_loc_x;
  last_loc_y=current_loc_x;
 
    } 

}
canvas.addEventListener("mouseup ", my_mouseup);
function my_mouseup(e) {
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave ", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent="mouseLeave";
}