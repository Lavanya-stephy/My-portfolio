/* =========================================
   LAVANYA STEPHY PORTFOLIO
   Interactive Navigation + Content
========================================= */


/* =========================================
   PROJECT DATA
========================================= */

const projects = [

    {
        id: "password",
        number: "01",
        title: "Password Policy Enforcer",
        shortDescription:
            "A Python tool that evaluates password strength against security policies and helps generate stronger passwords.",
        description:
            "Password Policy Enforcer (PPE) is a Python-based security tool designed to evaluate password strength against predefined security rules. It checks password length, uppercase and lowercase characters, digits, special characters, blocked words and username inclusion. It also calculates a strength score and provides suggestions to improve weak passwords. The tool includes a strong password generator that produces passwords satisfying the configured security policies.",
        technologies: [
            "Python",
            "Regular Expressions",
            "Password Security"
        ],
        github:
            "https://github.com/Lavanya-stephy/Passsword-Policy-Enforcer.git",
        image:
            "assets/projects/password-policy-enforcer.png",
        gallery: [
            "assets/projects/password-policy-enforcer.png"
        ]
    },

    {
        id: "scanner",
        number: "02",
        title: "Port Scanner",
        shortDescription:
            "A Python-based network utility that scans a specified port range and identifies open ports and associated services.",
        description:
            "The Port Scanner is a Python tool that scans a selected range of ports on a target IP address or domain. It identifies open and closed ports, detects service names where possible, measures response time per port, displays a real-time scanning progress bar and exports the scan results into a report. The project explores socket programming and basic network reconnaissance.",
        technologies: [
            "Python",
            "Socket Programming",
            "Networking",
            "TCP"
        ],
        github:
            "https://github.com/Lavanya-stephy/Port-Scanner.git",
        image:
            "assets/projects/port-scanner.png",
        gallery: [
            "assets/projects/port-scanner.png"
        ]
    },

    {
        id: "integrity",
        number: "03",
        title: "File Integrity Checker",
        shortDescription:
            "A file monitoring utility that uses SHA-256 hashing to identify changes in files.",
        description:
            "The File Integrity Checker monitors files for unauthorized or unexpected changes using SHA-256 cryptographic hashing. It creates a baseline by generating hashes for files in a selected directory and stores the results in a JSON file. During subsequent checks, it compares current hashes against the baseline to identify modified files. The project demonstrates file handling, hashing and integrity verification.",
        technologies: [
            "Python",
            "SHA-256",
            "JSON",
            "File Handling"
        ],
        github:
            "https://github.com/Lavanya-stephy/File-Integrity-Checker.git",
        image:
            "assets/projects/file-integrity-checker.png",
        gallery: [
            "assets/projects/file-integrity-checker.png"
        ]
    },

    {
        id: "booknest",
        number: "04",
        title: "BookNest",
        shortDescription:
            "A Java and MySQL library management system using OOP concepts and a menu-driven console interface.",
        description:
            "BookNest is a menu-driven library management system developed using Java and MySQL. It helps manage books, members, issue and return operations, searches, transaction history and library summaries. The project demonstrates object-oriented programming concepts, database connectivity, CRUD operations and structured record management through a console-based interface.",
        technologies: [
            "Java",
            "OOP",
            "MySQL",
            "JDBC",
            "DBMS"
        ],
        github:
            "https://github.com/Lavanya-stephy/Booknest_project.git",
        image:
            "assets/projects/booknest.png",
        gallery: [
            "assets/projects/booknest.png"
        ]
    }

];


/* =========================================
   CERTIFICATE DATA
========================================= */

const certificates = [

    {
        number: "01",
        title: "Tata — IAM Developer Job Simulation",
        description:
            "Completed practical tasks involving Identity and Access Management fundamentals, IAM strategy assessment, custom IAM solutions and platform integration through a job simulation.",
        image:
            "assets/certificates/tata-iam.jpeg"
    },

    {
        number: "02",
        title: "Introduction to Cybersecurity",
        description:
            "Completed the Cisco Networking Academy course covering cybersecurity fundamentals, common threats, vulnerabilities, online safety and organizational security.",
        image:
            "assets/certificates/cisco-cybersecurity.jpeg"
    },

    {
        number: "03",
        title: "Python Programming Lab",
        description:
            "Completed the Python Programming Lab course, developing programming skills and demonstrating consistent engagement throughout the course.",
        image:
            "assets/certificates/python.jpeg"
    }

];


/* =========================================
   EVENT DATA
========================================= */

