const w = 600, h = 400, n = 25;
let numbers = fillArray();
let i = n-1;
let j = 0;
let largest = 0, index = 0;

let canvas;

function setup() {
  var x = createCanvas(w + 4, h + 4);
  canvas = x.canvas;
  frameRate(15);
  button = createButton('Guardar');
  button.position(0,h+20);

  background(220);
  show();
}

function draw() {
     
    if (i >= 1) {
      if (j < i+1) {
        if(j!==0 && (j-1)!==index){
          fill(255, 255, 255);
          rect(2 + (w/n) * (j-1), 0, (w/n), numbers[j-1]);
        }
        fill(0, 255, 0);
        rect(2 + (w/n) * j, 0, (w/n), numbers[j]);
        fill(255, 255, 255);
        
        if (numbers[j] > largest) {
          rect(2 + (w/n) * index, 0, (w/n), numbers[index]);

          largest = numbers[j];
          index = j;

          fill(0, 0, 255);
          rect(2 + (w/n) * j, 0, (w/n), numbers[j]);
          fill(255, 255, 255);
        }
        j++;
      }else{
        let aux = numbers[i];
        numbers[i] = numbers[index];
        numbers[index] = aux; 
        
        largest = 0;

        background(220);
        show();
        j = 0;
        i--;
      }    
    }else{
      noLoop();
    }  
}

function show(){
  for (let j = 0; j < n; j++) {
    rect(2 + (w/n) * j, 0, (w/n), numbers[j]);
  }
}
function fillArray() {
  let array = [];
  for(let a = 0; a < n; a++){
    array.push(Math.random() * (h - 0) + 0);
  }
  return array;
}
