'use strict';

let Clients = function(){
	this.menu_color = 'blue';
	this.element = document.getElementById('clients');
}
Clients.prototype.scrollHandler = function(){
	const menu = document.getElementById('main_menu');
	const scrollRect = this.element.getBoundingClientRect();

	if(scrollRect.top <= 0 && scrollRect.bottom > 0){
		menu.className = this.menu_color;
	}  
}
Clients.prototype.constructor = Clients;

export default Clients;