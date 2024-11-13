import * as html2pdf from "html2pdf.js";

// Function to generate the resume dynamically based on the form inputs
function generateResume() {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const position = (document.getElementById("position") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const languages = (document.getElementById("languages") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLInputElement).value;

    const profileImage = (document.getElementById("image-input") as HTMLInputElement).files?.[0];

    const preview = document.getElementById("resumePreview") as HTMLElement;

    // Create a new FileReader instance to read the image
    const reader = new FileReader();

    reader.onloadend = () => {
        // Set the HTML for resume preview with form data
        preview.innerHTML = `
        <div class="left-section">
            <div class="profile-picture">
                <img src="${reader.result}" alt="Profile Picture" />
            </div>
            <div class="section">
                <h2>Profile</h2>
                <p contenteditable="true" oninput="updateField('profile', this.textContent)">${position}</p>
            </div>
            <div class="section">
                <h2>Contact Me</h2>
                <p contenteditable="true" oninput="updateField('phone', this.textContent)"><strong>Phone:</strong> ${phone}</p>
                <p contenteditable="true" oninput="updateField('email', this.textContent)"><strong>Email:</strong> ${email}</p>
                <p contenteditable="true" oninput="updateField('address', this.textContent)"><strong>Address:</strong> ${address}</p>
            </div>
        </div>
        <div class="right-section">
            <div class="header">
                <h1 contenteditable="true" oninput="updateField('name', this.textContent)">${name}</h1>
                <p contenteditable="true" oninput="updateField('position', this.textContent)">${position}</p>
            </div>
            <div class="section">
                <h2><img src="/icons8-sort-right-48.png" alt="arrow icon" height="20px" width="20px">Education</h2>
                <p contenteditable="true" oninput="updateField('education', this.textContent)">${education}</p>
            </div>
            <div class="section">
                <h2><img src="/icons8-sort-right-48.png" alt="arrow icon" height="20px" width="20px">Languages</h2>
                <p contenteditable="true" oninput="updateField('languages', this.textContent)">${languages}</p>
            </div>
            <div class="section">
                <h2><img src="/icons8-sort-right-48.png" alt="arrow icon" height="20px" width="20px">Skills</h2>
                <p contenteditable="true" oninput="updateField('skills', this.textContent)">${skills}</p>
            </div>
            <div class="section">
                <h2><img src="/icons8-sort-right-48.png" alt="arrow icon" height="20px" width="20px">Experience</h2>
                <p contenteditable="true" oninput="updateField('experience', this.textContent)">${experience}</p>
            </div>
        </div>
    `;
    };

    // If no image is selected, use a default image
    if (profileImage) {
        reader.readAsDataURL(profileImage);
    } else {
        preview.innerHTML = `
        <div class="left-section">
            <div class="profile-picture">
                <img src="p.png" alt="Profile Picture" />
            </div>
            <div class="section">
                <h2>Profile</h2>
                <p contenteditable="true" oninput="updateField('profile', this.textContent)">${position}</p>
            </div>
            <div class="section">
                <h2>Contact Me</h2>
                <p contenteditable="true" oninput="updateField('phone', this.textContent)"><strong>Phone:</strong> ${phone}</p>
                <p contenteditable="true" oninput="updateField('email', this.textContent)"><strong>Email:</strong> ${email}</p>
                <p contenteditable="true" oninput="updateField('address', this.textContent)"><strong>Address:</strong> ${address}</p>
            </div>
        </div>
        <div class="right-section">
            <div class="header">
                <h1 contenteditable="true" oninput="updateField('name', this.textContent)">${name}</h1>
                <p contenteditable="true" oninput="updateField('position', this.textContent)">${position}</p>
            </div>
            <div class="section">
                <h2><img src="/icons8-sort-right-48.png" alt="arrow icon" height="20px" width="20px">Education</h2>
                <p contenteditable="true" oninput="updateField('education', this.textContent)">${education}</p>
            </div>
            <div class="section">
                <h2><img src="/icons8-sort-right-48.png" alt="arrow icon" height="20px" width="20px">Languages</h2>
                <p contenteditable="true" oninput="updateField('languages', this.textContent)">${languages}</p>
            </div>
            <div class="section">
                <h2><img src="/icons8-sort-right-48.png" alt="arrow icon" height="20px" width="20px">Skills</h2>
                <p contenteditable="true" oninput="updateField('skills', this.textContent)">${skills}</p>
            </div>
            <div class="section">
                <h2><img src="/icons8-sort-right-48.png" alt="arrow icon" height="20px" width="20px">Experience</h2>
                <p contenteditable="true" oninput="updateField('experience', this.textContent)">${experience}</p>
            </div>
        </div>
    `;
}
}

// Function to update editable fields dynamically
function updateField(field: string, value: string | null) {
    if (value !== null) {
        const formField = document.getElementById(field) as HTMLInputElement;
        if (formField) formField.value = value;
    }
}

// Function to save the data to local storage
function saveToLocalStorage() {
    const resumeData = {
        name: (document.getElementById("name") as HTMLInputElement).value,
        position: (document.getElementById("position") as HTMLInputElement).value,
        phone: (document.getElementById("phone") as HTMLInputElement).value,
        email: (document.getElementById("email") as HTMLInputElement).value,
        address: (document.getElementById("address") as HTMLInputElement).value,
        education: (document.getElementById("education") as HTMLInputElement).value,
        languages: (document.getElementById("languages") as HTMLInputElement).value,
        skills: (document.getElementById("skills") as HTMLInputElement).value,
        experience: (document.getElementById("experience") as HTMLInputElement).value,
    };
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
    alert("Resume data saved to local storage.");
}

// Function to download the resume as PDF
function downloadPDF() {
    const element = document.getElementById("resumePreview");
    if (element) {
        html2pdf()
            .from(element)
            .save("resume.pdf");
    }
}

// Load data from local storage and populate the form
window.onload = () => {
    const savedData = JSON.parse(localStorage.getItem("resumeData") || "{}");

    (document.getElementById("name") as HTMLInputElement).value = savedData.name || "";
    (document.getElementById("position") as HTMLInputElement).value = savedData.position || "";
    (document.getElementById("phone") as HTMLInputElement).value = savedData.phone || "";
    (document.getElementById("email") as HTMLInputElement).value = savedData.email || "";
    (document.getElementById("address") as HTMLInputElement).value = savedData.address || "";
    (document.getElementById("education") as HTMLInputElement).value = savedData.education || "";
    (document.getElementById("languages") as HTMLInputElement).value = savedData.languages || "";
    (document.getElementById("skills") as HTMLInputElement).value = savedData.skills || "";
    (document.getElementById("experience") as HTMLInputElement).value = savedData.experience || "";
    generateResume(); // Generate preview with saved data
};
