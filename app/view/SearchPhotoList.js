var SearchResultTpl = new Ext.XTemplate(
    '<div class="searchresult">',
    '<img src="{[this.getPhotoURL("s", values)]}" height="75" width="75"/>',
    ' {title}</div>',
    {
    getPhotoURL: function(size, values) { /* Form a URL based on Flickr's URL specification: http://www.flickr.com/services/api/misc.urls.html */
        size = size || 's';
        var url = 'http://farm' + values.farm + '.static.flickr.com/' + values.server + '/' + values.id + '_' + values.secret + '_' + size + '.jpg';
        return url;
    }
});


Ext.define('FlickrFindr.view.SearchPhotoList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.searchphotolist',
    requires: [
        'FlickrFindr.store.SearchPhotosStore'
    ],
    config: {
        store: 'SearchPhotosStore',
        itemTpl: SearchResultTpl
    }

});