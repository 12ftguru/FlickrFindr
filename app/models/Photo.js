Ext.namespace('FlickrFindr.model');

Ext.regModel('FlickrFindr.model.Photo', {
  fields: [
    {
    name: 'id',
    type: 'int'
  },
    {
    name: 'owner',
    type: 'string',
    mapping: 'owner.nsid'
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
    type: 'string',
    mapping: 'title._content'
  },
    {
    name: 'description',
    type: 'string',
    mapping: 'description._content'
  },
    {
    name: 'ownerUsername',
    type: 'string',
    mapping: 'owner.username'
  },
    {
    name: 'ownerRealname',
    type: 'string',
    mapping: 'owner.realname'
  },
    {
    name: 'neighborhood',
    type: 'string',
    mapping: 'location.neighbourhood._content'
  },
    {
    name: 'locality',
    type: 'string',
    mapping: 'location.locality._content'
  },
    {
    name: 'county',
    type: 'string',
    mapping: 'location.county._content'
  },
    {
    name: 'region',
    type: 'string',
    mapping: 'location.region._content'
  },
    {
    name: 'country',
    type: 'string',
    mapping: 'location.country._content'
  }

  ],
  proxy: {
    type: 'scripttag',
    url: 'http://api.flickr.com/services/rest/',
    callbackParam: 'jsoncallback',
    extraParams: {
      'method': 'flickr.photos.getInfo',
      'api_key': 'e11e7d29f89cd7d93063a6dfa2408c32',
      'format': 'json'
    },
    reader: {
      type: 'json',
      record: 'photo',
      root: ""
    }
  }
});