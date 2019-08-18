const form = document.getElementById( 'mailchimp' );
const recaptchaSiteKey = '6LcqBqYUAAAAAKBrxKmJ0TZ1ZcxOydyzF_sbVz7t';

function loadRecaptchaScript() {
	const script = document.createElement( 'script' );
	const scripts = document.getElementsByTagName( 'script' )[0];
	script.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`;
	scripts.parentNode.insertBefore( script, scripts );
}

window.initRecaptcha = function initRecaptcha() {
	window.grecaptcha.ready( () => {
		window.grecaptcha.execute( recaptchaSiteKey, { action: 'homepage' } ).then( ( token ) => {
			console.log( token );
		} );
	} );
};

function appendMessage( jsonData, currentForm ) {
	const message = document.createElement( 'p' );
	message.innerHTML = jsonData.message;
	currentForm.append( message );
}

function doSomeAjax( event ) {
	event.preventDefault();
	const currentForm = event.currentTarget;
	jQuery( ( $ ) => {
		$.ajax( {
			url: currentForm.getAttribute( 'action' ),
			type: 'POST',
			data: $( currentForm ).serialize(),
			success( data ) {
				const jsonData = JSON.parse( data );
				if ( jsonData.status === 'error' ) {
					appendMessage( jsonData, currentForm );
				} else {
					appendMessage( jsonData, currentForm );
				}
			},
		} );
	} );
}

function initEvents() {
	form.addEventListener( 'submit', doSomeAjax );
}

function init() {
	initEvents();
	loadRecaptchaScript();
}

export default {
	init,
};
