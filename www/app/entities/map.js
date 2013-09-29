
define(
	[
		'entities/mob',
	    'entities/tower',
	    'entities/path',
	    'entities/player'
	],
	function (
		Mob,
	    Tower,
	    Path,
	    Player
		) {
		'use strict';

		var mobs = [];
		var path = new Path({
			'points': [
				[0, 0],
			    [666, 666]
			]
		});

		var towers = [];

		var Map = function () {

		};

		return Map;

	}
)
