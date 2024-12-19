// Hover animation for skill items
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.1)';
        item.style.transition = 'all 0.3s ease';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});

// Smooth scrolling when clicking navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Data pengalaman kerja Anda
const experiences = [
    {
        company: "PT. PLN Icon Plus",
        role: "Corporate Activation",
        duration: "August 2023 - December 2023",
        responsibilities: [
            "Customer service activation",
            "Create a network topology",
            "Configure router and switch devices",
            "Resolve problems with customer service"
        ]
    },
    {
        company: "Universitas Palangka Raya",
        role: "Lab Assistant (Object Oriented Programming Course)",
        duration: "September 2022 - October 2022",
        responsibilities: [
            "Implementing OOP using Alice 3",
            "Implementing OOP using Greenfoot",
            "Introducing OOP using the Java language"
        ]
    },
    {
        company: "PT. Educa Sisfomedia Indonesia (GamelabID)",
        role: "FrontEnd Web Development",
        duration: "August 2022 - December 2022",
        responsibilities: [
            "Study and create websites using HTML and CSS",
            "Study the application of the CSS Framework, namely Bootstrap and SASS",
            "Study and implement JavaScript and jQuery in website creation"
        ]
    },
    {
        company: "BEM Organization of the Faculty of Engineering",
        role: "Vice Chairman",
        duration: "January 2023 - December 2023",
        responsibilities: [
            "Coordinate each department",
            "Represent BEM in faculty activities",
            "Replaces the absent Chairperson"
        ]
    },
    {
        company: "Informatics Engineering Student Association Organization",
        role: "Member of the Secretariat Division",
        duration: "January 2022 - December 2022",
        responsibilities: [
            "Become a member of the equipment division for IEO 2.0 activities",
            "Become a member of the mentoring division for IEO 3.0 activities",
            "Became deputy chairman of the anniversary of the Informatics Engineering department at Palangka Raya University",
            "Carry out the responsibilities of the secretariat division"
        ]
    },
    {
        company: "CV SIC Yogyakarta",
        role: "Team IT",
        duration: "January 2019 - May 2019",
        responsibilities: [
            "Making the Super Mario 3D game",
            "Website creation",
            "Creating animations and promotional videos"
        ]
    }
];

// Current page
let currentPage = 1;
const itemsPerPage = 2;

// Function to generate experience items
function generateExperiencePage(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentExperiences = experiences.slice(start, end);
    
    const experienceList = document.getElementById('experience-list');
    experienceList.innerHTML = '';  // Clear the list before adding new items

    currentExperiences.forEach(exp => {
        const expItem = document.createElement('div');
        expItem.classList.add('experience-item');

        const expHTML = `
            <h3>${exp.company}</h3>
            <p class="role">${exp.role}</p>
            <p class="duration">${exp.duration}</p>
            <ul>
                ${exp.responsibilities.map(item => `<li>${item}</li>`).join('')}
            </ul>
        `;
        
        expItem.innerHTML = expHTML;
        experienceList.appendChild(expItem);
    });

    generatePagination();
}

// Function to generate pagination buttons
function generatePagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';  // Clear pagination

    const totalPages = Math.ceil(experiences.length / itemsPerPage);

    // Prev button
    const prevButton = document.createElement('button');
    prevButton.innerHTML = 'Previous';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            generateExperiencePage(currentPage);
        }
    });
    pagination.appendChild(prevButton);

    // Page buttons
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.innerHTML = i;
        pageButton.disabled = currentPage === i;
        pageButton.addEventListener('click', () => {
            currentPage = i;
            generateExperiencePage(currentPage);
        });
        pagination.appendChild(pageButton);
    }

    // Next button
    const nextButton = document.createElement('button');
    nextButton.innerHTML = 'Next';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            generateExperiencePage(currentPage);
        }
    });
    pagination.appendChild(nextButton);
}

// Initialize the first page
generateExperiencePage(currentPage);

let currentIndex = 0;

function showSlide(index) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Looping di awal atau akhir carousel
    if (index >= totalItems) currentIndex = 0;
    if (index < 0) currentIndex = totalItems - 1;

    items.forEach((item, i) => {
        item.style.transform = `translateX(${-currentIndex * 100}%)`;
        item.classList.toggle("active", i === currentIndex);
    });
}

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

// Tampilkan slide awal
showSlide(currentIndex);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const scrollUpBtn = document.getElementById("scrollUpBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollUpBtn.style.display = "block";
    } else {
        scrollUpBtn.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

