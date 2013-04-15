/*global jQuery:false*/

/** @preserve
 * jquery-ratio
 *
 * Created at: 2013-04-15 14:58:45 +0200
 * Updated at: 2013-04-15 15:09:53 +0200
 *
 * Author: Yves Van Broekhoven
 * Version: 0.0.0
 *
 */

(function($, window){
  "use strict";

  var plugin_name = "jquery_ratio",
      defaults    = {
        new_height: null,
        new_width: null,
        ratio_height: '3',
        ratio_width: '4',
        recalculate_on_resize: false,
        side: 'width'
      };


  function Ratio(element, options) {
    this.element = element;
    this.options = $.extend({}, defaults, options);

    this.init();
  }

  Ratio.prototype.init = function(){
    var _this     = this,
        $element   = $(_this.element);

    _this.set();

    if ( _this.options.recalculate_on_resize ) {
      $(window).on('resize', function(){
        _this.destroy();
        _this.set();
      });
    }
  };

  Ratio.prototype.set = function(){
    var $element   = $(this.element);

    // calculate ratio
    if ( this.options.side === 'height' ) {
        var new_height = this.options.new_height ? parseInt(this.options.new_height, 10) : $element.height(),
            new_width  = new_height / this.options.ratio_height * this.options.ratio_width;

    } else {
      var new_width  = this.options.new_width ? parseInt(this.options.new_width, 10) : $element.width(),
          new_height = new_width / this.options.ratio_width * this.options.ratio_height;

    }
    $element.css({
      height: new_height,
      width: new_width
    });
  };

  Ratio.prototype.destroy = function(){
    $(this.element).css({
      height: '',
      width: ''
    });
  };

  $.fn.ratio = function(options) {
    return this.each( function(){
      if ( !$.data(this, plugin_name) ) {
        $.data(this, plugin_name, new Ratio(this, options));
      }
    });
  }

}(jQuery, window));
