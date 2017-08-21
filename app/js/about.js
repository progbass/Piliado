import EventBroadcaster from './EventBroadcaster';
import { addClass, removeClass, hasClass } from './DOMHelpers';
'use strict';

let About = function(){
	this.menu_color = 'blue';
	this.element = document.getElementById('about');
	this.delegate = null;
}
About.prototype.scrollHandler = function(){
	const menu = document.getElementById('main_menu');
	const scrollRect = this.element.getBoundingClientRect();

	if(scrollRect.top <= 0 && scrollRect.bottom > 0){
		menu.className = this.menu_color;
	} 
}
About.prototype.constructor = About;

export default About;