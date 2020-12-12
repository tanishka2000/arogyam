function openNav() {
  document.getElementById("contactUsForm").style.opacity = 1;

  document.getElementById("contactUsForm").style.width = "30%";
  document.getElementById("contactus-iconId").style.marginRight = "30%";
}

function closeNav() {
  document.getElementById("contactUsForm").style.width = "0";
  document.getElementById("contactUsForm").style.opacity = 0;

  document.getElementById("contactus-iconId").style.marginRight = "0px";
}
