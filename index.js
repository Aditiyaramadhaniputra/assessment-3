// ELEMENT INPUT
const inputName = document.querySelector(".form-inputed-name");
const inputEmail = document.querySelector(".form-inputed-email");
const inputPhone = document.querySelector(".form-inputed-phone");
const inputSubject = document.querySelector(".form-inputed-subject");
const inputMessage = document.querySelector(".form-inputed-message");
// ELEMENT LINK
const link = document.querySelector(".form-link");

const clicked = () => {
    const name = inputName.value;
    const email = inputEmail.value;
    const phone = inputPhone.value;
    const subject = inputSubject.value;
    const message = inputMessage.value;

    if ((name || email || phone || subject || message) === "") {
        return alert("form must be inputed!");
    }

    const sendToEmail = "aditiyaramadhanip57@gmail.com";

    link.href = `mailto:${sendToEmail}?subject=${subject}&body=Hallo, ${name}%0D%0A%0D%0A${message}`;
};