const events = [

    {
        id: "smartability",
        number: "01",
        title: "SmartAbility Hackathon",
        location:
            "Rajalakshmi Engineering College · Chennai",
        shortDescription:
            "AI-based personalized reinforcement application for speech and language therapy.",
        description:
            `The SmartAbility Hackathon presented 11 problem statements.
            Our team selected an AI-based Smart Reinforcement Application
            problem. Positive reinforcement is central to speech and language
            therapy, but clinicians often rely on generic rewards and lack a
            systematic way to identify which reinforcers work best for each
            child.

            Our solution focused on personalizing rewards for each learner
            using preferences and engagement history. It included Indian
            cultural appreciation videos as a reinforcement category,
            reward and motivation tracking, and personalized reinforcement
            schedules designed to support clinicians and caregivers.`,
        award: "1st Place",
        images: [
            "assets/events/smartability.jpeg"
        ]
    },

    {
        id: "workshop",
        number: "02",
        title: "3-Day Workshop-cum-Hackathon",
        location:
            "KCG College of Technology · Chennai",
        shortDescription:
            "Hands-on workshop exploring engineering concepts, machine learning and deep learning.",
        description:
            `Attended a three-day Workshop-cum-Hackathon at KCG College
            of Technology, Chennai, organized with CADD Centre.

            The workshop provided hands-on exposure across engineering
            streams and introduced machine learning, neural networks,
            deep learning fundamentals and practical model development.
            The event concluded with a hackathon involving real-world
            problem-solving.`,
        images: [
            "assets/events/workshop.jpeg"
        ],
        certificate:
            "assets/events/workshop-certificate.jpeg"
    },

    {
        id: "ctf",
        number: "03",
        title: "Red Team vs Blue Team — Cyber Carnival",
        location:
            "SRM Easwari Engineering College · Chennai",
        shortDescription:
            "A cybersecurity challenge involving attack simulation, threat detection and log analysis.",
        description:
            `Participated in a Red Team vs Blue Team cybersecurity event.

            Red teams worked to exploit vulnerabilities in controlled
            web applications and capture flags, while blue teams
            analyzed logs, detected suspicious activity and
            reconstructed attack scenarios.

            The event provided exposure to practical cybersecurity
            scenarios, attack-defense concepts and collaborative
            problem-solving.`,
        images: [
            "assets/events/ctf.jpeg"
        ],
        certificate:
            "assets/events/ctf-certificate.jpeg"
    }

];


/* =========================================
   NAVIGATION
========================================= */

const navButtons =
    document.querySelectorAll(".nav-item");

const sections =
    document.querySelectorAll(".page-section");

const breadcrumbCurrent =
    document.getElementById("breadcrumbCurrent");

const sectionViewport =
    document.getElementById("sectionViewport");

let currentSection = "home";


function showSection(sectionId) {

    const section =
        document.getElementById(sectionId);

    if (!section) return;

    sections.forEach(item => {

        item.classList.remove(
            "active",
            "exit-left",
            "exit-right"
        );

    });

    section.classList.add("active");

    currentSection = sectionId;

    section.scrollTop = 0;

    updateNavigation(sectionId);

    closeMobileMenu();

}


function updateNavigation(sectionId) {

    const navSection =
        sectionId === "projectDetail"
            ? "projects"
            : sectionId === "eventDetail"
                ? "events"
                : sectionId;

    navButtons.forEach(button => {

        const isActive =
            button.dataset.section === navSection;

        button.classList.toggle(
            "active",
            isActive
        );

        if (isActive) {

            button.setAttribute(
                "aria-current",
                "page"
            );

        } else {

            button.removeAttribute(
                "aria-current"
            );

        }

    });

    breadcrumbCurrent.textContent =
        navSection.toUpperCase();

}


navButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            showSection(
                button.dataset.section
            );

        }
    );

});


/* =========================================
   MOBILE MENU
========================================= */

const sidebar =
    document.getElementById("sidebar");

const mobileMenu =
    document.getElementById("mobileMenu");


mobileMenu.addEventListener(
    "click",
    () => {

        const isOpen =
            sidebar.classList.toggle("open");

        mobileMenu.setAttribute(
            "aria-expanded",
            isOpen
        );

    }
);


function closeMobileMenu() {

    sidebar.classList.remove("open");

    mobileMenu.setAttribute(
        "aria-expanded",
        "false"
    );

}


document.addEventListener(
    "click",
    event => {

        if (
            window.innerWidth <= 900 &&
            sidebar.classList.contains("open") &&
            !sidebar.contains(event.target) &&
            !mobileMenu.contains(event.target)
        ) {

            closeMobileMenu();

        }

    }
);


/* =========================================
   PROJECT OVERVIEW
========================================= */

