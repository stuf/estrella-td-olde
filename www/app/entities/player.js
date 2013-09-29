
define(
	[],
	function () {
		'use strict';

		var Player = function (data) {

			// Initial settings
			this.name = data.name;
			this.money = data.money;

			// If we're feeling bold. omg
			this.handicap = {};

		};

		return Player;

	}
);
