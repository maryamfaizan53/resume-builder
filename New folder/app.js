"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var html2pdf_js_1 = require("html2pdf.js");
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
// Function to update form data in local storage
function updateField(field, value) {
    var resumeData = JSON.parse(localStorage.getItem("resumeData") || "{}");
    resumeData[field] = value;
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
}
// Save data to local storage
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
}
// Download the resume as a PDF
function downloadPDF() {
    var resume = document.getElementById("resumePreview");
    (0, html2pdf_js_1.default)(resume);
}
// Initialize the resume preview on page load if data exists in local storage
window.onload = function () {
    loadFromLocalStorage();
};
// Load data from local storage and populate the form
function loadFromLocalStorage() {
    var savedData = localStorage.getItem("resumeData");
    if (savedData) {
        var data = JSON.parse(savedData);
        document.getElementById("name").value = data.name || "";
        document.getElementById("position").value = data.position || "";
        document.getElementById("phone").value = data.phone || "";
        document.getElementById("email").value = data.email || "";
        document.getElementById("address").value = data.address || "";
        document.getElementById("education").value = data.education || "";
        document.getElementById("languages").value = data.languages || "";
        document.getElementById("skills").value = data.skills || "";
        document.getElementById("experience").value = data.experience || "";
    }
}
