Ext.apply(Ext.form.field.VTypes, {
    password: function (val, field) {
        if (field.initialPassField) {
            var pwd = field.up('form').down('#' + field.initialPassField);
            return (val == pwd.getValue());
        }
        return true;
    },
    passwordText: 'Passwords do not match'
});   

Ext.define('QsoftTrainingApp.view.user.ChangePassForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.changepassforms',
    title: 'Change User Password',
    width: 450,
    layout: 'fit',
    resizable: false,
    id: 'changepasswindow',
    closeAction: 'hide',
    controller: 'user',    
    modal: true,
    
    requires: [
        'QsoftTrainingApp.store.Users',
        'QsoftTrainingApp.store.Teams',
        'QsoftTrainingApp.view.user.UserController'
    ],    
    
    store: {
        type: 'Users'
    },
    
    config: {
        recordIndex: 0,
        action: ''
    },
    items: [{
        xtype: 'form',
        layout: 'anchor',
        reference: 'changepassform',
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
                name: 'oldpassword',
                xtype: 'textfield',
                inputType: 'password',
                fieldLabel: 'Old Pass',
                id: 'oldpassword',
                allowBlank: false,
                msgTarget: 'under',
                regex: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                regexText: 'Enter a valid password'                
            },
            {
                name: 'newpassword',
                xtype: 'textfield',
                inputType: 'password',
                fieldLabel: 'New Pass',
                id: 'newpassword',
                allowBlank: false,
                msgTarget: 'under',
                regex: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                regexText: 'Enter a valid password',
                listeners: {
                    change: function(field) {
                        var confirmField = field.up('form').down('[name=passcfrm]');
                        confirmField.validate();
                    }
                }
            },
            {
                fieldLabel: 'Confirm Pass',
                name: 'passcfrm',
                inputType: 'password',  
                vtype: 'password',
                allowBlank: false,
                initialPassField: 'newpassword',
                msgTarget: 'under'
            }
        ]
    }],
    buttons: [{
        text: 'OK',
        listeners: {
            click: 'doChangePasswordUser'
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