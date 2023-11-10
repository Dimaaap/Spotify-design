document.addEventListener("DOMContentLoaded", () => {
    let icons = document.querySelectorAll(".sidebar a");

    icons.forEach((icon) => {
        icon.addEventListener("mouseover", () => {
            let tooltip = this.getAttribute('data-tooltip');
            let tooltipElement = this.querySelector("::before");

            tooltipElement.textContent = tooltip;
            let rect = this.getBoundingClientRect();
            tooltipElement.style.top = rect.top + "px";
        });

        icon.addEventListener("mouseout", () => {
            let tooltipElement = this.querySelector("::before");
            tooltipElement.style.display = "none";
        });
    });
});