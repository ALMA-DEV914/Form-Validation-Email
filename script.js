function sendEmail(){
    Email.send({
        SecureToken: "8e42596b-1644-45dd-b906-1c79ccac2055 ",
        To : "almabraun37582019@yahoo.com",
        From : document.getElementById("email").value,
        Subject : "New Contact Form Inquiry",
        Body: "Name: " + document.getElementById("name").value + "<br> Email: " + document.getElementById("email").value + "<br> Phone No: " + document.getElementById("phone").value + "<br> Message: " + document.getElementById("message").value,
        Attachments: [
          {
            name : "smtpjs.png",
            path : "https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png"
          }]
    }).then(
      message => alert("Message Sent Successfully!")
    );
}
