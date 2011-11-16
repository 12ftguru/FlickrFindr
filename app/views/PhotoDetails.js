Ext.namespace('FlickrFindr.view');

FlickrFindr.view.PhotoTpl = new Ext.XTemplate('<div class="searchresult"><img src="{[this.getPhotoURL("s", values)]}" height="75" width="75"/> {title}</div>', {
  getPhotoURL: function(size, values) { /* Form a URL based on Flickr's URL specification: http://www.flickr.com/services/api/misc.urls.html */
    size = size || 's';
    var url = 'http://farm' + values.farm + '.static.flickr.com/' + values.server + '/' + values.id + '_' + values.secret + '_' + size + '.jpg';
    return url;
  }
});

FlickrFindr.view.PhotoDetails = Ext.extend(Ext.Panel, {
  id: 'photodetails',
  fullscreen: true,
  tpl: FlickrFindr.view.PhotoTpl,

  initComponent: function() {
    FlickrFindr.view.PhotoDetails.superclass.initComponent.apply(this, arguments);
  }
});

Ext.reg('photodetails', FlickrFindr.view.PhotoDetails);