
define(
	[],
	function () {

		var Tower = function (stats) {

			if (!stats) return;

			this.type = stats.type;

			this.hp = stats.hp;
			this.range = stats.range;
			this.location = stats.location;
			this.cost = stats.cost;

			this.speed = stats.speed;
			this.damage = stats.damage;

		};

		return Tower;

	}
);

