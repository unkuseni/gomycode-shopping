
const totalPriceElement = document.querySelector(".total");


function updateTotalPrice() {
	const quantities = document.querySelectorAll(".quantity");
	const unitPrices = document.querySelectorAll(".unit-price");
	let totalPrice = 0;

	quantities.forEach((quantity, index) => {
		const unitPrice = parseFloat(
			unitPrices[index].textContent.replace("$", "")
		);
		const quantityValue = parseInt(quantity.textContent);
		totalPrice += unitPrice * quantityValue;
	});

	totalPriceElement.textContent = `${totalPrice} $`;
}


function addItemToCart(event) {
	const plusButton = event.target;
	const quantityElement = plusButton.nextElementSibling;
	const quantityValue = parseInt(quantityElement.textContent);
	quantityElement.textContent = quantityValue + 1;

	updateTotalPrice();
}


function removeItemFromCart(event) {
	const minusButton = event.target;
	const quantityElement = minusButton.previousElementSibling;
	const quantityValue = parseInt(quantityElement.textContent);
	if (quantityValue > 0) {
		quantityElement.textContent = quantityValue - 1;
	}

	updateTotalPrice();
}

function deleteItemFromCart(event) {
	const deleteButton = event.target;
	const cardBody = deleteButton.closest(".card-body");
	cardBody.remove();

	updateTotalPrice();
}

function likeItem(event) {
	const likeButton = event.target;
	likeButton.classList.toggle("liked");
}

document.querySelectorAll(".fa-plus-circle").forEach((button) => {
	button.addEventListener("click", addItemToCart);
});

document.querySelectorAll(".fa-minus-circle").forEach((button) => {
	button.addEventListener("click", removeItemFromCart);
});


document.querySelectorAll(".fa-trash-alt").forEach((button) => {
	button.addEventListener("click", deleteItemFromCart);
});


document.querySelectorAll(".fa-heart").forEach((button) => {
	button.addEventListener("click", likeItem);
});
