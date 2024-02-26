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
      message => alert(message)
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for(const item of items){
        if(item.value = "") {
            item.classList.add("error");
            item.parentElement.classList.add("error")
        }
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // sendEmail()
})
