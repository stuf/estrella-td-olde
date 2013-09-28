
define(
	[],
	function () {

		var Mob = function (stats) {

			if (!stats) return;

			this.type = stats.type;
			this.hp = stats.hp;
			this.speed = stats.speed;
			this.movementPath = stats.path;

			this.worth = stats.worth;

			// TODO: Buffs?
			this.buffs = [];
			this.debuffs = [];

		}

		return Mob;

	}
)
