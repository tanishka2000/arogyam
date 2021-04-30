function initiateMailSending() {
  var fieldsEmpty = checkInputs();
  if (fieldsEmpty == true) {
    document.getElementById("alert-area").style.width = "100%";
    document.getElementById("errorAlert").style.display = "block";
    document.getElementById("successAlert").style.display = "none";
  }
  if (fieldsEmpty == false) {
    sendMail();
  }
}

// ?using Formspree
function sendMail() {
  var form = document.getElementById("mainFormId");

  // console.log(form.email.value);
  async function handleSubmit(event) {
    event.preventDefault();
    var data = new FormData(event.target);
    // console.log(data);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        document.getElementById("alert-area").style.width = "100%";
        document.getElementById("successAlert").style.display = "block";
        document.getElementById("errorAlert").style.display = "none";
        form.reset();
      })
      .catch((error) => {
        document.getElementById("alert-area").style.width = "100%";
        document.getElementById("errorAlert").style.display = "block";
        document.getElementById("successAlert").style.display = "none";
        console.log(error);
      });
  }
  form.addEventListener("submit", handleSubmit);
}

// !using sendgrid gives error
// function sendMail() {
//   var data = JSON.stringify({
//     personalizations: [
//       {
//         to: [
//           {
//             email: "vishal.khandate19@vit.edu",
//             name: "Vishal Khandate",
//           },
//         ],
//         subject: "Hello, World!",
//       },
//     ],
//     from: {
//       email: "vishukblog000@gmail.com",
//       name: "Arogyam.Vishal_Khandate.sendgrid",
//     },
//     reply_to: {
//       email: "vishukblog000@gmail.com",
//       name: "Vishal Khandate",
//     },
//     content: [
//       {
//         type: "text/plain",
//         value: `Sender : ${
//           document.getElementById("formEmailInput").value
//         }\nMessage : ${document.getElementById("formMessageInput").value}`,
//       },
//     ],
//     // ,
//     // template_id: "d-ebfa87434a9442f897c9f1fc853eabb7",
//   });

//   var xhr = new XMLHttpRequest();
//   // including the line below is giving error
//   // xhr.withCredentials = true;

//   xhr.addEventListener("readystatechange", function () {
//     if (this.readyState === this.DONE) {
//       console.log(this.responseText);
//       document.getElementById("alert-area").style.width = "100%";
//       document.getElementById("successAlert").style.display = "block";
//       document.getElementById("errorAlert").style.display = "none";
//     }
//   });
//   // xhr.open(
//   //   "POST",
//   //   "https://cors-anywhere.herokuapp.com/https://api.sendgrid.com/v3/mail/send"
//   // );
//   xhr.open("POST", "https://api.sendgrid.com/v3/mail/send");
//   xhr.setRequestHeader(
//     "authorization",
//     "Bearer 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"
//   );

//   xhr.setRequestHeader("Access-Control-Allow-Credentials", "true");
//   xhr.setRequestHeader(
//     "Access-Control-Allow-Headers",
//     "Authorization, Content-Type, On-behalf-of, x-sg-elas-acl"
//   );
//   xhr.setRequestHeader(
//     "Access-Control-Allow-Methods",
//     "OPTIONS, GET, POST, PUT, PATCH, DELETE, HEAD, LINK, UNLINK"
//   );
//   xhr.setRequestHeader("Access-Control-Allow-Origin", window.location.hostname);
//   xhr.setRequestHeader("access-control-max-age", 600);
//   // xhr.setRequestHeader("Access-Control-Request-Method", "*");
//   xhr.setRequestHeader("Content-Type", "application/json");
//   xhr.setRequestHeader("server", "nginx");

//   xhr.setRequestHeader(
//     "x-no-cors-reason",
//     "https://sendgrid.com/docs/Classroom/Basics/API/cors.html"
//   );

//   xhr.send(data);
// }

function checkInputs() {
  if (
    document.getElementById("formEmailInput").value == "" ||
    document.getElementById("formMessageInput").value == ""
  ) {
    return true;
  } else {
    return false;
  }
}