const projectsGrid =
    document.getElementById("projectsGrid");


function renderProjects() {

    projectsGrid.innerHTML = "";

    projects.forEach(project => {

        const card =
            document.createElement("article");

        card.className = "project-card";

        card.setAttribute(
            "tabindex",
            "0"
        );

        card.setAttribute(
            "role",
            "button"
        );

        card.setAttribute(
            "aria-label",
            `View ${project.title}`
        );

        card.innerHTML = `

            <div class="project-card-image">

                <span class="project-card-number">
                    PROJECT / ${project.number}
                </span>

                <img
                    src="${project.image}"
                    alt="${project.title} output screenshot"
                    loading="lazy"
                >

            </div>

            <div class="project-card-body">

                <h2>${project.title}</h2>

                <p>${project.shortDescription}</p>

                <div class="project-tags">

                    ${project.technologies
                        .slice(0, 4)
                        .map(
                            tech =>
                                `<span class="project-tag">${tech}</span>`
                        )
                        .join("")}

                </div>

                <div class="project-card-footer">

                    <span>VIEW PROJECT</span>

                    <i class="fa-solid fa-arrow-right"></i>

                </div>

            </div>

        `;

        card.addEventListener(
            "click",
            () => openProject(project.id)
        );

        card.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    openProject(project.id);

                }

            }
        );

        projectsGrid.appendChild(card);

    });

}


/* =========================================
   PROJECT DETAIL
========================================= */

const projectDetailContent =
    document.getElementById(
        "projectDetailContent"
    );


function openProject(projectId) {

    const index =
        projects.findIndex(
            project => project.id === projectId
        );

    if (index === -1) return;

    renderProjectDetail(index);

    showSection("projectDetail");

}


function renderProjectDetail(index) {

    const project =
        projects[index];

    const previous =
        index > 0
            ? projects[index - 1]
            : null;

    const next =
        index < projects.length - 1
            ? projects[index + 1]
            : null;


    projectDetailContent.innerHTML = `

        <button class="back-button"
                onclick="showSection('projects')">

            <i class="fa-solid fa-arrow-left"></i>
            Back to Projects

        </button>


        <div class="eyebrow"
             style="margin-top:30px">

            PROJECT / ${project.number}

        </div>


        <h1 class="detail-title">

            ${project.title}<span>.</span>

        </h1>


        <p class="detail-description">

            ${project.description}

        </p>


        <div class="detail-meta">

            ${project.technologies
                .map(
                    tech =>
                        `<span class="project-tag">${tech}</span>`
                )
                .join("")}

        </div>


        <div style="margin-top:25px">

            <a href="${project.github}"
               target="_blank"
               rel="noopener noreferrer"
               class="btn btn-primary">

                <i class="fa-brands fa-github"></i>
                View Repository

            </a>

        </div>


        <h2 class="detail-section-heading">

            Sample Output

        </h2>


        <div class="detail-gallery">

            ${project.gallery
                .map(
                    (image, galleryIndex) => `

                        <img
                            src="${image}"
                            alt="${project.title} output screenshot ${galleryIndex + 1}"
                            loading="lazy"
                        >

                    `
                )
                .join("")}

        </div>


        <div class="detail-navigation">

            <button
                ${previous ? "" : "disabled"}
                onclick="renderProjectDetail(${index - 1})">

                ${previous
                    ? "← " + previous.title
                    : "← Previous"}

            </button>


            <button
                onclick="showSection('projects')">

                Projects Overview

            </button>


            <button
                ${next ? "" : "disabled"}
                onclick="renderProjectDetail(${index + 1})">

                ${next
                    ? next.title + " →"
                    : "Next →"}

            </button>

        </div>

    `;

}


/* =========================================
   CERTIFICATES
========================================= */

const certificateShowcase =
    document.getElementById(
        "certificateShowcase"
    );

let currentCertificate = 0;


function renderCertificate(index) {

    currentCertificate =
        (index + certificates.length)
        % certificates.length;

    const certificate =
        certificates[currentCertificate];


    certificateShowcase.innerHTML = `

        <div class="certificate-info">

            <span class="certificate-index">

                CERTIFICATE /
                ${certificate.number}
                — ${certificates.length}

            </span>


            <h2>

                ${certificate.title}

            </h2>


            <p>

                ${certificate.description}

            </p>


            <div class="certificate-controls">

                <button
                    aria-label="Previous certificate"
                    onclick="renderCertificate(${currentCertificate - 1})">

                    <i class="fa-solid fa-arrow-left"></i>

                </button>


                <button
                    aria-label="Next certificate"
                    onclick="renderCertificate(${currentCertificate + 1})">

                    <i class="fa-solid fa-arrow-right"></i>

                </button>


                <div class="certificate-dots">

                    ${certificates
                        .map(
                            (_, dotIndex) => `

                                <button
                                    class="certificate-dot
                                        ${dotIndex === currentCertificate
                                            ? "active"
                                            : ""}"

                                    aria-label="Certificate ${dotIndex + 1}"

                                    onclick="renderCertificate(${dotIndex})">

                                </button>

                            `
                        )
                        .join("")}

                </div>

            </div>

        </div>


        <div class="certificate-image-wrap">

            <img
                src="${certificate.image}"
                alt="${certificate.title} certificate"
            >

        </div>

    `;

}


