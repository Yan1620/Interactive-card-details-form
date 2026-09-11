// Card form-success

const cardForm = document.querySelector(".card-form");
const cardSuccess = document.querySelector(".card-success");

cardForm.addEventListener("submit", event => {
    event.preventDefault();

    let isFormValid = true;

    if (cardNameInput.value === "") {
        nameError.textContent = "Can`t be blank";
        nameError.classList.add("active");
        cardNameInput.classList.add("error-active");
        isFormValid = false;
    }

    if (cardNumberInput.value === "") {
        numberError.textContent = "Can`t be blank";
        numberError.classList.add("active");
        cardNumberInput.classList.add("error-active");
        isFormValid = false;
    } else if (cardNumberInput.value.length < 19) {
        numberError.textContent = "Wrong format, too short";
        numberError.classList.add("active");
        cardNumberInput.classList.add("error-active");
        isFormValid = false;
    }

    if (cardCvcInput.value === "") {
        cvcError.textContent = "Can`t be blank";
        cvcError.classList.add("active");
        cardCvcInput.classList.add("error-active");
        isFormValid = false;
    } else if (cardCvcInput.value.length < 3) {
        cvcError.textContent = "Wrong format, too short";
        cvcError.classList.add("active");
        cardCvcInput.classList.add("error-active");
        isFormValid = false;
    }

    if (cardMonthInput.value === "") {
        dateError.textContent = "Can`t be blank";
        dateError.classList.add("active");
        cardMonthInput.classList.add("error-active");
        isFormValid = false;
    } else if (cardMonthInput.value.length < 2) {
        dateError.textContent = "Wrong format, too short";
        dateError.classList.add("active");
        cardMonthInput.classList.add("error-active");
        isFormValid = false;
    }

    if (cardYearInput.value === "") {
        dateError.textContent = "Can`t be blank";
        dateError.classList.add("active");
        cardYearInput.classList.add("error-active");
        isFormValid = false;
    } else if (cardYearInput.value.length < 2) {
        dateError.textContent = "Wrong format, too short";
        dateError.classList.add("active");
        cardYearInput.classList.add("error-active");
        isFormValid = false;
    }

    if (isFormValid) {
        cardForm.classList.add("hidden");
        cardSuccess.classList.remove("hidden");
    }
});

// Card numbers

const cardNumberInput = document.querySelector("#card-numbers");
const cardFrontNumber = document.querySelector(".card-front__numbers");
const numberError = document.querySelector(".number-error");

cardNumberInput.addEventListener("input", event => {
    let digits = "";
    for (const char of event.target.value) {
        if (char >= "0" && char <= "9") {
            digits += char;
        }
    }

    let formatted = "";
    for (let i = 0; i < digits.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formatted += " ";
        }
        formatted += digits[i];
    }

    event.target.value = formatted;

    if (formatted) {
        cardFrontNumber.textContent = formatted;
        if (numberError.textContent === "Wrong format, too short" && formatted.length === 19) {
            numberError.classList.remove("active");
            cardNumberInput.classList.remove("error-active");
        }
        if (numberError.textContent === "Can`t be blank") {
            numberError.classList.remove("active");
            cardNumberInput.classList.remove("error-active");
        }
    } else {
        cardFrontNumber.textContent = "0000 0000 0000 0000";
    }
});

// Card name

const cardNameInput = document.querySelector("#card-name");
const cardFrontName = document.querySelector(".card-front__name");
const nameError = document.querySelector(".name-error");

cardNameInput.addEventListener("input", event => {
    let value = "";

    for (const char of event.target.value) {
        if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
            value += char;
        }
        if ((char === " " || char === "-") && value !== "" && value.at(-1) !== "-" && value.at(-1) !== " ") {
            value += char;
        }
    }

    event.target.value = value;

    if (value) {
        cardFrontName.textContent = value;
        nameError.classList.remove("active");
        cardNameInput.classList.remove("error-active");
    } else {
        cardFrontName.textContent = "Jane Appleseed";
    }
});

