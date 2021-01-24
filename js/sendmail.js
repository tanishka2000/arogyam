function sendMail() {
  var data = JSON.stringify({
    personalizations: [
      {
        to: [
          {
            email: "vishal.khandate19@vit.edu",
            name: "Vishal Khandate",
          },
        ],
        // dynamic_template_data: {
        //   guest: "Anthony Wang",
        //   partysize: "4",
        //   english: true,
        //   date: "April 1st, 2018",
        // },
        subject: "Hello, World!",
      },
    ],
    from: {
      email: "vishukblog000@gmail.com",
      name: "Arogyam.Vishal_Khandate.sendgrid",
    },
    reply_to: {
      email: "vishukblog000@gmail.com",
      name: "Vishal Khandate",
    },
    content: [
      {
        type: "text/plain",
        value: `Sender : ${
          document.getElementById("formEmailInput").value
        }\nMessage : ${document.getElementById("formMessageInput").value}`,
      },
    ],
    // ,
    // template_id: "d-ebfa87434a9442f897c9f1fc853eabb7",
  });

  var xhr = new XMLHttpRequest();
  // including the line below is giving error
  // xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });
  xhr.open(
    "POST",
    "https://cors-anywhere.herokuapp.com/https://api.sendgrid.com/v3/mail/send"
  );
  xhr.setRequestHeader(
    "authorization",
    "Bearer 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"
  );

  xhr.setRequestHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5501/");
  xhr.setRequestHeader("Access-Control-Allow-Credentials", "true");
  // xhr.setRequestHeader(
  //   "Access-Control-Allow-Methods",
  //   "GET, POST, PUT, DELETE, OPTIONS"
  // );
  xhr.setRequestHeader("Access-Control-Allow-Methods", "POST");
  xhr.setRequestHeader("Access-Control-Allow-Headers", "Content-Type");

  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(data);
}
function checkInputs() {
  if (true) {
  }
}
