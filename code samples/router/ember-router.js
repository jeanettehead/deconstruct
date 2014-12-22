App.Router.map(
  function () {
    this.route('flame', {path: '/flame/:flame_id'});
  }
);

App.FlameRoute = Ember.Route.extend({
  model: function () {
    return App.data.fire;
  }
});

