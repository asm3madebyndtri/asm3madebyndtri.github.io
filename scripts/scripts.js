"use strict";
// code lấy từ trang web này :
// https://www.codium.ai/question/how-can-i-validate-an-email-address-in-javascript/

const check = document.querySelector(".check");
check.addEventListener("click", function validateEmail() {
  const emailInput = document.getElementById("emailInput");
  const validationMessage = document.getElementById("validationMessage");
  const email = emailInput.value.trim();

  // Check if email is empty
  if (email === "") {
    validationMessage.innerText = "Please enter an email address";
    return false;
  }

  // Check if email is valid
  const emailParts = email.split("@");
  if (emailParts.length !== 2) {
    validationMessage.innerText =
      "Please enter a valid email address - missing or too many '@' symbols";
    return false;
  }

  const localPart = emailParts[0];
  const domainPart = emailParts[1];

  // Check local part for invalid characters
  const localPartRegex =
    /^[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+(\.[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+)*$/;
  if (!localPartRegex.test(localPart)) {
    validationMessage.innerText =
      "Please enter a valid email address - invalid characters in local part";
    return false;
  }

  // Check local part for consecutive periods
  if (localPart.includes("..")) {
    validationMessage.innerText =
      "Please enter a valid email address - consecutive periods in local part";
    return false;
  }

  // Check local part for leading or trailing period
  if (localPart.startsWith(".") || localPart.endsWith(".")) {
    validationMessage.innerText =
      "Please enter a valid email address - leading or trailing period in local part";
    return false;
  }

  // Check domain part for invalid characters
  const domainPartRegex = /^[a-zA-Z0-9.-]+$/;
  if (!domainPartRegex.test(domainPart)) {
    validationMessage.innerText =
      "Please enter a valid email address - invalid characters in domain part";
    return false;
  }

  // Check domain part for consecutive hyphens
  if (domainPart.includes("--")) {
    validationMessage.innerText =
      "Please enter a valid email address - consecutive hyphens in domain part";
    return false;
  }

  // Check domain part for leading or trailing hyphen
  if (domainPart.startsWith("-") || domainPart.endsWith("-")) {
    validationMessage.innerText =
      "Please enter a valid email address - leading or trailing hyphen in domain part";
    return false;
  }

  // Check domain part for valid TLD
  const tldRegex = /^[a-zA-Z]{2,}$/;
  const domainParts = domainPart.split(".");
  if (
    domainParts.length < 2 ||
    !tldRegex.test(domainParts[domainParts.length - 1])
  ) {
    validationMessage.innerText =
      "Please enter a valid email address - invalid top-level domain";
    return false;
  }

  // Email is valid
  if (email === "trindfx31867@funix.edu.com") {
    validationMessage.classList.toggle("hide-content");
    document.querySelector(".form-to-input").classList.toggle("hide-content");
    document.querySelector(".mts-40").classList.toggle("hide-content");
    document.getElementById("job-info").classList.toggle("hide-content");
    document.getElementById("certificate").classList.toggle("hide-content");
    document.getElementById("project").classList.toggle("hide-content");
    document.getElementById("footer").classList.toggle("hide-content");
    return true;
  } else {
    validationMessage.innerText =
      "Invalid Email (the email does not exist or wrong)";
    return false;
  }
});

const frameWork = document.querySelectorAll(".frame");
const secWorkY = document.querySelectorAll(".sec-y");
const secWorkX = document.querySelectorAll(".sec-x");
const btnOAC = document.querySelectorAll(".btns");
//OAC = Open and Close

const openFrame = function (i) {
  btnOAC[i].textContent = "View Less";
  frameWork[i].classList.remove("changeFrameHeight");
  secWorkY[i].classList.remove("hide-content");
  secWorkX[i].classList.remove("hide-content");
};
const closeFrame = function (i) {
  btnOAC[i].textContent = "View More";
  frameWork[i].classList.add("changeFrameHeight");
  secWorkY[i].classList.add("hide-content");
  secWorkX[i].classList.add("hide-content");
};

for (let i = 0; i < frameWork.length; i++) {
  btnOAC[i].addEventListener("click", function () {
    if (frameWork[i].classList.contains("changeFrameHeight")) {
      openFrame(i);
      console.log("opened");
    } else if (!frameWork[i].classList.contains("changeFrameHeight")) {
      closeFrame(i);
      console.log("closed");
    }
  });
}

console.log(frameWork.length);
