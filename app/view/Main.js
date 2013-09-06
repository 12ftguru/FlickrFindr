Ext.define('FlickrFindr.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'FlickrFindr.view.SearchPanel',
        'FlickrFindr.view.SavedPanel'
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [
            { xtype: 'searchpanel'},
            { xtype: 'savedpanel'}
        ]
    }
});