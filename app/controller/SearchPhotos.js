Ext.define('FlickrFindr.controller.SearchPhotos', {
    extend: 'Ext.app.Controller',
    requires: 'Ext.util.Geolocation',
    config: {
        views: [
            'FlickrFindr.view.SearchPhotoList',
            'FlickrFindr.view.SearchPhotoDetails',
            'FlickrFindr.view.SearchPanel',
            'FlickrFindr.view.Main'
        ],
        stores: [
            'FlickrFindr.store.SearchPhotosStore'

        ],
        refs: {
                SearchPhotoList:'searchphotolist',
                Main: 'main',
                SearchPanel: 'searchpanel'
        },
        control: {
            SearchPhotoList: {
                itemtap: 'showSearchPhotoDetails',
                itemswipe: 'pageChange'
            },
            'button[action=savephoto]': {
                tap: 'savePhoto'
            }

        }
    },
    init: function() {

    },
    launch: function() {
        var dt = Ext.Date.add(new Date(), Ext.Date.YEAR, -1);

        // Set some defaults.
        var easyparams = {
            "min_upload_date": Ext.Date.format(dt, "Y-m-d H:i:s"),
            "lat": 40.759017,
            "lon": -73.984059,
            "accuracy": 16,
            "radius": 10,
            "radius_units": "km",
            "method": "flickr.photos.search",
            "api_key": this.getApplication().api_key,
            "format": "json"
        };


        var me = this;
        var geo = Ext.create('Ext.util.Geolocation',{
            autoUpdate: false,
            timeout: 10000,
            // 10 second timeout
            listeners: {
                locationupdate: function(geo) {
                    // Use our coordinates.
                    easyparams = {
                        "min_upload_date": Ext.Date.format(dt, "Y-m-d H:i:s"),
                        "lat": geo.getLatitude(),
                        "lon": geo.getLongitude(),
                        "accuracy": 16,
                        "radius": 10,
                        "radius_units": "km",
                        "method": "flickr.photos.search",
                        "api_key": me.getApplication().api_key,
                        "format": "json"
                    };

                    var store = me.getSearchPhotoList().getStore();
                    store.getProxy().setExtraParams(easyparams);
                    store.load();
                },
                locationerror: function(geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {

                    Ext.Msg.alert('Unable to set location.');
                    var store = me.getSearchPhotoList().getStore();
                    store.getProxy().setExtraParams(easyparams);
                    store.load();

                }
            }
        });
        geo.updateLocation();

    },
    showSearchPhotoDetails: function(list, index, target, record) {
        var panel = Ext.create('FlickrFindr.view.SearchPhotoDetails', {
            title: record.get('title'),
            record: record
        });
        this.getSearchPanel().push(panel);
    },
    pageChange: function(list, index, target, record, e, eOpts) {
        console.log(e);
        var store = this.getSearchPhotoList().getStore();
        if(e.direction == 'right') {
            if(store.currentPage != 1) {
                store.previousPage();
            }
        } else {
            var total = store.getTotalCount();
            var page = store.getPageSize();
            if(store.currentPage <= Math.floor(total/page)) {
                store.nextPage()
            ;}
        }
    },
    savePhoto: function(btn) {
        var rec = btn.up('searchphotodetails').getRecord();
        var store = Ext.data.StoreManager.lookup('SavedPhotosStore');
        rec.save({
            callback: function() {
                store.load();
                this.getMain().setActiveItem(1);
            }
        }, this);
    }

});
