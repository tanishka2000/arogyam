if (screen.width > parseInt("880px")) {
  function openForm() {
    document.getElementById("contactUsForm").style.opacity = 1;

    document.getElementById("contactUsForm").style.width = "30%";

    document.getElementById("socialMedia-icons").style.marginRight = "30%";
    document.getElementById("socialMedia-icons").style.opacity = 0;
    document.getElementById("marketing-line").style.marginRight = "30%";
    document.getElementById("marketing-line").style.opacity = 0;
    document.getElementById("contact-btn-wrap").style.marginRight = "30%";
    document.getElementById("contact-btn-wrap").style.opacity = 0;
  }

  function closeForm() {
    document.getElementById("contactUsForm").style.width = "0";
    document.getElementById("contactUsForm").style.opacity = 0;

    document.getElementById("socialMedia-icons").style.marginRight = "0px";
    document.getElementById("socialMedia-icons").style.opacity = 1;
    document.getElementById("marketing-line").style.marginRight = "0px";
    document.getElementById("marketing-line").style.opacity = 1;
    document.getElementById("contact-btn-wrap").style.marginRight = "0px";
    document.getElementById("contact-btn-wrap").style.opacity = 1;
  }
}
if (screen.width <= parseInt("880px")) {
  function openForm() {
    document.getElementById("contactUsForm").style.opacity = 1;
    document.getElementById("contactUsForm").style.width = "100%";
    document.getElementById("socialMedia-icons").style.marginRight = "100%";
    document.getElementById("socialMedia-icons").style.opacity = 0;

    document.getElementById("mobile-nav").style.height = 0;
  }

  function closeForm() {
    document.getElementById("contactUsForm").style.width = "0";
    document.getElementById("contactUsForm").style.opacity = 0;

    document.getElementById("socialMedia-icons").style.marginRight = "0px";
    document.getElementById("socialMedia-icons").style.opacity = 1;
    document.getElementById("mobile-nav").style.height = "auto";
  }
}
function closeErrorAlert() {
  document.getElementById("alertEmptyFieldsTrue").style.opacity = 0;
}

function closeSuccessAlert() {
  document.getElementById("alertEmptyFieldsFalse").style.opacity = 0;
}
