Ext.namespace('FlickrFindr.controller');

Ext.regController('bookmarks', {
  addPhotoBookmark: function() {
    var panel = Ext.getCmp('photodetails');
    console.log('panel', panel);

    Ext.Msg.prompt('Save Bookmark', 'Please enter a description:', function(btn, value) {
      if (btn == 'ok') {
        var bookmarkStore = Ext.StoreMgr.get('FlickrFindr.store.Bookmarks');
        var bookmark = Ext.ModelMgr.create(panel.data, 'FlickrFindr.model.SearchResult');
        bookmark.set('title', value);
        bookmarkStore.loadRecords([bookmark], true); // add our bookmark to the store, keeping the existing bookmarks.
        bookmarkStore.sync(); //save the bookmarks to local storage.
        var tabPanel = Ext.getCmp('viewport');
        tabPanel.setActiveItem(1); //switch to the bookmark view.
      }
    }, this, true, //multiline
    panel.data.title, // value
    {
      focus: true,
      autocorrect: true
    });
  },
  showDetails: function(interaction) {
    var photo = interaction.args[0];
    var results = Ext.getCmp('bookmarks');
    results.down('bookmarkdetails').update(photo.data);
    results.setActiveItem(1);
  },
  showResults: function() {
    var results = Ext.getCmp('bookmarks');
    results.setActiveItem(0);
  }

});