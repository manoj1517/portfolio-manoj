function sendMail(){
    let val ={
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
  
          
    }
  
    emailjs.send("service_jylx0tp","template_aiyo9o9",val).then(alert("Email Sent!!"))
  }