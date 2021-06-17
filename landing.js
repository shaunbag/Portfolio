
const canvas = document.querySelector('canvas'); // select the canvas element and place it inside the canvas variable for later use


canvas.width = window.innerWidth; // set the width and height of the canvas element based on the 'Window' size
canvas.height = window.innerHeight;

const context = canvas.getContext('2d'); 

const mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove', 
function(event){
    mouse.x = event.x;
    mouse.y = event.y;
})

//Animate circle

function Circle(x, y, dx, dy, radius){  // create a circle object with own methods
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function(){ //object draw function using variables provided by function params
        
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false); // arc function created using the variables above
        context.strokeStyle = `rgb(0, 200, 0)`;
        context.lineWidth = 10; // width of circle
        context.stroke();
        context.fillStyle = 'rgb(0, 0, 90)';
        context.fill(); //filled circle
    }

    this.update = function(){
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0){ // conditional to allow the circle to bounce of the horozontal axis
            this.dx = -this.dx; 
        }
    
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0){ // conditional to allow the circle to bounce from the vertical axis
            this.dy = -this.dy;
        }
    
        this.x += this.dx; // increment x and y coordinates each time the animation function is called 
        this.y += this.dy;

        if (mouse.x - this.x < 40 && mouse.x - this.x > -40 && mouse.y - this.y < 40 && mouse.y - this.y > -40){
            this.dx = -this.dx;
            this.dy = -this.dy;
        } else {
            this.dx = this.dx;
            this.dy = this.dy;
        }

        

        this.draw();
    }

    
}



let circleArr = [];// array holding circle objects

for(let i = 0; i < 100; i++){
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = Math.random() * 4;
    var dy = Math.random() * 4;
    var radius = Math.random() * 5 + 1;
    circleArr.push(new Circle(x, y, dx, dy, radius))    
}

function animate() { // the function 'Animate'
    requestAnimationFrame(animate); // this function calls the animate function over and over and over
    context.clearRect(0, 0, innerWidth, innerHeight); // clear the canvas so that the circle appears to move rather than drawing a solid line of cicles
      
    for (i = 0; i < circleArr.length; i++){
        circleArr[i].update();// callig the object function update on each circle in the array
    }

    

    
}


animate(); // call the function!!!
