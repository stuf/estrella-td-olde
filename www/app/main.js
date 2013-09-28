
requirejs.config({
	baseUrl: '..',
	shim: {
		'jquery': {
			'exports': 'jQuery'
		}
	},
	paths: {
		'jquery': 'vendor/jquery.min',
		'bootstrap': 'vendor/bootstrap.min'
	}
});

require(
	['jquery'],
	function ($) {
		'use strict';

		// Lel
		console.info("lel");
	}
);
