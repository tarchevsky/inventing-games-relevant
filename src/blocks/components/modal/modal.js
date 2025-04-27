const modalTrigger = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal"),
    modalCloseBtn = document.querySelector("[data-close]");

function tapOnButton() {
    modalTrigger.forEach(btn => {
        btn.addEventListener("click", () => {
            modal.classList.add("modal__show");
            modal.classList.remove("modal__hide");
            document.body.style.overflow = "hidden";
        });
    });
}

tapOnButton();

function closeModal() {
    modal.classList.add("modal__hide");
    modal.classList.remove("modal__show");
    document.body.style.overflow = "";
}

modalCloseBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", (event) => {
    if(event.code === "Escape" && modal.classList.contains("modal__show")) {
        closeModal();
    }
});