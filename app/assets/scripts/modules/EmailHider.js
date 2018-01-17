import $ from 'jquery';

class EmailHider {
	constructor() {
		this.emailText = $('.emailText');
		this.emailAddressText = 'contact' + '@' + 'wilbee' + '.co.uk';
		this.emailLink = '.emailLink';
		this.emailLinkHref = 'mailto:' + this.emailAddressText;
	}

	hideTheEmail() {
		console.log('Hide the email called!');
		this.emailText.html(this.emailAddressText);
		$(this.emailLink).attr('href', this.emailLinkHref);
	}
}

export default EmailHider;