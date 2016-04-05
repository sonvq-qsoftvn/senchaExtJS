Ext.define('QsoftTrainingApp.view.topic.TopicForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.topicsform',
    title: 'Add New Topic',
    width: 350,
    layout: 'fit',
    resizable: false,
    id: 'addtopicwindow',
    closeAction: 'hide',
    controller: 'topic',    
    modal: true,
    
    requires: [
        'QsoftTrainingApp.store.Topics',
        'QsoftTrainingApp.view.topic.TopicController'
    ],
    
    store: {
        type: 'Topics'
    },
    
    config: {
        recordIndex: 0,
        action: ''
    },
    items: [{
        xtype: 'form',
        layout: 'anchor',
        reference: 'addtopicform',
        bodyStyle: {
            background: 'none',
            padding: '10px',
            border: '0'
        },
        defaults: {
            xtype: 'textfield',
            anchor: '100%'
        },
        items: [
            {
                name: 'name',
                fieldLabel: 'Topic Name',
                allowBlank: false,
                msgTarget: 'under'
            }, {
                xtype: 'combo',
                fieldLabel: 'Team',
                allowBlank: true,
                store: {
                    type: 'Teams'
                },
                queryMode: 'local',
                displayField: 'name',
                valueField: '_id',
                editable: false,
                name: 'team_id'
            }]
    }],
    buttons: [{
        text: 'OK',
        listeners: {
            click: 'doAddOrUpdateTopic'
        },
        scale: 'medium',
        ui: 'round',
        xtype: 'button'
    }, {
        text: 'Reset',
        handler: function () {
            this.up('window').down('form').getForm().reset();
        },
        scale: 'medium',
        ui: 'round',
        xtype: 'button'
    }, {
        text: 'Cancel',
        handler: function () {
            this.up('window').close();
        },
        scale: 'medium',
        ui: 'round',
        xtype: 'button'
    }]
});