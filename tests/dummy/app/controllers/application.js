import Ember from 'ember';

export default Ember.Controller.extend({
  model: Ember.A([
    Ember.Object.create({ id: 1, label: "Test 1", order: 1 }),
    Ember.Object.create({ id: 2, label: "Test 2", order: 2 }),
    Ember.Object.create({ id: 3, label: "Test 3", order: 3 }),
    Ember.Object.create({ id: 4, label: "Test 4", order: 4 }),
  ]),
  
  actions: {
    sortStop(e, ui) {
      let that = this;
      
      Ember.$(e.target).children().each(function(index, item) {
        let modelId = Ember.$(item).data('model-id'),
          newOrder = (index + 1);
        
        that.get('model').findBy('id', modelId).set('order', newOrder);
      });
    }
  }
});
