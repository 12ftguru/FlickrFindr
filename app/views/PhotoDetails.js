FlickrFindr.view.PhotoDetails = Ext.extend(Ext.Panel, {
  id: 'photodetails',
  fullscreen: true,
  tpl: '<h1>{title}</h1><img src="http://src.sencha.io/x100/x100/http://farm{farm}.static.flickr.com/{server}/{id}_{secret}_b.jpg"></img>',
  dockedItems: [
    {
    xtype: 'toolbar',
    items: [
      {
      text: 'Back',
      ui: 'back',
      handler: function() {
        Ext.dispatch({
          controller: 'searchresults',
          action: 'showResults'
        });
      }
    }, {
      xtype: 'spacer'
    },
      {
      text: 'Save',
      ui: 'action',
      handler: function() {
        Ext.dispatch({
          controller: 'bookmarks',
          action: 'addPhotoBookmark'
        });
      }
    }
    ]
  }
  ],
  initComponent: function() {
    FlickrFindr.view.PhotoDetails.superclass.initComponent.apply(this, arguments);
  }
});

Ext.reg('photodetails', FlickrFindr.view.PhotoDetails);