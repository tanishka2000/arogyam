function isMobile() {
  return screen.width <= parseInt("500px");
}
if (isMobile) {
  var thingToRemove = document.querySelectorAll(".text-bottom-left")[0];

  thingToRemove.parentNode.removeChild(thingToRemove);
}
