FlickrFindr.Viewport = Ext.extend(Ext.Panel, {
    id        : 'viewport',
    layout    : 'card',
    fullscreen: true,

    initComponent: function() {
        Ext.apply(this, {
            dockedItems: [],
            items: [{
              xtype: 'container',
              html: 'I am here!',
              layout: 'fit'
              }]
        });

        FlickrFindr.Viewport.superclass.initComponent.apply(this, arguments);
    }
});

