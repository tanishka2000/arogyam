function isMobile() {
  return screen.width <= parseInt("500px");
}

function openForm() {
  // closeFaq();
  document.getElementById("contactUsForm").style.opacity = isMobile() ? 1 : 1;

  // document.getElementById("contactUsForm").style.width = isMobile()
  //   ? "100%"
  //   : "30%";
  document.getElementById("contactUsForm").style.width = isMobile()
    ? "100%"
    : "455px";

  document.getElementById("socialMedia-icons").style.marginRight = isMobile()
    ? "100%"
    : "30%";
  document.getElementById("socialMedia-icons").style.opacity = isMobile()
    ? 0
    : 0;
  // for big screen
  if (!isMobile()) {
    document.getElementById("marketing-line").style.marginRight = "30%";
    document.getElementById("marketing-line").style.opacity = 0;
    document.getElementById("contact-btn-wrap").style.marginRight = "30%";
    document.getElementById("contact-btn-wrap").style.opacity = 0;
  }
  // // for mobile screen
  // if (isMobile()) {
  //   document.getElementById("mobile-nav").style.height = 0;
  // }
}

function closeForm() {
  document.getElementById("contactUsForm").style.width = "0";
  document.getElementById("contactUsForm").style.opacity = 0;

  document.getElementById("socialMedia-icons").style.marginRight = "0px";
  document.getElementById("socialMedia-icons").style.opacity = 1;
  // for big screen
  if (!isMobile()) {
    document.getElementById("marketing-line").style.marginRight = "0px";
    document.getElementById("marketing-line").style.opacity = 1;
    document.getElementById("contact-btn-wrap").style.marginRight = "0px";
    document.getElementById("contact-btn-wrap").style.opacity = 1;
  }
  // // for mobile screen
  // if (isMobile()) {
  //   document.getElementById("mobile-nav").style.height = "auto";
  // }
}

function closeErrorAlert() {
  document.getElementById("alertEmptyFieldsTrue").style.opacity = 0;
}

function closeSuccessAlert() {
  document.getElementById("alertEmptyFieldsFalse").style.opacity = 0;
}

function openFaq() {
  closeForm();
  document.getElementById("contact-btn-wrap").style.opacity = 0;
  // document.getElementById("faqSection").style.opacity = 1;
  document.getElementById("faqSection").style.width = isMobile()
    ? "100%"
    : "30%";
}
function closeFaq() {
  document.getElementById("contact-btn-wrap").style.opacity = 1;
  // document.getElementById("faqSection").style.opacity = 0;
  document.getElementById("faqSection").style.width = "0%";
}
