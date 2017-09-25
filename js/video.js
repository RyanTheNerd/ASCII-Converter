var video = document.createElement("video");
video.onloadstart = function() {
  video.autoplay = true;
  video.loop = true;
}

video.addEventListener( "loadedmetadata", function (e) {
    this.width = document.getElementById("rows").value;
    this.height = (this.videoHeight/this.videoWidth)*this.width;
    playVideo();
}, false );

function playVideo() {
  ratio = video.width/video.height;
  ascii.width = document.getElementById("rows").value;
  ascii.height = ascii.width*ascii.charWidth/ratio/ascii.charHeight;

  canvas.width = ascii.width;
  canvas.height = ascii.height;

  ctx.drawImage(video, 0, 0, ascii.width, ascii.height);
  main(video);
  window.requestAnimationFrame(playVideo);
}
