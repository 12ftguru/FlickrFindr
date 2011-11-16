Ext.namespace('FlickrFindr.view');

FlickrFindr.view.SearchResultTpl = new Ext.XTemplate('<div class="searchresult"><img src="{[this.getPhotoURL("s", values)]}" height="75" width="75"/> {title}</div>', {
  getPhotoURL: function(size, values) { /* Form a URL based on Flickr's URL specification: http://www.flickr.com/services/api/misc.urls.html */
    size = size || 's';
    var url = 'http://farm' + values.farm + '.static.flickr.com/' + values.server + '/' + values.id + '_' + values.secret + '_' + size + '.jpg';
    return url;
  }
});

FlickrFindr.view.SearchResults = Ext.extend(Ext.Panel, {
  id: 'searchresults',
  layout: 'card',
  fullscreen: true,

  initComponent: function() {
    Ext.apply(this, {
      dockedItems: [],
      items: [
        {
        xtype: 'list',
        store: 'FlickrFindr.store.SearchResults',
        itemTpl: FlickrFindr.view.SearchResultTpl,
        listeners: {
          render: function() {
            var dt = new Date().add(Date.YEAR, -1);
            var geo = new Ext.util.GeoLocation({
              autoUpdate: false
            });
            geo.updateLocation(function(geo) {
              var easyparams = {
                "min_upload_date": dt.format("Y-m-d H:i:s"),
                "lat": geo.latitude,
                "lon": geo.longitude,
                "accuracy": 16,
                "radius": 10,
                "radius_units": "km"
              };
              this.getStore().load({
                params: easyparams
              });
            }, this);
          },
          itemtap: function(list, item) {
            var itemRecord = list.getStore().getAt(item);
            var photo = Ext.ModelMgr.getModel('FlickrFindr.model.Photo');
            photo.load(itemRecord.get('id'), {
              params: {
                photo_id: itemRecord.get('id'),
                secret: itemRecord.get('secret')
              },
              success: function(a, b, c) {
                console.log('Photo: %o %o %o %o %o %o', b, b.getError(), b.getRecords(), b.getResultSet(), a, c);
              }
            });

          }
        }
      },
        {
        xtype: 'photodetails'
      }
      ]
    });

    FlickrFindr.view.SearchResults.superclass.initComponent.apply(this, arguments);
  }
});

Ext.reg('searchresults', FlickrFindr.view.SearchResults);