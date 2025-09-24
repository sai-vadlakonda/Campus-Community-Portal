const toggleBtn = document.getElementById("darkModeToggle");
if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });

    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }
}

const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const role = document.getElementById("role").value;
        if (role === "student") {
            window.location.href = "student-dashboard.html";
        } else if (role === "cdc") {
            window.location.href = "cdc-dashboard.html";
        } else if (role === "central") {
            window.location.href = "central-admin-dashboard.html";
        }
    });
}

const tokenEl = document.getElementById("token");
if (tokenEl) {
    tokenEl.innerText = "CCP-" + Math.floor(Math.random() * 100000);
}

function filterJobs() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const jobs = document.getElementsByClassName("job");
    for (let job of jobs) {
        const title = job.querySelector("h3").innerText.toLowerCase();
        const branch = job.querySelector(".branch").innerText.toLowerCase();
        if (title.includes(searchInput) || branch.includes(searchInput)) {
            job.style.display = "block";
        } else {
            job.style.display = "none";
        }
    }
}

const studentForm = document.getElementById('studentForm');
if (studentForm) {
    studentForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const studentData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            year: document.getElementById('year').value,
            branch: document.getElementById('branch').value,
            cgpa: document.getElementById('cgpa').value,
            backlogs: document.getElementById('backlogs').value,
            internship: document.getElementById('internship').value,
            sector: document.getElementById('sector').value
        };

        localStorage.setItem('studentData', JSON.stringify(studentData));

        window.location.href = "job-listings.html";
    });
}