Ext.define('FlickrFindr.controller.SavedPhotos', {
    extend: 'Ext.app.Controller',

    config: {
        stores: [
            'FlickrFindr.store.SavedPhotosStore'
        ],
        views: [
            'FlickrFindr.view.SavedPhotoList',
            'FlickrFindr.view.SavedPhotoDetails'
        ],
        refs: {
            SavedPhotoList:'savedphotolist',
            SavedPanel: 'savedpanel'
        },
        control: {
            SavedPhotoList: {
                itemtap: 'showSavedPhotoDetails',
                itemswipe: 'pageChange'
            },
            'button[action=removephoto]': {
                tap: 'removePhoto'
            }

        }
    },
    showSavedPhotoDetails: function(list, index, target, record) {
        var panel = Ext.create('FlickrFindr.view.SavedPhotoDetails', {
            title: record.get('title'),
            record: record
        });
        this.getSavedPanel().push(panel);
    },
    pageChange: function(list, index, target, record, e, eOpts) {
        console.log(e);
        var store = this.getSavedPhotoList().getStore();
        if(e.direction == 'right') {
            if(store.currentPage != 1) {
                store.previousPage();
            }
        } else {
            var total = store.getTotalCount();
            var page = store.getPageSize();
            if(store.currentPage <= Math.floor(total/page)) {
                store.nextPage();
            }
        }
    },
    removePhoto: function(btn) {
        var rec = btn.up('savedphotodetails').getRecord();
        var store = Ext.data.StoreManager.lookup('SavedPhotosStore');
        rec.erase({
            callback: function() {
                store.load();
                this.getSavedPanel().pop();
            }
        }, this);
    }

});
