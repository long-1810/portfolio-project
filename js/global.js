const lightbox = document.getElementById("lightbox");
const preview = document.getElementById("lightbox-img");

document.querySelectorAll(".media-card img")
.forEach(img => {
	img.addEventListener("click", () => {
		preview.src = img.src;

		lightbox.classList.add("active");
	});
});

lightbox.addEventListener("click", () => {
	lightbox.classList.remove("active");

	preview.src = "";
});

document.addEventListener("keydown", (e) => {
	if (e.key === "Escape") {
		lightbox.classList.remove("active");
	}
});