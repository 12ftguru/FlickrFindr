Ext.define('FlickrFindr.view.SavedPanel', {
    extend: 'Ext.navigation.View',
    xtype: 'savedpanel',
    config: {
        title: 'Saved',
        iconCls: 'favorites',
        items: {
            xtype: 'savedphotolist',
            title: 'My Saved Photos'
        }
    }
});