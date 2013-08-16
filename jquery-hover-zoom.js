(function($){
	$.fn.hoverZoom = function( options ) {
		return this.each(function() {
			var hoverZoom = new HoverZoom(this, options);
			$(this).data('hoverZoom', hoverZoom);
		});
	};
	$.hoverZoom = {};
	$.hoverZoom.defaults = {
		over: {
			scale: 1.2
		}
	};
	var HoverZoom = function( el, options ) {
		this.options = $.extend({}, $.hoverZoom.defaults, options);
		this.$el = $(el)
			.on('mouseover', $.proxy(this.mouseOver, this))
			.on('mouseout', $.proxy(this.mouseOut, this));
	};
	HoverZoom.prototype = {
		mouseOver: function(e) {
			if( !this.options.out ) {
				this.options.out = {};
				for( var index in this.options.over ) {
					this.options.out[index] = this.$el.css(index);
				}
			}
			this.$el.transition(this.options.over);
		},
		mouseOut: function(e) {
			if( this.options.out ) {
				this.$el.transition(this.options.out);
			}
		}
	};
}(jQuery));
