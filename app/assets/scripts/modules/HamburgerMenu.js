import $ from 'jquery';

class HamburgerMenu {
	constructor() {
		this.hamburgerIcon = $('.hamburger');
		this.menu = $('.top-menu__section-list');
		this.events();
	}
	
	events() {
		this.hamburgerIcon.click(this.toggleTheMenu.bind(this));
	}
	
	toggleTheMenu() {
		this.menu.toggleClass('top-menu__section-list--is-visible');
		this.hamburgerIcon.toggleClass('hamburger--close-x');
	}
}

export default HamburgerMenu;