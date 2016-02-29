/**
 * This view is an example list of people.
 */
Ext.define('ThemeDemoApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    ui: 'highlight',
    frame: true,
    tbar: [{
        text: 'Show Message',
        handler: function() {
            Ext.Msg.show({
                title: 'Info',
                msg: 'Message Box with custom icon',
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.INFO
            });
        }
    }],

    requires: [
        'ThemeDemoApp.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});