(function () {
	function getTacos(callback) {
		fetch('http://localhost:3001/tacos')
			.then(function (response) {
				return response.json();
			})
			.then(callback)
	}

	function addWithAppend(tacos) {
		var lista = document.getElementById('list1');
		for (var i = 0; i < tacos.length; i++) {
			var item = document.createElement('li');
			item.classList.add('list__item');
			var card = generateCardAppend(tacos[i]);
			item.append(card);
			lista.append(item);
		}
	}
	
	function addWithInner(tacos) {
		var lista = document.getElementById('list2');
		var stringWithElements = "";
		for (var i = 0; i < tacos.length; i++) {
			stringWithElements += '<li class="list__item">'+ generateCardInner(tacos[i]) + '</li>';
		}
		lista.innerHTML = stringWithElements;
	}

	function generateCardAppend(taco) {
		var container = document.createElement('article');
		
		var imgTaco = document.createElement('img');
		
		var footerCard = document.createElement('div');
		
		var infoSpanTaco = document.createElement('span');

		imgTaco.src = taco.image;
		infoSpanTaco.textContent = taco.nombre + " $" + taco.precio;

		container.append(imgTaco);
		container.append(footerCard);

		footerCard.append(infoSpanTaco);

		return container;
	}

	function generateCardInner(taco) {
		var container = '<article>';
		container += '<img src="'+ taco.image +' ">';
		container += '<div><span>'+ taco.nombre + ' $' + taco.precio + '</span></div>'; 
		container += '</article>';
		return container;
	}

	function init() {
		getTacos(addWithAppend);
		getTacos(addWithInner);
	}

	window.addEventListener('load', init);
})();

