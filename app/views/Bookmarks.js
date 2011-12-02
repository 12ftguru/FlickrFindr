FlickrFindr.view.Bookmarks = Ext.extend(Ext.Panel, {
  id: 'bookmarks',
  layout: 'card',
  fullscreen: true,

  initComponent: function() {
    Ext.apply(this, {
      dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        title: 'Bookmarks',
        items: []
      }],
      items: [
        {
        xtype: 'list',
        store: 'FlickrFindr.store.Bookmarks',
        itemTpl: FlickrFindr.view.SearchResultTpl,
        listeners: {
          itemtap: function(list, item) {
            //We're given just the item number, not the actual record. Have to get that first.
            var photo = list.getStore().getAt(item);

            Ext.dispatch({
              controller: 'bookmarks',
              action: 'showDetails',
              args: [photo]
            });
          },
          render: function() {
            var store = this.getStore();
            store.load();
          }
        }
      },
        {
        xtype: 'bookmarkdetails'
      }
      ]
    });

    FlickrFindr.view.Bookmarks.superclass.initComponent.apply(this, arguments);
  }
});

Ext.reg('bookmarks', FlickrFindr.view.Bookmarks);