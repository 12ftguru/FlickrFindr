FlickrFindr.view.SavedPhotoDetails = Ext.extend(Ext.Panel, {
  id: 'savedPhotoDetails',
  fullscreen: true,
  tpl: '<h1>{title}</h1><img src="http://src.sencha.io/x100/http://farm{farm}.static.flickr.com/{server}/{id}_{secret}_b.jpg"></img>',
  dockedItems: [
    {
    xtype: 'toolbar',
    items: [
      {
      text: 'Back',
      ui: 'back',
      handler: function() {
        Ext.dispatch({
          controller: 'savedPhotos',
          action: 'showSavedPhotos'
        });
      }
    }
    ]
  }
  ],
  initComponent: function() {
    FlickrFindr.view.SavedPhotoDetails.superclass.initComponent.apply(this, arguments);
  }
});

Ext.reg('savedPhotoDetails', FlickrFindr.view.SavedPhotoDetails);