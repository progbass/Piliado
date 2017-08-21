"use strict";
import '../scss/styles.scss';

const _EventBroadcaster2 = require('./EventBroadcaster');
const _DOMHelpers = require('./DOMHelpers');
const _about2 = require('./about');
const _header2 = require('./header');
const _services2 = require('./services');
const _clients2 = require('./clients');
const _Map2 = require('./Map');


(function () {
    var about = new _about2.default();
    var header = new _header2.default();
    var services = new _services2.default();
    var clients = new _clients2.default();
    var map = new _Map2.default();
    
    ////////////////////////////////////////////
    /// REGISTER SCROLL BROADCAST LISTENERS 
    ////////////////////////////////////////////
    var testSubscriber = new _EventBroadcaster2.default();
    testSubscriber.subscribe('SCROLL', about.scrollHandler.bind(about));
    testSubscriber.subscribe('SCROLL', header.scrollHandler.bind(header));
    testSubscriber.subscribe('SCROLL', services.scrollHandler.bind(services));
    testSubscriber.subscribe('SCROLL', clients.scrollHandler.bind(clients));
    //testSubscriber.subscribe('SCROLL', team.scrollHandler.bind(team));
     
    //////////////////////////////////
    /// PARALLAX 
    //////////////////////////////////
    var parallax_containers = Array.from(document.getElementsByClassName('parallax_container'));
    parallax_containers.forEach(function (_element, _index) {
        // Define properties
        var parallax_elements = Array.from(_element.getElementsByTagName('div'));
        parallax_elements.forEach(function (_element, _index) {
            var randomFactor = Math.random() * 10 / 50;
            _element.setAttribute("parallax_y_init", _element.offsetTop);
        });
    });
    
    
    //////////////////////////////////
    /// SCROLL EVENT
    //////////////////////////////////
    var scroll_lastPosition = window.pageYOffset;
    var menu_visible = false;
    window.addEventListener('scroll', onScroll);
    function onScroll() {
         var scroll_currentPosition = window.pageYOffset;
         
        // MENU POSITION/VISIBLITY
        var menuRect = header.element.getBoundingClientRect();
        if (scroll_currentPosition > menuRect.height) {
            menu_visible = true;
            document.getElementById('main_menu').style.display = 'block';
            
        } else {
            menu_visible = false;
            document.getElementById('main_menu').style.display = 'none';
        }
        
        
        // PARALLAX ANIMATION
        parallax_containers.forEach(function (_element, _index) {
            var parent_container = _element.parentNode;
            var scrollRect = parent_container.getBoundingClientRect();
            var parallax_elements = Array.from(_element.getElementsByTagName('div'));

            parallax_elements.forEach(function (_element, _index) {
                var positiony = parseInt(_element.getAttribute("parallax_y_init")) + scrollRect.top * parseFloat(_element.getAttribute("parallax_factor"));
                _element.style.top = positiony + 'px';
            });
        }.bind(this));
    
    }
})();