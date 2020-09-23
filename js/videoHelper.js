function showhide_video(divId, videoId) {
  var e = document.getElementById(divId);
  if (e.style.display == "none") e.style.display = "block";
  else e.style.display = "none";
  var f = document.getElementById(videoId);
  // pause iframe video
  var iframeSrc = f.src;
  f.src = iframeSrc;
}
