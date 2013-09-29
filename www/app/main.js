
requirejs.config({
	baseUrl: '..',
	paths: {
		'jquery': 'vendor/jquery.min',
		'bootstrap': 'vendor/bootstrap.min',
		'ivank': 'vendor/ivank/ivank'
	}
});

require(
	[
		'jquery',
	    'ivank'
	],

	function ($, Ivank) {
		'use strict';

		console.info('Initialize', arguments);


	}
);
