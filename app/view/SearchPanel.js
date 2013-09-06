Ext.define('FlickrFindr.view.SearchPanel', {
    extend: 'Ext.navigation.View',
    xtype: 'searchpanel',
    config: {
        title: 'Search',
        iconCls: 'search',
        items: {
            xtype: 'searchphotolist',
            title: 'Photos Near You'
        }
        
    }
});