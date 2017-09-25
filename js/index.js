var complexBlocks = ["$", "@", "B", "%", "8", "&amp;", "W", "M", "#", "*", "o", "a", "h", "k", "b", "d", "p", "q", "w", "m", "Z", "O", "0", "Q", "L", "C", "J", "U", "Y", "X", "z", "c", "v", "u", "n", "x", "r", "j", "f", "t", "/", "\\", "|", "(", ")", "1", "{", "}", "[", "]", "?", "&ndash;", "_", "+", "&tilde;", "&lt;", "&gt;", "i", "!", "l", "I", ";", ":", ",", "&quot;", "&circ;", "`", "&apos;", ".", "&nbsp;"];
var simpleBlocks = ["&nbsp;", "\u2591", "\u2592", "\u2593", "\u2588"].reverse()
var blocks = complexBlocks;


var ascii = new Object();
ascii.charWidth = 9;   // Width/height of the blocks
ascii.charHeight = 16;

var canvas = document.createElement("canvas");
var ctx = canvas.getContext('2d');
var mono;

function convert2Blocks(pixels, px, gamma, dbmode) {
  if(pixels[px+3] == 0) {
    return blocks[blocks.length-1];
  }
  block = Math.floor((pixels[px] + pixels[px + 1] + pixels[px + 2] -gamma)/numRatio)-1;
  if(block > numOBT-1) {block = numOBT-1}
  if(block < 0) {block = 0}
  return dbmode ? block : blocks[block];
}

function main(source) {
  factor = document.getElementById("zoom").value;

  ascii.width = document.getElementById("rows").value;
  ascii.height = Math.round(ascii.width*ascii.charWidth/ratio/ascii.charHeight);

  canvas.width = ascii.width;
  canvas.height = ascii.height;

  ctx.drawImage(source, 0, 0, ascii.width, ascii.height);

  if(typeof finalProduct == "object") {
    document.body.removeChild(finalProduct);
  }

  finalProduct = document.createElement("div");
  finalProduct.id = "image";
  document.body.appendChild(finalProduct);

  gamma = document.getElementById("gamma").value;
  pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

  finalProduct.style.fontSize = factor + "px";

  numOBT = blocks.length;   // Number of blocks total
  numRatio = 765/numOBT;

  pixelCount = 0;
  mono = [];

  for(var y = 0; y < ascii.height; y++) {
    mono[y] = [];

    for(var x = 0; x < ascii.width*4; x += 4) {
      mono[y].push(convert2Blocks(pixels, pixelCount, gamma));
      pixelCount += 4;
    }

    mono[y] = mono[y].join("");
    newLine = document.createElement("pre");
    newLine.innerHTML = mono[y];
   finalProduct.appendChild(newLine);
  }
}

drawFromUrl()
