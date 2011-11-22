FlickrFindr.view.SearchResultTpl = new Ext.XTemplate('<div class="searchresult">', '<img src="{[this.getPhotoURL("s", values)]}" height="75" width="75"/>', ' {title}</div>', {
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
      dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        title: 'Search',
        items: [{
          xtype: 'spacer'
        }, {
          text: 'Previous 25',
          ui: 'back',
          handler: function() {
            Ext.dispatch({
              controller: 'searchresults',
              action: 'previousPage'
            });
          }
        },
                                                                                {
          text: 'Next 25',
          ui: 'forward',
          handler: function() {
            Ext.dispatch({
              controller: 'searchresults',
              action: 'nextPage'
            });
          }
        }]
      }],
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
            var easyparams = {
              "min_upload_date": dt.format("Y-m-d H:i:s"),
              "lat": 38.8894504,
              "lon": -77.0353496,
              "accuracy": 16,
              "radius": 10,
              "radius_units": "km"
            };

            this.getStore().getProxy().extraParams = Ext.applyIf(this.getStore().getProxy().extraParams, easyparams);

            geo.updateLocation(function(geo) {
              if (geo === null) {
                geo = {
                  latitude: 38.8894504,
                  longitude: -77.0353496
                };
              }
              var easyparams = {
                "min_upload_date": dt.format("Y-m-d H:i:s"),
                "lat": geo.latitude,
                "lon": geo.longitude,
                "accuracy": 16,
                "radius": 10,
                "radius_units": "km"
              };

              this.getStore().getProxy().extraParams = Ext.applyIf(this.getStore().getProxy().extraParams, easyparams);
              this.getStore().load();
            }, this);
          },
          itemtap: function(list, item) {
            //We're given just the item number, not the actual record. Have to get that first.
            var photo = list.getStore().getAt(item);

            Ext.dispatch({
              controller: 'searchresults',
              action: 'showDetails',
              args: [photo]
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