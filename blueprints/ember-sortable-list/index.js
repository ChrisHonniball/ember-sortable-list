module.exports = {
  description: '',
  
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      { name: 'jquery-ui' }
    ]);
  }
};
