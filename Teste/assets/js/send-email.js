const form = document.querySelector('form');
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const mess = document.querySelector('#message');
const assunto = document.querySelector('#assunto');

function sendEmail() {
    const bodyMessage = `Nome : ${nome.value}<br> Email : ${email.value}<br> Assunto : ${assunto.value}<br> Mensagem : ${mess.value}`
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "rebecaoliveirafullstack@gmail.com",
        Password : "1717B35DBD223C2A0437A3906FC93AE14BFB",
        To : 'rebecaoliveirafullstack@gmail.com',
        From : "rebecaoliveirafullstack@gmail.com",
        Subject : assunto.value,
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
        if(item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if(items[1].value != ""){
            checkEmail()
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        })

        item.addEventListener("keyup", () => {
        if(item.value != ""){
            item.classList.remove("error");
            item.parentElement.classList.remove("error");
        }
        else {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
    })
    }

    function checkEmail() {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const errorTxtEmail = document.querySelector(".error-txt.email");

        if (!email.value.match(emailRegex)){
            email.classList.add("error");
            email.parentElement.classList.add("error");

            if(email.value != ""){
                errorTxtEmail.innerText = "Digite um endereço de e-mail válido";
            }
            else {
                errorTxtEmail.innerText = "Email não pode ficar em branco";
            }
        }
        else {
            email.classList.remove("error");
            email.parentElement.classList.remove("error");
        }        
    }    
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs()

    if(!nome.classList.contains("error") && !email.classList.contains("error") && !mess.classList.contains("error")){
        sendEmail()

        form.reset();
        return false;
    }
})
