
var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene, {
    relativeInput: true
});

$(function () {
    var catHeight = $(".category").height() + 10;
    var catWidth = $(".content_center__block").width();
});

var formURL =
  "https://docs.google.com/forms/d/15Ts8au3uporAAOmcPJAcHTpK91t2kIAjej0djfHfxE4/formResponse?";

sendBtn.onclick = function() {
  var data = {
    "entry.779126364": document.getElementById("entry.779126364").value,
    "entry.1039583708": document.getElementById("entry.1039583708").value
  };
  $("#form").hide();
  postToGoogle(formURL, data);
  // loadSheet.click();
};
