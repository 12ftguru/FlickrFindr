FlickrFindr.Viewport = Ext.extend(Ext.TabPanel, {
  id: 'viewport',
  fullscreen: true,
  cardSwitchAnimation: 'slide',
  tabBar: {
    dock: 'bottom',
    layout: {
      pack: 'center'
    }
  },
  initComponent: function() {
    Ext.apply(this, {
      dockedItems: [],
      items: [{
        xtype: 'searchphotos',
        title: 'Search',
        iconCls: 'search'
      },
                              {
        xtype: 'savedPhotos',
        title: 'Saved Photos',
        iconCls: 'favorites'
      }
                              ]
    });

    FlickrFindr.Viewport.superclass.initComponent.apply(this, arguments);
  }
});