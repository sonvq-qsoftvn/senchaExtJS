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

var myNumberField = Ext.extend(Ext.form.NumberField, {
    setValue : function(v){
        v = typeof v == 'number' ? v : String(v).replace(this.decimalSeparator, ".");
        v = isNaN(v) ? '' : String(v).replace(".", this.decimalSeparator);
        return Ext.form.NumberField.superclass.setValue.call(this, v);
    },
    fixPrecision : function(value){
        var nan = isNaN(value);
        if(!this.allowDecimals || this.decimalPrecision == -1 || nan || !value){
           return nan ? '' : value;
        }
        return parseFloat(value).toFixed(this.decimalPrecision);
    }
});  

Ext.define('QsoftTrainingApp.view.user.UserForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.usersform',
    title: 'Add New User',
    width: 450,
    layout: 'fit',
    resizable: false,
    id: 'adduserwindow',
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
        reference: 'adduserform',
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
                name: 'email',
                xtype: 'textfield',
                fieldLabel: 'Email<span style="color:#13F513;font-weight:bold;">*</span> ',
                allowBlank: false,
                msgTarget: 'under',
                vtype: 'email',
                vtypeText: 'Enter a valid email',
                emptyText: 'user@qsoft.com.vn'
            }, {
                name: 'name',
                fieldLabel: 'Full Name<span style="color:#13F513;font-weight:bold;">*</span> ',
                allowBlank: false,
                msgTarget: 'under'
            }, {
                name: 'phone_number',
                inputType: 'number',
                fieldLabel: 'Phone',
                allowBlank: true,
                msgTarget: 'under'
            },
            {
                name: 'password',
                xtype: 'textfield',
                inputType: 'password',
                fieldLabel: 'Password<span style="color:#13F513;font-weight:bold;">*</span> ',
                id: 'password',
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
                fieldLabel: 'Confirm Pass<span style="color:#13F513;font-weight:bold;">*</span> ',
                name: 'passcfrm',
                inputType: 'password',  
                vtype: 'password',
                allowBlank: false,
                initialPassField: 'password',
                msgTarget: 'under'
            },
            {
                xtype      : 'fieldcontainer',
                fieldLabel : 'Role',
                defaultType: 'radiofield',
                defaults: {
                    flex: 1
                },
                layout: 'hbox',
                items: [
                    {
                        boxLabel  : 'Admin',
                        name      : 'role',
                        inputValue: 'admin',
                        id        : 'radio_admin'
                    }, {
                        boxLabel  : 'User',
                        name      : 'role',
                        inputValue: 'user',
                        id        : 'radio_user',
                        checked   : true
                    }
                ]
            },
            {
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
            },
            {
                name: 'final_score',
                inputType: 'number',
                fieldLabel: 'Final Score',
                allowBlank: true,
                msgTarget: 'under'
            }
            
        ]
    }],
    buttons: [{
        text: 'OK',
        listeners: {
            click: 'doAddOrUpdateUser'
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