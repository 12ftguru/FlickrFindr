Ext.define('FlickrFindr.store.SavedPhotosStore', {
    extend: 'Ext.data.Store',
    requires: 'FlickrFindr.model.Photo',
    config: {
        model: 'FlickrFindr.model.Photo',
        autoLoad: true,
        pageSize: 25,
        id: 'SavedPhotosStore',
        proxy: {
            type: 'localstorage',
            id: 'flickr-saved'
        }
    }
});