const GRID_SIZE = 10;

let grid = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 1, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 1, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 1, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];


const TILE_WIDTH = 100;
const TILE_HEIGHT = 50;

let tile_images = [];

let x_start = 50 - TILE_WIDTH/2;
let y_start = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  tile_images.push(loadImage("./tiles/grass.png"));
  tile_images.push(loadImage("./tiles/sand.png"));
  tile_images.push(loadImage("./tiles/water.png"));
}

function draw_tile(img, x, y) {
  let x_screen = x_start + (x - y) * TILE_WIDTH/2;
  let y_screen = y_start + (x + y) * TILE_HEIGHT/2;
  image(img, x_screen, y_screen);
}


function draw_grid() {
  x_start = width/2 - TILE_WIDTH/2;
  y_start = 50;
  
  for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
      draw_tile(tile_images[grid[j][i]], i, j);
    }
  }
}

function draw() {
  background("black");
  draw_grid();
}
