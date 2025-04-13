/**validate fields and show error message*/
async function validateField(fieldId, errorMensageId) {
    const formField = document.querySelector(fieldId);
    const messageError = document.querySelector(errorMensageId);
    const isEmpty = !formField.value.trim();
  
    messageError.style.visibility = isEmpty ? "visible" : "hidden";
  
    return isEmpty;
  }
  
  /**validate emailField and show error message*/
  async function validateEmail(fieldId, errorMensageId) {
    const emailRegulator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const inputValue = document.querySelector(fieldId).value.trim();
    const messageError = document.querySelector(errorMensageId);
  
    const isEmpty = !inputValue;
    const isEmailInvalid = inputValue && !emailRegulator.test(inputValue)
    const hasError = isEmpty || isEmailInvalid
  
    if (isEmpty) {
      messageError.style.visibility = "visible"
      messageError.textContent = "Esqueceu-se de nos deixar o seu email";
    } else if (isEmailInvalid) {
      messageError.style.visibility = "visible"
      messageError.textContent = "Por favor, insira um e-mail válido."
    } else {
      messageError.style.visibility = "hidden"
    }
  
    return hasError;
  }
  
  /**validate checkboxField and show error message*/
  async function validateCheckbox(fieldId, errorMensageId) {
    const formField = document.querySelector(fieldId);
    const messageError = document.querySelector(errorMensageId);
    const isEmpty = !formField.checked
    const isCheckbox = formField.type === "checkbox";
  
    messageError.style.visibility = isCheckbox && isEmpty ? "visible" : "hidden"
  
    return isEmpty
  }
  
  
  /**Validate on input change */
  document.querySelector("#fassunto").addEventListener("change", (e) => {
    validateField("#fassunto", "#assuntoHelp")
  })
  document.querySelector("#fname").addEventListener("change", (e) => {
    validateField("#fname", "#nameHelp")
  })
  document.querySelector("#fmensage").addEventListener("change", (e) => {
    validateField("#fmensage", "#mensageHelp")
  })
  document.querySelector("#fmail").addEventListener("change", (e) => {
    validateEmail("#fmail", "#mailHelp")
  })
  document.querySelector("#fcheck").addEventListener("change", (e) => {
    validateCheckbox("#fcheck", "#checkHelp")
  })
  
  /**Find the trigger and open the modal (messages)*/
  document.querySelector("#btnSendEmail").addEventListener("click", async function (e) {
    e.preventDefault();
    closeModal();
  
    const fassuntoError = await validateField("#fassunto", "#assuntoHelp")
    const fnameError = await validateField("#fname", "#nameHelp")
    const fmensageError = await validateField("#fmensage", "#mensageHelp")
    const fmailError = await validateEmail("#fmail", "#mailHelp")
    const fcheckError = await validateCheckbox("#fcheck", "#checkHelp")
  
    //open modal
    document.querySelector(".submit-modal").style.display = "flex";
  
    //error
    if (fassuntoError || fnameError || fmailError || fmensageError || fcheckError) {
      await loadComponent("emailError-placeholder", "modal-email-error.html");
      /*add icon svg*/
      searchBtnIcons()
      return;
    }
  
    //submited
    await loadComponent("emailSent-placeholder", "modal-email-sent.html");
    /*add icon svg*/
    searchBtnIcons()
    document.querySelector(".form-help").style.visibility = 'hidden';
  });
  
  /**Clean error messages if has values */
  function closeModal() {
    document.querySelector("#emailError-placeholder").textContent = "";
    document.querySelector("#emailSent-placeholder").textContent = "";
    document.querySelector(".submit-modal").style.display = "none"
  };
  
  /**Clean values if the form is submited */
  function resetForm() {
    const form = document.querySelector("#messageForm");
    const messageError = document.querySelectorAll(".form-help");
    messageError.forEach( messageError => {
      messageError.style.visibility = "hidden" 
    })
    form.reset(); 
  }
  
  document.getElementById("btnCleanForm").addEventListener("click" , function(event) {
    event.preventDefault(); // Prevent load page
    resetForm()
  })
  
  /**Close positive form and clean values */
  async function returnFormClean() {
  
    const fassuntoError = await validateField("#fassunto", "#assuntoHelp")
    const fnameError = await validateField("#fname", "#nameHelp")
    const fmensageError = await validateField("#fmensage", "#mensageHelp")
    const fmailError = await validateEmail("#fmail", "#mailHelp")
    const fcheckError = await validateCheckbox("#fcheck", "#checkHelp")
  
    if (fassuntoError || fnameError || fmailError || fmensageError || fcheckError) {
      return;
    }
  
    resetForm();
    closeModal();
  }  