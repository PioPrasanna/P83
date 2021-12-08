var mouseEvent="empty";
var last_position_x,last_position_y;

  canvas= document.getElementById("myCanvas");
  ctx= canvas.getContext("2d");

  color="black";
  width_line=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown";
    color=document.getElementById("color_line").value;
    width_line=document.getElementById("width_line").value;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_x=e.clientX-canvas.offsetLeft;
    current_position_y=e.clientY-canvas.offsetTop;
    if (mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth=width_line;
        ctx.moveTo(last_position_x,last_position_y);
        ctx.lineTo(current_position_x,current_position_y);
        ctx.stroke();
    }
    last_position_x= current_position_x;
    last_position_y= current_position_y;
}

function clearcan(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

}

canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

       
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_x + "y = " + last_position_y);
        ctx.moveTo(last_position_x, last_position_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        last_position_x = current_position_of_touch_x; 
        last_position_y = current_position_of_touch_y;
        }

        canvas.addEventListener("touchstart", my_touchstart);

        function my_touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color_line").value;
        width_of_line = document.getElementById("width_line").value;
        //Addictonal Activity ends

        last_position_x=e.touches[0].clientX-canvas.offsetLeft;
                last_position_y=e.touches[0].clientY-canvas.offsetTop;

    }

    
    