"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const html2pdf_js_1 = __importDefault(require("html2pdf.js"));
// Wait for the DOM content to load before accessing elements
document.addEventListener("DOMContentLoaded", () => {
    // Select form inputs and containers
    const nameInput = document.getElementById("name");
    const positionInput = document.getElementById("position");
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");
    const addressInput = document.getElementById("address");
    const educationContainer = document.getElementById("education-container");
    const experienceContainer = document.getElementById("experience-container");
    const skillsInput = document.getElementById("skills");
    const resumePreview = document.getElementById("resumePreview");
    // Buttons
    const addEducationBtn = document.getElementById("addEducationBtn");
    const addExperienceBtn = document.getElementById("addExperienceBtn");
    const generateBtn = document.querySelector("button[onclick='generateResume()']");
    const saveBtn = document.querySelector("button[onclick='saveToLocalStorage()']");
    const downloadBtn = document.querySelector("button[onclick='downloadPDF()']");
    const editBtn = document.createElement("button");
    // Append edit button and set initial properties
    editBtn.id = "editBtn";
    editBtn.textContent = "Enable Edit";
    document.body.appendChild(editBtn);
    // Function to update the resume preview in real-time
    function updatePreview() {
        resumePreview.innerHTML = `
            <h2>About</h2>
            <p><strong>Name:</strong> ${nameInput.value} </p>
            <p><strong>Email:</strong> ${emailInput.value}</p>
            <p><strong>Phone:</strong> ${phoneInput.value}</p>
            <p><strong>Address:</strong> ${addressInput.value}</p>

            <h2>Education</h2>
            <div>${educationContainer.innerHTML}</div>

            <h2>Skills</h2>
            <p>${skillsInput.value}</p>

            <h2>Experience</h2>
            <div>${experienceContainer.innerHTML}</div>
        `;
    }
    // Event listener for Add Education button
    addEducationBtn.addEventListener("click", () => {
        const educationDiv = document.createElement("div");
        educationDiv.innerHTML = `
            <input type="text" placeholder="Degree">
            <input type="text" placeholder="Institution">
            <input type="text" placeholder="Year">
        `;
        educationContainer.appendChild(educationDiv);
        updatePreview();
    });
    // Event listener for Add Experience button
    addExperienceBtn.addEventListener("click", () => {
        const experienceDiv = document.createElement("div");
        experienceDiv.innerHTML = `
            <input type="text" placeholder="Job Title">
            <input type="text" placeholder="Company">
            <input type="text" placeholder="Years">
        `;
        experienceContainer.appendChild(experienceDiv);
        updatePreview();
    });
    // Event listener to toggle edit mode
    editBtn.addEventListener("click", () => {
        const isEditable = resumePreview.getAttribute("contenteditable") === "true";
        resumePreview.setAttribute("contenteditable", String(!isEditable));
        editBtn.textContent = !isEditable ? "Disable Edit" : "Enable Edit";
    });
    // Event listener to update preview on Generate Resume button click
    generateBtn.addEventListener("click", updatePreview);
    // Download resume as PDF
    downloadBtn.addEventListener("click", () => {
        const opt = {
            margin: 0.5,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        (0, html2pdf_js_1.default)().from(resumePreview).set(opt).save();
    });
    // Function to save the data to local storage
    function saveToLocalStorage() {
        const resumeData = {
            name: nameInput.value,
            position: positionInput.value,
            phone: phoneInput.value,
            email: emailInput.value,
            address: addressInput.value,
            education: educationContainer.innerHTML,
            skills: skillsInput.value,
            experience: experienceContainer.innerHTML
        };
        localStorage.setItem("resumeData", JSON.stringify(resumeData));
        alert("Resume data saved to local storage.");
    }
    // Attach save function to Save button
    saveBtn.addEventListener("click", saveToLocalStorage);
});
