Ext.namespace('FlickrFindr.view');



FlickrFindr.view.PhotoBookmarkDetails = Ext.extend(Ext.Panel, {
  id: 'bookmarkdetails',
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
          controller: 'bookmarks',
          action: 'showResults'
        });
      }
    }
    ]
  }
  ],
  initComponent: function() {
    FlickrFindr.view.PhotoBookmarkDetails.superclass.initComponent.apply(this, arguments);
  }
});

Ext.reg('bookmarkdetails', FlickrFindr.view.PhotoBookmarkDetails);