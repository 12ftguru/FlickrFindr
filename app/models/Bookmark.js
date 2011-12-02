Ext.regModel('FlickrFindr.model.Bookmark', {
  fields: [
    {
    name: 'id',
    type: 'int'
  },
    {
    name: 'owner',
    type: 'string'
  },
    {
    name: 'secret',
    type: 'string'
  },
    {
    name: 'server',
    type: 'int'
  },
    {
    name: 'farm',
    type: 'int'
  },
    {
    name: 'title',
    type: 'string'
  }
  ],
  proxy: {
        type: 'rest',
        url : '/api/bookmarks.php'
    }
});

Ext.regStore('FlickrFindr.store.Bookmarks', {
  model: 'FlickrFindr.model.Bookmark',
  storeID: 'BookmarkStore',
  emptyText: 'No Bookmarks To List',
  autoload: true,
  proxy: {
    type: 'rest',
    url: '/api/bookmarks.php',
    reader: {
      type: 'json',
      root: 'children'
    }
  }
});
