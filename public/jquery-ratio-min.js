/*

 jquery-ratio

 Created at: 2013-04-15 14:58:45 +0200
 Updated at: 2013-04-15 15:09:53 +0200

 Author: Yves Van Broekhoven
 Version: 0.0.0

*/
(function(b,e){function c(a,d){this.element=a;this.options=b.extend({},f,d);this.init()}var f={new_height:null,new_width:null,ratio_height:"3",ratio_width:"4",recalculate_on_resize:!1,side:"width"};c.prototype.init=function(){var a=this;b(a.element);a.set();if(a.options.recalculate_on_resize)b(e).on("resize",function(){console.log("haree");a.destroy();a.set()})};c.prototype.set=function(){var a=b(this.element);if("height"===this.options.side)var d=this.options.new_height?parseInt(this.options.new_height,
10):a.height(),c=d/this.options.ratio_height*this.options.ratio_width;else c=this.options.new_width?parseInt(this.options.new_width,10):a.width(),d=c/this.options.ratio_width*this.options.ratio_height;a.css({height:d,width:c})};c.prototype.destroy=function(){b(this.element).css({height:"",width:""})};b.fn.ratio=function(a){return this.each(function(){b.data(this,"jquery_ratio")||b.data(this,"jquery_ratio",new c(this,a))})}})(jQuery,window);
