window.addEventListener('DOMContentLoaded', function(){
	//Получали игфу для работы
	let products = document.querySelectorAll('.product'),
		buttons = document.getElementsByTagName("button"),
		open = document.getElementsByClassName("open")[0];
		//Создание корзины
	function createCart() {
		//Элементы корзины
		let cart = document.createElement("div"),
			field = document.createElement('div'),
			heading = document.createElement('h2'),
			close = document.createElement("button");
			//Добавили классы элементам
		cart.classList.add("cart");
		field.classList.add("cart-field");
		close.classList.add("close");
			//Добавили текст к элементам
		close.textContent = "Закрыть";
		heading.textContent = "В нашей корзине:";
		//Добавили элементы на страницу
		document.body.appendChild(cart);
		cart.appendChild(heading);
		cart.appendChild(field);
		cart.appendChild(close);
	}

	createCart();

	let field = document.querySelector(".cart-field"),
		cart = document.querySelector(".cart"),
		close = document.querySelector(".close");

	for (let i = 0; i < buttons.length; i++) {
		//Вешаем обработчик клик на каждую кнопку
		buttons[i].addEventListener('click', function(){
			//Мы создали копию карточки
			let item = products[i].cloneNode(true);
				btn = item.querySelector('button');

			btn.remove();
			field.appendChild(item);
			products[i].remove();
		})
	}

	function openCart() {
		cart.style.display = "block"
	};

	function closeCart() {
		close.style.display = "none"
	};

	open.addEventListener('click', openCart);
	close.addEventListener('click', closeCart);
});