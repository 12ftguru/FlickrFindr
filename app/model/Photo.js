Ext.define('FlickrFindr.model.Photo', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'owner', type: 'string' },
            { name: 'secret', type: 'string' },
            { name: 'server', type: 'int' },
            { name: 'farm', type: 'int' },
            { name: 'title', type: 'string' }

        ],
        proxy: {
            type: 'localstorage',
            id: 'flickr-saved'
        }
    }
});
