Ext.define('FlickrFindr.store.SearchPhotosStore', {
    extend: 'Ext.data.Store',
    requires: 'FlickrFindr.model.Photo',
    config: {
        model: 'FlickrFindr.model.Photo',
        autoLoad: false,
        pageSize: 25,
        proxy: {
            type: 'jsonp',
            url: 'http://ycpi.api.flickr.com/services/rest/',
            callbackKey: 'jsoncallback',
            limitParam: 'per_page',
            reader: {
                type: 'json',
                root: 'photos.photo',
                totalProperty: 'photos.total'
            }
        }
    }
});