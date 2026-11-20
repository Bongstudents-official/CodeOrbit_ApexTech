// Smooth scrolling for anchor links & automatic closing of the mobile navigation menu on click
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Smooth scroll to the target element
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            // Collapse mobile Bootstrap navbar if open
            const navbarCollapse = document.getElementById("navbarContent");
            if (navbarCollapse.classList.contains("show")) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        }
    });
});

// JavaScript for Bootstrap 5 Client-Side Form Validation
(function () {
    "use strict";
    const form = document.getElementById("contactForm");
    const successAlert = document.getElementById("formSuccessAlert");

    form.addEventListener(
        "submit",
        function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
                // Show success feedback
                successAlert.classList.remove("d-none");
                form.reset();
                form.classList.remove("was-validated");

                // Auto-hide success alert after 5 seconds
                setTimeout(() => {
                    successAlert.classList.add("d-none");
                }, 5000);
            }
            form.classList.add("was-validated");
        },
        false
    );
})();

// Mobile navbar collapse & smooth anchor scrolling helper
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (targetId === "#") return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
            const navbarCollapse = document.getElementById("navbarContent");
            if (navbarCollapse.classList.contains("show")) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        }
    });
});
