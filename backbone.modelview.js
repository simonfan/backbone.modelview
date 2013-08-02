define(['backbone','jquery','fill','underscore'], function(Backbone, $, undef, undef) {

	var ModelView = Backbone.ModelView = Backbone.View.extend({
		initialize: function(options) {

			_.bindAll(this,'fill');

			var _this = this;

			// maps the data from the model to the elements.
			this.map = options.map || {};

			/**
			 * Listen to change events on the model.
			 * Whenever the model changes, the view should update itself.
			 */
			this.listenTo(this.model, 'change', function(model) {
				_this.fill(model.attributes);
			});

			/**
			 * Initialize by filling in the model's data
			 */
			this.fill(this.model.attributes);
		},

		/**
		 * fill receives an object keyed by attribute name
		 */
		fill: function(data) {
			var _this = this,
				// the data is different from the fillData, as
				// the 'fillData' is keyed by css selector
				// and 'data' is keyed by model attribute
				fillData = {};


			// map the data to the fillData
			_.each(data, function(value, key) {
					// get the selector
				var selector = _this.map[ key ] || key;

				// set the value on the fillData object
				// keyed by selector
				fillData[ selector ] = value;
			});

			/**
			 * use jquery fill to fill in the values on the display
			 */
			this.$el.fill(fillData);
		},
	});

	return ModelView;
});