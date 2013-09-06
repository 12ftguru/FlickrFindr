var SavedResultTpl = new Ext.XTemplate(
    '<div class="savedresult">',
    '<img src="{[this.getPhotoURL("s", values)]}" height="75" width="75"/>',
    ' {title}</div>',
    {
        getPhotoURL: function(size, values) { /* Form a URL based on Flickr's URL specification: http://www.flickr.com/services/api/misc.urls.html */
            size = size || 's';
            var url = 'http://farm' + values.farm + '.static.flickr.com/' + values.server + '/' + values.id + '_' + values.secret + '_' + size + '.jpg';
            return url;
        }
    });


Ext.define('FlickrFindr.view.SavedPhotoList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.savedphotolist',
    requires: [
        'FlickrFindr.store.SavedPhotosStore'
    ],
    config: {
        store: 'SavedPhotosStore',
        itemTpl: SavedResultTpl
    }

});