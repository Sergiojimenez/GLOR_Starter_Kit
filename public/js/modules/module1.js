/**
 * This modules manages the logic for the shopping cart
 */
define(function() {
  'use strict';
  var _private = {
    displayUI: function() {
      console.log(_private.options.person.name);
    }
  };

  var _public = {
    init: function(options) {
      _private.options = options;
      _private.displayUI();
    }
  };

  return _public;

});
