App.Router.map(function () {
	this.resource('addressbook', { path: '/' });
});

App.AddressbookRoute = Ember.Route.extend({
	model: function () {
		return this.store.find('addressbook');
	}
});