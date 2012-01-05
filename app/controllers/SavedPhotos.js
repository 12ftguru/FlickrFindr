Ext.regController('savedPhotos', {
  addSavedPhoto: function() {
    var panel = Ext.getCmp('photodetails');
    console.log('panel', panel);

    Ext.Msg.prompt('Save Photo', 'Please enter a description:', function(btn, value) {
      if (btn == 'ok') {
        var savedPhotoStore = Ext.StoreMgr.get('FlickrFindr.store.SavedPhotos');
        var savedPhoto = Ext.ModelMgr.create(panel.data, 'FlickrFindr.model.SearchPhoto');
        savedPhoto.set('title', value);
        savedPhotoStore.loadRecords([savedPhoto], true); // add our savedPhoto to the store, keeping the existing savedPhotos.
        savedPhotoStore.sync(); //save the savedPhotos to local storage.
        var tabPanel = Ext.getCmp('viewport');
        tabPanel.setActiveItem(1); //switch to the savedPhoto view.
      }
    }, this, true, //multiline
    panel.data.title, // value
    {
      focus: true,
      autocorrect: true,
      maxlength: 255
    });
  },
  showDetails: function(interaction) {
    var photo = interaction.args[0];
    var savedPhotos = Ext.getCmp('savedPhotos');
    savedPhotos.down('savedPhotoDetails').update(photo.data);
    savedPhotos.setActiveItem(1, 'slide');
  },
  showSavedPhotos: function() {
    var savedPhotos = Ext.getCmp('savedPhotos');
    savedPhotos.setActiveItem(0, {
      type: 'slide',
      direction: 'right'
    });
  }

});