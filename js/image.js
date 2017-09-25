document.getElementById('imageUpload').addEventListener('change', readURL, true);
var image = new Image();

image.onload = function() {
  ratio = image.width/image.height;
  ascii.width = document.getElementById("rows").value;
  ascii.height = ascii.width*ascii.charWidth/ratio/ascii.charHeight;

  canvas.width = ascii.width;
  canvas.height = ascii.height;

  main(image);
}

function readURL() {
  var file = document.getElementById("imageUpload").files[0];
  console.log(file.type);
  var reader = new FileReader();
  reader.onloadend = function() {
    if(file.type.slice(0, 5) == "image") {
      image.src = reader.result;
    }
    else if(file.type.slice(0, 5) == "video") {
      video.src = reader.result;
    }
  }
  if (file) {
    reader.readAsDataURL(file);
  }
  else {}
}
