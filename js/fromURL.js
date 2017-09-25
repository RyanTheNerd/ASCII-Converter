function drawFromUrl() {
  var url = new URL(window.location.href);
  var width = url.searchParams.get("width");
  var image = url.searchParams.get("image").split("");
  for(i = 0; i < image.length; i++) {
    image[i] = convertBase(image[i], 16, 4);
    image[i] = image[i].split("");
    for(var x = 0; x < 2 - image[i].length; x++) {
      image[i].unshift(0);
    }
    image[i] = image[i].join("");
  }
  var regex = new RegExp(".{1," + width + "}", 'g');
  image = image.join("").match(regex);
  blocks = ["\u2591", "\u2592", "\u2593", "\u2588"].reverse();
  if(typeof finalProduct == "object") {
    document.body.removeChild(finalProduct);
  }
  finalProduct = document.createElement("div");
  finalProduct.id = "image";
  document.body.appendChild(finalProduct);
  for(var y = 0; y < image.length; y++) {
    image[y] = image[y].split("").map(function(x) {
      for(var i = 0; i < blocks.length; i++) {
        if(i == x) {
          return blocks[i];
        }
      }
    }).join("");
    finalProduct.appendChild(document.createTextNode(image[y]));
   finalProduct.appendChild(document.createElement("br"));
  }
}
