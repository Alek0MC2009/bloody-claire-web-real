// Small shared interaction: highlight the current navigation link.
document.addEventListener("DOMContentLoaded", () => {
    const currentFile = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("nav a").forEach((link) => {
        if (link.getAttribute("href") === currentFile) {
            link.setAttribute("aria-current", "page");
        }
    });
});
