document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            alert("Você clicou em " + card.querySelector("h2").innerText);
        });
    });
});