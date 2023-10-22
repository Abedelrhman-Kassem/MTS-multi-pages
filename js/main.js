let copyRight = document.querySelector("footer .copyright");
copyRight.innerText = `All Rights Reserved © ${new Date().getFullYear()} MTS Solutions.`;

let contactLink = document.querySelector(".contact");

if (contactLink.classList.contains("active")) {
  const reciverMail = "boodykassem16@gmail.com";
  // Contact Form
  let submitBtnForm = document.querySelector("#submit-btn");

  submitBtnForm.addEventListener("click", (e) => {
    e.preventDefault();
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("number");
    let message = document.getElementById("message");

    validateName(name);
    validateEmail(email);
    validatePhone(phone);
    validateMessage(message);

    if (
      validateName(name) &&
      validateEmail(email) &&
      validatePhone(phone) &&
      validateMessage(message)
    ) {
      sendMail(name, email, phone, message);
    } else {
      `Check Your Internet`;
    }

    // Name Validate
    function validateName(name) {
      let requiredNameField = document.querySelector(".name-required");
      if (name.value.length == 0) {
        requiredNameField.classList.remove("d-none");
        return false;
      }
      requiredNameField.classList.add("d-none");
      return true;
    }

    // Email Validate
    function validateEmail(email) {
      let requiredEmailField = document.querySelector(".email-required");
      const reg = /^[a-z]\w+@\w+.\w+/i;

      if (reg.test(email.value) == false) {
        requiredEmailField.classList.remove("d-none");
        return false;
      }

      requiredEmailField.classList.add("d-none");
      return true;
    }

    // Phone Validate
    function validatePhone(phone) {
      let requiredPhoneField = document.querySelector(".phone-required");

      const reg = /(\(\+?(^[0-9]{1,4}$)\))?\s?(^\+?[0-9]{1,14}$)/;

      if (reg.test(phone.value) == false) {
        requiredPhoneField.classList.remove("d-none");
        return false;
      }

      requiredPhoneField.classList.add("d-none");
      return true;
    }

    // Message Validate
    function validateMessage(message) {
      let requiredMessageField = document.querySelector(".message-required");

      if (message.value.length == 0) {
        requiredMessageField.classList.remove("d-none");
        return false;
      }
      requiredMessageField.classList.add("d-none");
      return true;
    }
  });

  function sendMail(name, email, phone, message) {
    (function () {
      emailjs.init("dkTedlkKw_k3jiTl_");
    })();

    let params = {
      sender: email.value,
      to: reciverMail,
      message: `Name: ${name.value}
              Phone: ${phone.value}
              Message: ${message.value}`,
    };

    let serviceId = "service_2drsewk";
    let templateId = "template_xjot4xl";

    emailjs
      .send(serviceId, templateId, params)
      .then((res) => {
        const modalInstance = new bootstrap.Modal("#exampleModal");
        document.querySelector(
          ".modal-body"
        ).innerHTML = `Your request has been sent to sales@masstech.com.eg `;
        modalInstance.show();
      })
      .catch((error) => {
        const modalInstance = new bootstrap.Modal("#exampleModal");
        document.querySelector(".modal-body").innerHTML = error;
        modalInstance.show();
      });
  }
}
