Ext.define('QsoftTrainingApp.view.team.TeamForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.teamsform',
    title: 'Add New Team',
    width: 350,
    layout: 'fit',
    resizable: false,
    reference: 'teamsForm',
    closeAction: 'hide',
    modal: true,
    config: {
        recordIndex: 0,
        action: ''
    },
    items: [{
        xtype: 'form',
        layout: 'anchor',
        bodyStyle: {
            background: 'none',
            padding: '10px',
            border: '0'
        },
        defaults: {
            xtype: 'textfield',
            anchor: '100%'
        },
        items: [{
                name: 'id',
                xtype: 'hiddenfield'
            }, {
                name: 'name',
                fieldLabel: 'Team Name',
                allowBlank: false,
                msgTarget: 'under'
            }, {
                name: 'slogan',
                fieldLabel: 'Team Slogan',
                allowBlank: false,
                msgTarget: 'under'
            }]
    }],
    buttons: [{
        text: 'OK',
        action: 'add',
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