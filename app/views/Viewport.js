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
        xtype: 'searchresults',
        title: 'Search',
        iconCls: 'search'
      },
              {
        xtype: 'panel',
        html: 'Bookmarks go here.',
        title: 'Bookmarks',
        iconCls: 'favorites'
      }
              ]
    });

    FlickrFindr.Viewport.superclass.initComponent.apply(this, arguments);
  }
});