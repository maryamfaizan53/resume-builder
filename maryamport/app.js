"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var html2pdf = require("html2pdf.js");
// Function to generate the resume dynamically based on the form inputs
function generateResume() {
    var _a;
    var name = document.getElementById("name").value;
    var position = document.getElementById("position").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var education = document.getElementById("education").value;
    var languages = document.getElementById("languages").value;
    var skills = document.getElementById("skills").value;
    var experience = document.getElementById("experience").value;
    var profileImage = (_a = document.getElementById("image-input").files) === null || _a === void 0 ? void 0 : _a[0];
    var preview = document.getElementById("resumePreview");
    // Create a new FileReader instance to read the image
    var reader = new FileReader();
    reader.onloadend = function () {
        // Set the HTML for resume preview with form data
        preview.innerHTML = "\n        <div class=\"left-section\">\n            <div class=\"profile-picture\">\n                <img src=\"".concat(reader.result, "\" alt=\"Profile Picture\" />\n            </div>\n            <div class=\"section\">\n                <h2>Profile</h2>\n                <p contenteditable=\"true\" oninput=\"updateField('profile', this.textContent)\">").concat(position, "</p>\n            </div>\n            <div class=\"section\">\n                <h2>Contact Me</h2>\n                <p contenteditable=\"true\" oninput=\"updateField('phone', this.textContent)\"><strong>Phone:</strong> ").concat(phone, "</p>\n                <p contenteditable=\"true\" oninput=\"updateField('email', this.textContent)\"><strong>Email:</strong> ").concat(email, "</p>\n                <p contenteditable=\"true\" oninput=\"updateField('address', this.textContent)\"><strong>Address:</strong> ").concat(address, "</p>\n            </div>\n        </div>\n        <div class=\"right-section\">\n            <div class=\"header\">\n                <h1 contenteditable=\"true\" oninput=\"updateField('name', this.textContent)\">").concat(name, "</h1>\n                <p contenteditable=\"true\" oninput=\"updateField('position', this.textContent)\">").concat(position, "</p>\n            </div>\n            <div class=\"section\">\n                <h2><img src=\"/icons8-sort-right-48.png\" alt=\"arrow icon\" height=\"20px\" width=\"20px\">Education</h2>\n                <p contenteditable=\"true\" oninput=\"updateField('education', this.textContent)\">").concat(education, "</p>\n            </div>\n            <div class=\"section\">\n                <h2><img src=\"/icons8-sort-right-48.png\" alt=\"arrow icon\" height=\"20px\" width=\"20px\">Languages</h2>\n                <p contenteditable=\"true\" oninput=\"updateField('languages', this.textContent)\">").concat(languages, "</p>\n            </div>\n            <div class=\"section\">\n                <h2><img src=\"/icons8-sort-right-48.png\" alt=\"arrow icon\" height=\"20px\" width=\"20px\">Skills</h2>\n                <p contenteditable=\"true\" oninput=\"updateField('skills', this.textContent)\">").concat(skills, "</p>\n            </div>\n            <div class=\"section\">\n                <h2><img src=\"/icons8-sort-right-48.png\" alt=\"arrow icon\" height=\"20px\" width=\"20px\">Experience</h2>\n                <p contenteditable=\"true\" oninput=\"updateField('experience', this.textContent)\">").concat(experience, "</p>\n            </div>\n        </div>\n    ");
    };
    // If no image is selected, use a default image
    if (profileImage) {
        reader.readAsDataURL(profileImage);
    }
    else {
        preview.innerHTML = "\n        <div class=\"left-section\">\n            <div class=\"profile-picture\">\n                <img src=\"p.png\" alt=\"Profile Picture\" />\n            </div>\n            <div class=\"section\">\n                <h2>Profile</h2>\n                <p contenteditable=\"true\" oninput=\"updateField('profile', this.textContent)\">".concat(position, "</p>\n            </div>\n            <div class=\"section\">\n                <h2>Contact Me</h2>\n                <p contenteditable=\"true\" oninput=\"updateField('phone', this.textContent)\"><strong>Phone:</strong> ").concat(phone, "</p>\n                <p contenteditable=\"true\" oninput=\"updateField('email', this.textContent)\"><strong>Email:</strong> ").concat(email, "</p>\n                <p contenteditable=\"true\" oninput=\"updateField('address', this.textContent)\"><strong>Address:</strong> ").concat(address, "</p>\n            </div>\n        </div>\n        <div class=\"right-section\">\n            <div class=\"header\">\n                <h1 contenteditable=\"true\" oninput=\"updateField('name', this.textContent)\">").concat(name, "</h1>\n                <p contenteditable=\"true\" oninput=\"updateField('position', this.textContent)\">").concat(position, "</p>\n            </div>\n            <div class=\"section\">\n                <h2><img src=\"/icons8-sort-right-48.png\" alt=\"arrow icon\" height=\"20px\" width=\"20px\">Education</h2>\n                <p contenteditable=\"true\" oninput=\"updateField('education', this.textContent)\">").concat(education, "</p>\n            </div>\n            <div class=\"section\">\n                <h2><img src=\"/icons8-sort-right-48.png\" alt=\"arrow icon\" height=\"20px\" width=\"20px\">Languages</h2>\n                <p contenteditable=\"true\" oninput=\"updateField('languages', this.textContent)\">").concat(languages, "</p>\n            </div>\n            <div class=\"section\">\n                <h2><img src=\"/icons8-sort-right-48.png\" alt=\"arrow icon\" height=\"20px\" width=\"20px\">Skills</h2>\n                <p contenteditable=\"true\" oninput=\"updateField('skills', this.textContent)\">").concat(skills, "</p>\n            </div>\n            <div class=\"section\">\n                <h2><img src=\"/icons8-sort-right-48.png\" alt=\"arrow icon\" height=\"20px\" width=\"20px\">Experience</h2>\n                <p contenteditable=\"true\" oninput=\"updateField('experience', this.textContent)\">").concat(experience, "</p>\n            </div>\n        </div>\n    ");
    }
}
// Function to update editable fields dynamically
function updateField(field, value) {
    if (value !== null) {
        var formField = document.getElementById(field);
        if (formField)
            formField.value = value;
    }
}
// Function to save the data to local storage
function saveToLocalStorage() {
    var resumeData = {
        name: document.getElementById("name").value,
        position: document.getElementById("position").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        education: document.getElementById("education").value,
        languages: document.getElementById("languages").value,
        skills: document.getElementById("skills").value,
        experience: document.getElementById("experience").value,
    };
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
    alert("Resume data saved to local storage.");
}
// Function to download the resume as PDF
function downloadPDF() {
    var element = document.getElementById("resumePreview");
    if (element) {
        html2pdf()
            .from(element)
            .save("resume.pdf");
    }
}
// Load data from local storage and populate the form
window.onload = function () {
    var savedData = JSON.parse(localStorage.getItem("resumeData") || "{}");
    document.getElementById("name").value = savedData.name || "";
    document.getElementById("position").value = savedData.position || "";
    document.getElementById("phone").value = savedData.phone || "";
    document.getElementById("email").value = savedData.email || "";
    document.getElementById("address").value = savedData.address || "";
    document.getElementById("education").value = savedData.education || "";
    document.getElementById("languages").value = savedData.languages || "";
    document.getElementById("skills").value = savedData.skills || "";
    document.getElementById("experience").value = savedData.experience || "";
    generateResume(); // Generate preview with saved data
};
