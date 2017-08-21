import Scroll from 'scroll';
'use strict';

let Services = function(){
	this.lastType = '';
	this.type = '';
	this.menu_color = 'white';
	this.element = document.getElementById('services');
	this.services = [].slice.call(this.element.querySelectorAll('nav ul li'));
	this.detailContainer = this.element.getElementsByClassName('detail_container')[0];
	this.details = [].slice.call(this.detailContainer.querySelectorAll('.service'));


	this.detailContainer.addEventListener('click', e => {
		// Define interactivity mode
		switch(this.type){
			case 'tablet':
				this.toggleDetailWindow.call(this, false);
				break
		}
	});


	this.services.forEach((element, index) => {
		// CLONE SERVICE´S DETAIL and append it into the Services List
		// (to avoid repeating HTMl source)
		const serviceDetailClone = this.details[index].querySelector('.info > p').cloneNode(true);
		const serviceDetailHolder = document.createElement('div');
		serviceDetailHolder.className = 'info';
		serviceDetailHolder.appendChild(serviceDetailClone);
		element.appendChild(serviceDetailHolder);

		// EVENT LISTENERS
		element.addEventListener('click', e => {
			// Define interactivity mode
			switch(this.type){
				case 'mobile':
					// Close al services
					this.services.forEach( function(_target){
						if(element !== _target)
							_target.classList.toggle('active', false)
					});
					
					// Show/Hide current service
					const infoContainer = element;
					infoContainer.classList.toggle('active');

					// Position Scroll
					setTimeout(()=>{
						const rect = element.getBoundingClientRect();
						Scroll.top(document.body, (window.scrollY+rect.top)-15, { duration: 400 })
					}, 600);

					break;

				case 'tablet':
					this.toggleDetailWindow.call(this, true);

					// Show matching element on 'details list' 
					const target_class = element.classList.item(0);
					this.details.forEach( function(element){
						if(element.classList.contains(target_class))
							element.style.display = 'block';
						else
							element.style.display = 'none';
					});
					break;

			}
		});

		//
		element.addEventListener('mouseover', e => {
			if(this.type == 'desktop'){
				this.toggleDetailWindow.call(this, true);

				// Show matching element on 'details list' 
				const target_class = element.classList.item(0);
				this.details.forEach( function(element){
					if(element.classList.contains(target_class))
						element.style.display = 'block';
					else
						element.style.display = 'none';
				});
			}
		});

		//
		element.addEventListener('mouseout', e => {
			if(this.type == 'desktop'){
				// Hide details list
				this.detailContainer.classList.toggle('visible', false);
			}
		});
	});



	window.addEventListener('resize', this.resizeHandler.bind(this));
	this.resizeHandler();
}

Services.prototype.toggleDetailWindow = function(_flag){
	// Show/Hide details list
	this.detailContainer.classList.toggle('visible', _flag);
}


Services.prototype.resizeHandler = function(){
	// Define 'interactivity' type
	let type = 'mobile';
	if(window.matchMedia('(min-width: 1100px)').matches){
		type = 'desktop';
	} 
	else if(window.matchMedia('(min-width: 460px)').matches){
		type = 'tablet';
	}


	// Detect for type changes
	if( this.lastType != type ){
		this.type = type;

		// Close Detail Window
		this.toggleDetailWindow.call(this, false);

		// Close al services
		this.services.forEach( function(_target){
			_target.querySelector('.info').classList.toggle('active', false)
		});
	}

	// Update last Type reference
	this.lastType = type;
}

Services.prototype.scrollHandler = function(){
	const menu = document.getElementById('main_menu');
	const scrollRect = this.element.getBoundingClientRect();

	if(scrollRect.top <= 0 && scrollRect.bottom > 0){
		menu.className = this.menu_color;
	}  
}

Services.prototype.constructor = Services;

export default Services;