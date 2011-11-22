Ext.regStore('FlickrFindr.store.Bookmarks', {
  model: 'FlickrFindr.model.SearchResult',
  autoLoad: true,
  proxy: {
    type: 'localstorage',
    id: 'flickr-bookmarks'
  }
});