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