// Card cvc

const cardCvcInput = document.querySelector("#card-cvc");
const cardBackCvc = document.querySelector(".card-back__cvc");
const cvcError = document.querySelector(".cvc-error");

cardCvcInput.addEventListener("input", event => {
    let digits = "";

    for (const char of event.target.value) {
        if (char >= "0" && char <= "9") {
            digits += char;
        }
    }

    event.target.value = digits;

    if (digits) {
        cardBackCvc.textContent = digits;
        if (cvcError.textContent === "Wrong format, too short" && digits.length === 3) {
            cvcError.classList.remove("active");
            cardCvcInput.classList.remove("error-active");
        }
        if (cvcError.textContent === "Can`t be blank") {
            cvcError.classList.remove("active");
            cardCvcInput.classList.remove("error-active");
        }
    } else {
        cardBackCvc.textContent = "000";
    }
});

// Card date

const dateError = document.querySelector(".date-error");

// Card month

const cardMonthInput = document.querySelector("#exp-month");
const cardFrontMonth = document.querySelector(".card-front__month");

cardMonthInput.addEventListener("input", event => {
    let digits = "";
    
    for (const char of event.target.value) {
        if (char >= "0" && char <= "9") {
            digits += char;
        }
    }

    if (digits.length === 1) {
        if (digits !== "0" && digits !== "1") {
            digits = "0" + digits;
        }

    } 

    if (digits.length === 2 && digits.at(0) === "0") {
        if (digits === "00") {
            digits = "0";
        }
    }

    if (digits.length === 2 && digits.at(0) === "1") {
        if (digits !== "10" && digits !== "11" && digits !== "12") {
            digits = "1";
        }
    }

    event.target.value = digits;
    
    if (digits) {
        cardFrontMonth.textContent = digits;
        if (digits.length === 2 && cardYearInput.value.length === 2) {
            dateError.classList.remove("active");
        }
        if (dateError.textContent === "Can`t be blank" && cardYearInput.value.length !== 0) {
            dateError.classList.remove("active");
        }
        if (dateError.textContent === "Wrong format, too short" && digits.length === 2) {
            cardMonthInput.classList.remove("error-active");
        }
        if (dateError.textContent === "Can`t be blank") {
            cardMonthInput.classList.remove("error-active");
        }
    } else {
        cardFrontMonth.textContent = "00";
    }
});

// Card year

const cardYearInput = document.querySelector("#exp-year");
const cardFrontYear = document.querySelector(".card-front__year");

cardYearInput.addEventListener("input", event => {
    let digits = "";
    
    for (const char of event.target.value) {
        if (char >= "0" && char <= "9") {
            digits += char;
        }
    }

    event.target.value = digits;
    
    if (digits) {
        cardFrontYear.textContent = digits;
        if (digits.length === 2 && cardMonthInput.value.length === 2) {
            dateError.classList.remove("active");
        }
        if (dateError.textContent === "Can`t be blank" && cardMonthInput.value.length !== 0) {
            dateError.classList.remove("active");
        }
        if (dateError.textContent === "Wrong format, too short" && digits.length === 2) {
            cardYearInput.classList.remove("error-active");
        }
        if (dateError.textContent === "Can`t be blank") {
            cardYearInput.classList.remove("error-active");
        }
    } else {
        cardFrontYear.textContent = "00";
    }
});

// Card success button 

const successButton = document.querySelector(".card-success__button");

successButton.addEventListener("click", () => {
    cardForm.reset();
    cardFrontNumber.textContent = "0000 0000 0000 0000";
    cardFrontName.textContent = "Jane Appleseed";
    cardFrontMonth.textContent = "00";
    cardFrontYear.textContent = "00";
    cardBackCvc.textContent = "000";

    cardForm.classList.remove("hidden");
    cardSuccess.classList.add("hidden");
});