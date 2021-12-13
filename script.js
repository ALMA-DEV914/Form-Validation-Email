function sendEmail(){
    Email.send({
        SecureToken: "c1ee33bb-ffdf-4d5c-8365-53e98c96692f",
        To : "almabraun37582019@yahoo.com",
        From : document.getElementById("email").value,
        Subject : "New Contact Form Inquiry",
        Body : "Name: " + document.getElementById("name").value + "<br> Email: " + document.getElementById("email").value + "<br> Phone No: " + document.getElementById("phone").value + "<br> Message: " + document.getElementById("message").value,
        
        Attachments : [
          {
            name : "smtpjs.png",
            path : "https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png"
          }]
    }).then(
      message => alert("Message Sent Successfully")
    );
}
