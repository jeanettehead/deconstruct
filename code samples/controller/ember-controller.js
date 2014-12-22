App.FlameController = Ember.ObjectController.extend({
	tempInF: function () {
		return this.get('temperature') * 1.8 + 32;
	}.property('temperature')
});