/* =========================================
   EVENTS OVERVIEW
========================================= */

const eventsList =
    document.getElementById("eventsList");


function renderEvents() {

    eventsList.innerHTML = "";

    events.forEach(event => {

        const card =
            document.createElement("article");

        card.className = "event-card";

        card.setAttribute(
            "tabindex",
            "0"
        );

        card.setAttribute(
            "role",
            "button"
        );

        card.setAttribute(
            "aria-label",
            `View ${event.title}`
        );


        const firstImage =
            event.images[0];


        card.innerHTML = `

            <div class="event-card-image">

                <img
                    src="${firstImage}"
                    alt="${event.title}"
                    loading="lazy"
                >

            </div>


            <div class="event-card-info">

                <span class="eyebrow">

                    EVENT / ${event.number}

                </span>


                <h2 style="margin-top:10px">

                    ${event.title}

                </h2>


                <p>

                    ${event.shortDescription}

                </p>


                <p class="event-location">

                    ${event.location}

                </p>


                ${event.award
                    ? `
                        <span class="event-award">

                            <i class="fa-solid fa-trophy"></i>
                            ${event.award}

                        </span>
                    `
                    : ""}

            </div>


            <div class="event-card-arrow">

                <i class="fa-solid fa-arrow-right"></i>

            </div>

        `;


        card.addEventListener(
            "click",
            () => openEvent(event.id)
        );


        card.addEventListener(
            "keydown",
            keyboardEvent => {

                if (
                    keyboardEvent.key === "Enter" ||
                    keyboardEvent.key === " "
                ) {

                    keyboardEvent.preventDefault();

                    openEvent(event.id);

                }

            }
        );


        eventsList.appendChild(card);

    });

}


/* =========================================
   EVENT DETAIL
========================================= */

const eventDetailContent =
    document.getElementById(
        "eventDetailContent"
    );


function openEvent(eventId) {

    const event =
        events.find(
            item => item.id === eventId
        );

    if (!event) return;

    renderEventDetail(event);

    showSection("eventDetail");

}


function renderEventDetail(event) {

    const galleryImages =
        event.images
        .map(
            image => `

                <img
                    src="${image}"
                    alt="${event.title} photograph"
                    loading="lazy"
                >

            `
        )
        .join("");


    const certificateImage =
        event.certificate
            ? `

                <img
                    src="${event.certificate}"
                    alt="${event.title} participation certificate"
                    loading="lazy"
                >

            `
            : "";


    eventDetailContent.innerHTML = `

        <button class="back-button"
                onclick="showSection('events')">

            <i class="fa-solid fa-arrow-left"></i>
            Back to Events

        </button>


        <div class="eyebrow"
             style="margin-top:30px">

            EVENT / ${event.number}

        </div>


        <h1 class="detail-title">

            ${event.title}<span>.</span>

        </h1>


        <p class="event-detail-text">

            ${event.location}

        </p>


        ${event.award
            ? `

                <div class="event-detail-highlight">

                    <i class="fa-solid fa-trophy"
                       style="margin-right:10px"></i>

                    ${event.award}

                </div>

            `
            : ""}


        <p class="event-detail-text">

            ${event.description
                .replace(/\n/g, "<br><br>")}

        </p>


        <h2 class="detail-section-heading">

            Event Gallery

        </h2>


        <div class="event-gallery">

            ${galleryImages}

            ${certificateImage}

        </div>


        <div class="detail-navigation">

            <button onclick="showSection('events')">

                ← Back to Events

            </button>

        </div>

    `;

}


/* =========================================
   INITIALIZE
========================================= */

renderProjects();

renderCertificate(0);

renderEvents();

showSection("home");


/* =========================================
   KEYBOARD ESCAPE
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeMobileMenu();

            if (currentSection === "projectDetail") {

                showSection("projects");

            } else if (
                currentSection === "eventDetail"
            ) {

                showSection("events");

            }

        }

    }
);