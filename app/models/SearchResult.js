Ext.namespace('FlickrFindr.model', 'FlickrFindr.store');

Ext.regModel('FlickrFindr.model.SearchResult', {
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
  ]
});

Ext.regStore('FlickrFindr.store.SearchResults', {
  model: 'FlickrFindr.model.SearchResult',
  autoLoad: false,
  proxy: {
    type: 'scripttag',
    url: 'http://api.flickr.com/services/rest/',
    callbackParam: 'jsoncallback',
    extraParams: {
      'method': 'flickr.photos.search',
      'api_key': '783f65d9946d0be7be12757782eeb7a7',
      'format': 'json',
      'per_page': 25
    },
    reader: {
      type: 'json',
      root: 'photos.photo'
    }
  }
});