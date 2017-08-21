import EventBroadcaster from './EventBroadcaster';
'use strict';

const Header = function(){
	this.menu_color = 'hide';
	this.element = document.getElementsByTagName('header')[0];
	
	this.menu = document.getElementById('menu');
	this.sections = [].slice.call(this.menu.querySelectorAll('li'));
	this.sections.forEach(element => {
		element.querySelector('a').addEventListener('click', () => {
			this.closeMenu();
		})
	});
	
	// Close Button
	this.closeButton = menu.querySelector('.close');
	this.closeButton.addEventListener('click', e => {
		e.preventDefault();
		this.closeMenu();
	});

	// Menu Icon
	this.menuIcon = document.querySelector('#main_menu .icon');
	this.menuIcon.addEventListener('click', e => {
		e.preventDefault();
		this.menu.classList.toggle('visible', true)
	});
}
Header.prototype.closeMenu = function(){
	this.menu.classList.toggle('visible', false)
}

Header.prototype.scrollHandler = function(){
}
Header.prototype.constructor = Header;

export default Header;