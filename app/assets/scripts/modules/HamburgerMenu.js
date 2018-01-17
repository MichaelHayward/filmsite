import $ from 'jquery';

class HamburgerMenu {
	constructor() {
		this.hamburgerIcon = $('.hamburger');
		this.menu = $('.top-menu__section-list');
		this.navLink = $('.top-menu__section-list__item');
		this.events();
	}
	
	events() {
		this.navLink.click(this.toggleTheMenu.bind(this));
		this.hamburgerIcon.click(this.toggleTheMenu.bind(this));
	}
	
	toggleTheMenu() {
		console.log('toggleTheMenu called!');
		this.menu.toggleClass('top-menu__section-list--is-visible');
		this.hamburgerIcon.toggleClass('hamburger--close-x');
	}
}

export default HamburgerMenu;