/*

 jquery-ratio

 Created at: 2013-04-15 14:58:45 +0200
 Updated at: 2013-04-16 11:17:22 +0200

 Author: Yves Van Broekhoven
 Version: 0.0.2

 https://github.com/yvesvanbroekhoven/jquery-ratio

*/
(function(b){function e(a,c){this.element=a;this.options=b.extend({},f,c);this.set()}var f={new_height:null,new_width:null,ratio_height:"3",ratio_width:"4",side:"width"};e.prototype.set=function(){var a=b(this.element),c,d;"height"===this.options.side?(c=this.options.new_height?parseInt(this.options.new_height,10):a.height(),d=c/this.options.ratio_height*this.options.ratio_width):(d=this.options.new_width?parseInt(this.options.new_width,10):a.width(),c=d/this.options.ratio_width*this.options.ratio_height);
a.css({height:c,width:d})};e.prototype.destroy=function(){b(this.element).css({height:"",width:""}).data("jquery_ratio",null)};b.fn.ratio=function(a){return this.each(function(){b.data(this,"jquery_ratio")||b.data(this,"jquery_ratio",new e(this,a))})}})(jQuery,window);
