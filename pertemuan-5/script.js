// DOM Manipulation Buttons

let btnBackground = document.createElement("button");
btnBackground.textContent = "Change Background";
btnBackground.onclick = function () {
  document.body.style.backgroundColor = "#e8f4fc";
};

let btnTextColor = document.createElement("button");
btnTextColor.textContent = "Change Text Color";
btnTextColor.onclick = function () {
  document.body.style.color = "#2c3e50";
};

let btnFontSize = document.createElement("button");
btnFontSize.textContent = "Increase Font Size";
btnFontSize.onclick = function () {
  let size = parseInt(getComputedStyle(document.body).fontSize);
  document.body.style.fontSize = (size + 2) + "px";
};

let container = document.getElementById("output3");
container.appendChild(btnBackground);
container.appendChild(btnTextColor);
container.appendChild(btnFontSize);
// ===== Exercise 4: Form Validation =====

// create form
let form = document.createElement("form");

// name input
let nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.placeholder = "Name";

// email input
let emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.placeholder = "Email";

// submit button
let submitBtn = document.createElement("button");
submitBtn.textContent = "Submit";
submitBtn.type = "button";

// message area
let message = document.createElement("p");

// validation logic
submitBtn.onclick = function () {
  if (nameInput.value === "") {
    message.textContent = "Name cannot be empty";
    message.style.color = "red";
  } else if (!emailInput.value.includes("@")) {
    message.textContent = "Email must contain @";
    message.style.color = "red";
  } else {
    message.textContent = "Form is valid!";
    message.style.color = "green";
  }
};

// add elements to form
form.appendChild(nameInput);
form.appendChild(document.createElement("br"));
form.appendChild(emailInput);
form.appendChild(document.createElement("br"));
form.appendChild(submitBtn);
form.appendChild(message);

// add form to page
let output4 = document.getElementById("output4");
output4.appendChild(form);
// ===== Exercise 4: Form Validation =====

// Create form element
const form4 = document.createElement("form");

// Name label & input
const nameLabel4 = document.createElement("label");
nameLabel4.textContent = "Name: ";
const nameInput4 = document.createElement("input");
nameInput4.type = "text";

// Line break
const br4_1 = document.createElement("br");

// Email label & input
const emailLabel4 = document.createElement("label");
emailLabel4.textContent = "Email: ";
const emailInput4 = document.createElement("input");
emailInput4.type = "text";

// Line break
const br4_2 = document.createElement("br");

// Submit button
const submitBtn4 = document.createElement("button");
submitBtn4.type = "button";
submitBtn4.textContent = "Submit";

// Message box
const message4 = document.createElement("div");
message4.style.marginTop = "10px";

// Validation logic
submitBtn4.onclick = function () {
  const nameValue = nameInput4.value.trim();
  const emailValue = emailInput4.value.trim();

  if (nameValue === "") {
    message4.textContent = "Name cannot be empty.";
    message4.style.color = "red";
    return;
  }

  if (!emailValue.includes("@")) {
    message4.textContent = "Email must contain @.";
    message4.style.color = "red";
    return;
  }

  message4.textContent = "Form validation successful!";
  message4.style.color = "green";
};

// Append elements to form
form4.appendChild(nameLabel4);
form4.appendChild(nameInput4);
form4.appendChild(br4_1);
form4.appendChild(emailLabel4);
form4.appendChild(emailInput4);
form4.appendChild(br4_2);
form4.appendChild(submitBtn4);
form4.appendChild(message4);

// Add form to page
document.getElementById("output4").appendChild(form4);
