const canvas = document.querySelector('canvas'); // select the canvas element and place it inside the canvas variable for later use


canvas.width = window.innerWidth; // set the width and height of the canvas element based on the 'Window' size
canvas.height = window.innerHeight;

const context = canvas.getContext('2d'); 



/*

//Rectangle
context.fillStyle =' rgba(30, 255, 0, 0.7)'; // set color of rectangle
context.fillRect(150, 299, 300, 500); // creat a rectangle (color filled) on the (x axis, y axis, width and height) within the canvas

/*
//create a line on the canvas
context.beginPath();  // create a new element which is unconnected from the previous rectangle created 
context.moveTo(60, 500); //starting coordinate of the line
context.lineTo(600, 150); // moving to this coordinate
context.lineTo(800, 900);
context.strokeStyle = 'rgba(255, 40, 0, 0.5)'; // set color of line
context.stroke();

// Arcs and circles
context.beginPath(); // begin new element disconnected from the above Lines
context.arc(900, 300, 60, 0, Math.PI * 2, false);
context.strokeStyle = 'green';
context.stroke();


// For loop to create mulciple elements to the canvas, in this case circles

for(let i = 0; i < 5; i++){

    let y = Math.random() * window.innerHeight;  //set the y axis to a randomly generated numer saved as the y variable
    let x = Math.random() * window.innerWidth; // set the x axis the same, * by the window innerheight and width so that it randomly places coordinates within the canvas
    let rad = Math.random() * 100; // random radius for the circle
    let a = Math.random() * 255;
    let b = Math.random() * 255;// set rgb values to random numbers between 0 and 255
    let c = Math.random() * 255;
    context.beginPath();
    context.arc(x, y, rad, 0, Math.PI * 2, false); // arc function created using the variables above
    context.strokeStyle = `rgb(${a}, ${b}, ${c})`; // color styling using the random variables created above
    context.stroke();
}

// for loop for multiple lines

for(let i = 0; i < 20; i++){

    let x1 = Math.random() * window.innerWidth;
    let y1 = Math.random() * window.innerHeight;
    let x2 = Math.random() * window.innerWidth;
    let y2 = Math.random() * window.innerHeight;
    let a = Math.random() * 255;
    let b = Math.random() * 255;// set rgb values to random numbers between 0 and 255
    let c = Math.random() * 255;
    context.beginPath();
    context.moveTo(x1, y2);
    context.lineTo(x2, y1);
    context.strokeStyle = `rgb(${a}, ${b}, ${c})`;
    context.stroke();
}

for(let i = 0; i < 10; i++){
    let x = Math.random() * innerWidth;
    let y = Math.random() * innerHeight;
    let w = Math.random() * 300;
    let h = Math.random() * 500;
    let a = Math.random() * 255;
    let b = Math.random() * 255;// set rgb values to random numbers between 0 and 255
    let c = Math.random() * 255;
    context.beginPath();
    context.fillRect(x, y, w, h);
    context.fillStyle = `rgb(${a}, ${b}, ${c})`;
} */


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
        context.strokeStyle = `rgb(0, 255, 0)`;
        context.lineWidth = 10; // width of circle
        context.stroke();
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

        this.draw();
    }
}



let circleArr = [];// array holding circle objects

for(let i = 0; i < 17; i++){
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = Math.random() * 4;
    var dy = Math.random() * 4;
    var radius = 50;
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
