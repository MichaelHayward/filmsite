import $ from 'jquery';

class HamburgerMenu {
	constructor() {
		this.hamburgerIcon = $('.hamburger');
		this.menu = $('.top-menu__section-list');
		this.navLink = $('.top-menu__section-list__item');
		this.contentFader = $('.hamburger__content-fader'); /* Click outside to close menu */
		this.events();
	}
	
	events() {
		this.contentFader.click(this.toggleTheMenu.bind(this));
		this.navLink.click(this.toggleTheMenu.bind(this));
		this.hamburgerIcon.click(this.toggleTheMenu.bind(this));
	}
	
	toggleTheMenu() {
		console.log('toggleTheMenu called!');
		this.menu.toggleClass('top-menu__section-list--is-visible');
		this.hamburgerIcon.toggleClass('hamburger--close-x');
		this.contentFader.toggleClass('hamburger__content-fader--is-visible');
	}
}

export default HamburgerMenu;