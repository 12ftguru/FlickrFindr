Ext.namespace('FlickrFindr.controller');

Ext.regController('searchresults', {
  showResults: function() {
    var results = Ext.getCmp('searchresults');
    results.setActiveItem(0);
  },
  showDetails: function(interaction) {
    var photo = interaction.args[0];
    var results = Ext.getCmp('searchresults');
    console.log('photo: %o', photo);
    results.down('photodetails').update(photo.data);
    results.setActiveItem(1);
  }
});