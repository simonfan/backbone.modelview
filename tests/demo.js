define(['backbone.modelview','backbone'], function(ModelView, Backbone) {


	window.model = new Backbone.Model({
		'background-color': 'red',
		title: 'Testing title',
		'title-color': 'green',
		thumbnail: 'warning.gif',
		'thumbnail-width': 200,
		fruit: 'banana',
		input: 'LALALALALALA',
		choice: 'three',
		check: ['first','third','sixth']
	});

	window.view = new ModelView({
		el: $('.model'),
		model: model,
		/**
		 * maps the data values to the html selectors
		 */
		map: {
			'.input-text': 'background-color',
			'. -> style:background-color': 'background-color',
			'.title': 'title',
			'.title -> css:background-color': 'title-color',
			'img': 'thumbnail',
			'img -> css:width': 'thumbnail-width',
			'.option': 'fruit',
			'input[name="choose-one"]': 'choice',
			'input[name="choose-multiple"]': 'check',
		},
		/** 
		 * method called to get the data hash to be displayed.
		 */
		data: function(model) {
			return model.attributes;
		},
	});
	
});