Ext.define('FlickrFindr.view.SavedPhotoDetails', {
    extend: 'Ext.Panel',
    xtype: 'savedphotodetails',
    config: {
        tpl: '<div class="photoDetails"><h1>{title}</h1><img src="http://src.sencha.io/x100/x100/http://farm{farm}.static.flickr.com/{server}/{id}_{secret}_b.jpg"></div>',
        padding: 10,
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        items: [
            {
                xtype: 'button',
                action: 'removephoto',
                text: 'Remove From Saved Photos',
                width: 250,
                margin: '0 0 10 0'
            }
        ]
    }
});