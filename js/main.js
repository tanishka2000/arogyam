if (screen.width > parseInt("880px")) {
  function openForm() {
    document.getElementById("contactUsForm").style.opacity = 1;

    document.getElementById("contactUsForm").style.width = "30%";

    document.getElementById("contactus-iconId").style.marginRight = "30%";
    document.getElementById("contactus-iconId").style.opacity = 0;
  }

  function closeForm() {
    document.getElementById("contactUsForm").style.width = "0";
    document.getElementById("contactUsForm").style.opacity = 0;

    document.getElementById("contactus-iconId").style.marginRight = "0px";
    document.getElementById("contactus-iconId").style.opacity = 1;
  }
}
if (screen.width <= parseInt("880px")) {
  function openForm() {
    document.getElementById("contactUsForm").style.opacity = 1;
    document.getElementById("contactUsForm").style.width = "100%";
    document.getElementById("contactus-iconId").style.marginRight = "100%";
    document.getElementById("contactus-iconId").style.opacity = 0;

    document.getElementById("mobile-nav").style.height = 0;
  }

  function closeForm() {
    document.getElementById("contactUsForm").style.width = "0";
    document.getElementById("contactUsForm").style.opacity = 0;

    document.getElementById("contactus-iconId").style.marginRight = "0px";
    document.getElementById("contactus-iconId").style.opacity = 1;
    document.getElementById("mobile-nav").style.height = "auto";
  }
}
function closeErrorAlert() {
  document.getElementById("alertEmptyFieldsTrue").style.opacity = 0;
}

function closeSuccessAlert() {
  document.getElementById("alertEmptyFieldsFalse").style.opacity = 0;
}
