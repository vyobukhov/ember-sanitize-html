/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-sanitize-html',

  isDevelopingAddon: function() {
    return true;
  },

  included: function(app) {
    this._super.included.apply(this, arguments);
    app.import('vendor/sanitize-html.min.js', {type: 'vendor'});
  }

};
