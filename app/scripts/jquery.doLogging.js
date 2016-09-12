/*global jQuery, $ */
/*jslint browser:true, devel:true, indent:2, plusplus:true, nomen: true */
(function ($) {
  /**
   * [doLogging description]
   * @param  {[type]} el      [description]
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   */
  $.doLogging = function (el, obj) {
    var base = this;
    base.$el = $(el);
    base.el = el;

    var xx = '';

    $.doLogging.defaultOptions = {
      loggingattr: 'data-log'
    };
    /**
     * [init description]
     * @return {[type]} [description]
     */
    base.init = function () {
      base.options = $.extend({}, $.doLogging.defaultOptions, obj);
      base.addLoggingEvents();
    };
    /**
     * [addLoggingEvents description]
     */
    base.addLoggingEvents = function () {
      
      if (base.$el.attr('logged') !== 'true' && base.$el.attr(base.options.loggingattr)) {
        //console.log("Value:%s",base.options.loggingattr);
        base.$el.click(base.triggerLog);

        base.$el.attr('logged', 'true');
      }
    };
    /**
     * [triggerLog description]
     * @param  {[type]} e [description]
     * @return {[type]}   [description]
     */
    base.triggerLog = function (e) {
      e.preventDefault();
      var loggingURL = base.$el.attr(base.options.loggingattr);
      if (typeof doLogging === 'function' && loggingURL !== '') {

        console.log("Link Value:%s",base.$el.attr(base.options.loggingattr));
        doLogging(loggingURL);
      }
    };
    base.init();
  };
  /**
   * [doLogging description]
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   */
  $.fn.doLogging = function (options) {
    return this.each(function () {
      (new $.doLogging(this, options));
    });
  };

})(jQuery);
/**
 * [doLogging description]
 * @return {[type]} [description]
 */
function doLogging() {
  console.log('Success');
  //console.log(base.$el.attr(base.options.loggingattr));
}
