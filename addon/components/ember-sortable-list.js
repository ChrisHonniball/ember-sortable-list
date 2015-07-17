import Ember from 'ember';
import layout from '../templates/components/ember-sortable-list';

export default Ember.Component.extend({
  layout: layout,
  
  
  //////////////////////////////
  //! jQuery Sortable Options //
  //////////////////////////////
  
  appendTo: 'parent',
  axis: false,
  cancel: 'input,textarea,button,select,option',
  connectWith: false,
  containment: false,
  cursor: 'auto',
  cursorAt: false,
  delay: 0,
  disabled: false,
  distance: 1,
  dropOnEmpty: true,
  forceHelperSize: false,
  forcePlaceholderSize: false,
  grid: false,
  handle: false,
  helper: 'original',
  items: '> *',
  opacity: false,
  placeholder: false,
  revert: false,
  scroll: true,
  scrollSensitivity: 20,
  scrollSpeed: 20,
  tolerance: 'intersect',
  zIndex: 1000,
  
  
  /////////////////////////////
  //! jQuery Sortable Events //
  /////////////////////////////
  
  sortableEvents: [
    'activate',
    'beforeStop',
    'change',
    'create',
    'deactivate',
    'out',
    'over',
    'receiver',
    'remove',
    'sort',
    'start',
    'stop',
    'update',
  ],
  
  
  ///////////////
  //! Computed //
  ///////////////
  
  
  
  ///////////////////
  //! Ember Events //
  ///////////////////
  
  didInsertElement() {
    var that = this;
    
    that._setup();
  },
  
  willDestroyElement() {
    var that = this;
    
    that._teardown();
  },
  
  
  ////////////////
  //! Functions //
  ////////////////
  
  _setup() {
    var that = this,
      events = that.get('sortableEvents'),
      settings = {};
    
    events.forEach(function(evt) {
      if(that.attrs[evt]) {
        settings[evt] = that.attrs[evt];
      }
    });
    
    that.$().sortable(settings);
  },
  
  _teardown() {
    var that = this;
    
    that.$().sortable('destroy');
  }
});
