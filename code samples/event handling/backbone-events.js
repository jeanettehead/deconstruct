Backbone.View.extend({
  events: {
    'click .skeleton': 'handleClick'
  },

  handleClick: function(evt) {
    this.model.set('vertebraeCount', 33);
    this.render();
  }
});




