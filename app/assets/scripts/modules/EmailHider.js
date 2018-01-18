import $ from 'jquery';

class EmailHider {
	constructor() {
		this.emailText = $('.emailText');
		this.emailAddressText = 'wilbeefilms' + '@' + 'gmail' + '.com';
		this.emailLink = '.emailLink';
		this.emailLinkHref = 'mailto:' + this.emailAddressText;
	}

	hideTheEmail() {
		this.emailText.html(this.emailAddressText);
		$(this.emailLink).attr('href', this.emailLinkHref);
	}
}

export default EmailHider; 