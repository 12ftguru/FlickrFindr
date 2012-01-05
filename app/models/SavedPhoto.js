Ext.regStore('FlickrFindr.store.SavedPhotos', {
  model: 'FlickrFindr.model.SearchResult',
  autoLoad: true,
  proxy: {
    type: 'localstorage',
    id: 'flickr-savedPhotos'
  }
});