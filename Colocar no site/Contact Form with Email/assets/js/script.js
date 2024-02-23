const form = document.querySelector('form');
const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const subject = document.querySelector("#subject");
const mess = document.querySelector("#message");

function sendEmail() {
    const bodyMessage = `Full Name : ${fullName.value}<br> Email : ${email.value}<br> Phone Number : ${phone.value}<br> Subject : ${subject.value}<br> Message : ${mess.value}<br>`

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "rebecaoliveirafullstack@gmail.com",
        Password : "1717B35DBD223C2A0437A3906FC93AE14BFB",
        To : 'rebecaoliveirafullstack@gmail.com',
        From : "rebecaoliveirafullstack@gmail.com",
        Subject : subject,
        Body : bodyMessage
    }).then(
      message => {
        if (message == 'OK'){
            Swal.fire({
                title: "Sucess!",
                text: "Message sent sucessfully!",
                icon: "success"
              });
        }
      }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for(const item of items){
        if(item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        item.addEventListener("keyup", () =>{
            if(item.value != ""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail() {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!email.value.match(emailRegex)){
        email.classList.add("error");
        email.parentElement.classList.add("error");
    }
    else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs()
    // sendEmail();
})