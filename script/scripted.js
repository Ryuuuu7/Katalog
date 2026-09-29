const foodCards = document.querySelectorAll(".food-card");
const foodDialog = document.querySelector("#food-dialog");
const dialogTitle = foodDialog.querySelector("#food-dialog-title");
const dialogDescription = foodDialog.querySelector("#food-dialog-description");
const dialogPrice = foodDialog.querySelector(".food-dialog-price");
const dialogCloseButton = foodDialog.querySelector(".food-dialog-close");
const recommendationsButton = document.querySelector(".btn-primary");
const recommendationsSection = document.querySelector("#rekomendasi");
let activeFoodCard = null;

function showFoodDetails(card) {
	const title = card.querySelector("h3")?.textContent.trim();
	const description = card.querySelector(".deskripsi")?.textContent.trim();
	const price = card.querySelector(".harga")?.textContent.trim();

	if (!title || !description || !price) {
		return;
	}

	dialogTitle.textContent = title;
	dialogDescription.textContent = description;
	dialogPrice.textContent = `Harga: ${price}`;
	activeFoodCard = card;
	foodDialog.showModal();
}

foodCards.forEach((card) => {
	const title = card.querySelector("h3")?.textContent.trim();

	card.setAttribute("role", "button");
	card.setAttribute("aria-haspopup", "dialog");
	card.setAttribute("aria-label", `Lihat detail ${title}`);
	card.tabIndex = 0;

	card.addEventListener("click", () => showFoodDetails(card));
	card.addEventListener("keydown", (event) => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			showFoodDetails(card);
		}
	});
});

dialogCloseButton.addEventListener("click", () => foodDialog.close());

foodDialog.addEventListener("click", (event) => {
	if (event.target === foodDialog) {
		foodDialog.close();
	}
});

foodDialog.addEventListener("close", () => {
	activeFoodCard?.focus();
	activeFoodCard = null;
});

recommendationsButton.addEventListener("click", () => {
	const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	recommendationsSection.scrollIntoView({
		behavior: prefersReducedMotion ? "auto" : "smooth",
		block: "start"
	});
});
