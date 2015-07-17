/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-sortable-list',
  
  included: function(app) {
    this._super.included(arguments);
    
    app.import(app.bowerDirectory + '/jquery-ui/ui/core.js');
    app.import(app.bowerDirectory + '/jquery-ui/ui/widget.js');
    app.import(app.bowerDirectory + '/jquery-ui/ui/mouse.js');
    app.import(app.bowerDirectory + '/jquery-ui/ui/sortable.js');
  },
  
  isDevelopingAddon: function() {
    return true;
  }
};
