function getImageUrl() {
  if(blocks.length > 4) {
    return;
  }
  newImg = [];
  imageURI = finalProduct.innerHTML.split("").map(function(x) {
    for(var i = 0; i < blocks.length; i++) {
      if(x == blocks[i]) {
        newImg.push(i);
      }
    }
  });
  imageURI = newImg.join("").match(/.{1,2}/g);
  console.log(imageURI);
  for(var i = 0; i < imageURI.length; i++) {
    imageURI[i] = convertBase(imageURI[i], 4, 16) || "0";
  }
  imageURI = imageURI.join("");
  console.log(imageURI);
  imageURI.replace(/(.)\2/g, function(a) {
    console.log(a);
    if(a.toString().length > 3) {
      return a[0] + "x" + a.length;
    }
    else {
      return a;
    }
  });
  let url = new URL(window.location.href);
  let params = new URLSearchParams(url.search.slice(1));
  params.append('width', ascii.width);
  params.append('image', imageURI);
  document.getElementById("url").innerHTML = window.location.href.split('?')[0] + "?" + params;
}
