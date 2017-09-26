function swapSets(s) {
  if(s) {
    blocks = simpleBlocks;
  }
  else {
    blocks = complexBlocks;
  }
  numOBT = blocks.length;
  numRatio = 765/numOBT;
  main(image);
}

var ibmMode = false;
function ibm(toggle) {
  blocks.reverse();
  if(toggle) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "green";
  }
  else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
  main(image);
}

function bright(b) {
  document.body.style.fontWeight = b;
}

var s = 0;
function threeD() {
  if(s > 0) {
    document.body.style.textShadow = `-${s}em -${s}em red, ${s}em ${s}em blue`;
    return;
  }
  document.body.style.textShadow = "none";
}
