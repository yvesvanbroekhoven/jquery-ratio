/*global jQuery:false*/

/** @preserve
 * jquery-ratio
 *
 * Created at: 2013-04-15 14:58:45 +0200
 * Updated at: 2013-04-16 11:17:22 +0200
 *
 * Author: Yves Van Broekhoven
 * Version: 0.0.2
 *
 * https://github.com/yvesvanbroekhoven/jquery-ratio
 *
 */

(function($, window){
  "use strict";

  var plugin_name = "jquery_ratio",
      defaults = {
        new_height: null,
        new_width: null,
        ratio_height: '3',
        ratio_width: '4',
        side: 'width'
      };


  //
  // Contructor
  //
  function Ratio(element, options) {
    this.element = element;
    this.options = $.extend({}, defaults, options);

    this.set();
  }


  //
  // Set element dimensions by ratio
  //
  Ratio.prototype.set = function(){
    var $element = $(this.element),
        new_height,
        new_width;

    // Calculate ratio
    if ( this.options.side === 'height' ) {
      new_height  = this.options.new_height ? parseInt(this.options.new_height, 10) : $element.height();
      new_width   = new_height / this.options.ratio_height * this.options.ratio_width;

    } else {
      new_width   = this.options.new_width ? parseInt(this.options.new_width, 10) : $element.width();
      new_height  = new_width / this.options.ratio_width * this.options.ratio_height;

    }

    $element.css({
      height: new_height,
      width: new_width
    });
  };


  //
  // Destroy plugin instance & reset element dimensions
  //
  Ratio.prototype.destroy = function(){
    var $element = $(this.element);

    $element
      .css({
        height: '',
        width: ''
      })
      .data(plugin_name, null);
  };


  //
  // Attach to jQuery
  //
  $.fn.ratio = function(options) {
    return this.each( function(){
      if ( !$.data(this, plugin_name) ) {
        $.data(this, plugin_name, new Ratio(this, options));
      }
    });
  }

}(jQuery, window));
