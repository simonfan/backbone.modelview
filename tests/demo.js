define(['backbone.modelview','backbone'], function(ModelView, Backbone) {


	window.model = new Backbone.Model();

	window.view = new ModelView({
		el: $('.model'),
		model: model,
		map: {
			'title': '.title',
			'thumbnail': 'img',
			'fruit': '.option',
			'input': '.input-text',
			'choice': 'input[name="choose-one"]',
			'check': 'input[name="choose-multiple"]',
		}
	});



	model.set({
		title: 'Testing title',
		thumbnail: 'warning.gif',
		fruit: 'banana',
		input: 'LALALALALALA',
		choice: 'three',
		check: ['first','third','sixth']
	})
	
});