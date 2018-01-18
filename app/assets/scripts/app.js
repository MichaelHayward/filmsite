import $ from 'jquery';
import HamburgerMenu from './modules/HamburgerMenu';
import EmailHider from './modules/EmailHider';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

var hamburgerMenu = new HamburgerMenu();
var emailHider = new EmailHider();
var stickyHeader = new StickyHeader();

emailHider.hideTheEmail();
new RevealOnScroll($('#our-films-page'), '80%');
new RevealOnScroll($('.footer__content'), '100%');