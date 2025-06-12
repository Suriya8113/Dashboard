const sidebarToggle = document.getElementById("sidebarToggle");
const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("mainContent");
const userMenu = document.getElementById("userMenu");
const profileDropdown = document.getElementById("profileDropdown");
const userAvatar = document.getElementById("userAvatar");
const userName = document.getElementById("userName");
const userRole = document.getElementById("userRole");

let isMobile = window.innerWidth <= 768;
let sidebarCollapsed = false;

// Toggle sidebar
sidebarToggle.addEventListener("click", () => {
    if (isMobile) {
        sidebar.classList.toggle("mobile-visible");
    } else {
        sidebarCollapsed = !sidebarCollapsed;
        sidebar.classList.toggle("collapsed");
        mainContent.classList.toggle("expanded");
    }
});

// Handle window resize
window.addEventListener("resize", () => {
    const wasMobile = isMobile;
    isMobile = window.innerWidth <= 768;

    if (wasMobile !== isMobile) {
        if (isMobile) {
            sidebar.classList.remove("collapsed");
            sidebar.classList.add("mobile-hidden");
            mainContent.classList.remove("expanded");
        } else {
            sidebar.classList.remove("mobile-hidden", "mobile-visible");
            if (sidebarCollapsed) {
                sidebar.classList.add("collapsed");
                mainContent.classList.add("expanded");
            }
        }
    }
});

// Close sidebar and profile dropdown on mobile when clicking outside
document.addEventListener("click", (e) => {
    if (isMobile && sidebar.classList.contains("mobile-visible")) {
        if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
            sidebar.classList.remove("mobile-visible");
        }
    }
    if (userMenu.classList.contains("active")) {
        if (!userMenu.contains(e.target)) {
            userMenu.classList.remove("active");
        }
    }
});

// Toggle profile dropdown
userMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    userMenu.classList.toggle("active");
});

// Handle profile selection
profileDropdown.querySelectorAll(".profile-item").forEach((item) => {
    item.addEventListener("click", (e) => {
        e.stopPropagation();
        const name = item.dataset.name;
        const initial = item.dataset.initial;
        userName.textContent = name;
        const role = item.dataset.role;
        userRole.textContent = role;
        userAvatar.textContent = initial;
        userMenu.classList.remove("active");
        document.querySelector(".page-title").textContent = `Welcome back, ${name}!`;
    });
});

// Menu item click handling
document.querySelectorAll(".menu-item").forEach((item) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelectorAll(".menu-item").forEach((menuItem) => {
            menuItem.classList.remove("active");
        });
        item.classList.add("active");
        if (isMobile) {
            sidebar.classList.remove("mobile-visible");
        }
    });
});

// Initialize mobile state
if (isMobile) {
    sidebar.classList.add("mobile-hidden");
}