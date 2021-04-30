function isMobile() {
  return screen.width <= parseInt("500px");
}

function openForm() {
  document.getElementById("contactUsForm").style.opacity = 1;

  document.getElementById("contactUsForm").style.width = isMobile()
    ? "100%"
    : "455px";

  document.getElementById("socialMedia-icons").style.marginRight = isMobile()
    ? "100%"
    : "30%";
  document.getElementById("socialMedia-icons").style.opacity = 0;
  document.getElementById("contact-btn-wrap").style.marginRight = "30%";
  document.getElementById("contact-btn-wrap").style.display = "none";
  // for big screen
  if (!isMobile()) {
    document.getElementById("marketing-line").style.marginRight = "30%";
    document.getElementById("marketing-line").style.opacity = 0;
  }
}

function closeForm() {
  document.getElementById("contactUsForm").style.width = "0";
  document.getElementById("contactUsForm").style.opacity = 0;

  document.getElementById("socialMedia-icons").style.marginRight = "0px";
  document.getElementById("socialMedia-icons").style.opacity = 1;

  document.getElementById("contact-btn-wrap").style.marginRight = "0px";
  document.getElementById("contact-btn-wrap").style.display = "block";
  // for big screen
  if (!isMobile()) {
    document.getElementById("marketing-line").style.marginRight = "0px";
    document.getElementById("marketing-line").style.opacity = 1;
  }
}

function closeErrorAlert() {
  document.getElementById("errorAlert").style.display = "none";
  setTimeout(() => {
    document.getElementById("alert-area").style.width = "0%";
  }, 400);
}

function closeSuccessAlert() {
  document.getElementById("successAlert").style.display = "none";
  setTimeout(() => {
    document.getElementById("alert-area").style.width = "0%";
  }, 400);
}

function openFaq() {
  closeForm();
  document.getElementById("contact-btn-wrap").style.display = "none";
  // document.getElementById("faqSection").style.opacity = 1;
  document.getElementById("faqSection").style.width = isMobile()
    ? "100%"
    : "30%";
}
function closeFaq() {
  document.getElementById("contact-btn-wrap").style.display = "block";
  // document.getElementById("faqSection").style.opacity = 0;
  document.getElementById("faqSection").style.width = "0%";
}
