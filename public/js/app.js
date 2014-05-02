App = Ember.Application.create();

//Router
App.Router.map(function () {
	this.resource('tables', function () {
		this.resource('table', { path:'/:table_id' });
	}); 
});

App.TablesRoute = Ember.Route.extend({
	model: function () {
		return this.store.find('table');
	}
});

//controllers
App.TablesController = Ember.ArrayController.extend();


//models
App.ApplicationAdapter = DS.FixtureAdapter;


App.Table = DS.Model.extend({
	
});

//pre-populated data
App.Table.FIXTURES = [
	{ id:1 },
	{ id:2 },
	{ id:3 },
	{ id:4 },
	{ id:5 },
	{ id:6 }
];