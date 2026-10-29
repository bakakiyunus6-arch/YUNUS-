// ========================================
// MOBILE NAVIGATION
// ========================================

// Select the menu button and navigation.
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");

// Only run the menu code if both elements exist.
if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {

        // Open or close the navigation.
        const isOpen = navigation.classList.toggle("is-open");

        // Update accessibility attributes.
        menuToggle.setAttribute("aria-expanded", String(isOpen));

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    });

    // Close the menu after a visitor selects a navigation link.
    navigation.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            navigation.classList.remove("is-open");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

}