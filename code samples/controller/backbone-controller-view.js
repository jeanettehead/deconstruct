Backbone.View.extend({
	el: '#spinal-cord-analysis',
	template: App.loadTemplate('spinalCord'),
	
	initialize: function () {
		this.model.fetch();
	},

	render: function () {
		this.$el.html(
          this.template(this.model.toJSON())
        );
	}
});

