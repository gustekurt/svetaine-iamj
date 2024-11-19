function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active"); // Toggle the 'active' class
}


document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".submit-button");

    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            const form = button.closest("form");
            if (form && form.checkValidity()) {
                event.preventDefault(); 
                button.classList.add("wiggle");
                setTimeout(() => button.classList.remove("wiggle"), 500);
            }
        });
    });
});
