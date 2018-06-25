var button = $(".hamburger");

button.on("click", function(){
  $(".nab").toggleClass("nab-close");
  $(".hamburger").toggleClass("hamburger-close");
  return false;
});
