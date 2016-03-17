/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('QsoftTrainingApp.view.login.Login', { 
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'QsoftTrainingApp.view.login.LoginController',
        'Ext.form.Panel' 
    ],

    controller: 'login',
    bodyPadding: 30,
    closable: false,
    draggable: false,
    autoShow: true,    
    region: "center",
        
    items: {
        xtype: 'form',
        reference: 'loginForm',
        items: [{
            xtype: 'textfield',
            name: 'email',
            fieldLabel: 'Email',
            allowBlank: false,
            msgTarget: 'under',
            vtype: 'email',
            vtypeText: 'Enter a valid email',
            emptyText: 'user@qsoft.com.vn'
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false,
            msgTarget: 'under',
            regex: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/,
            regexText: 'Enter a valid password'
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Use your Qsoft account'
        }],
        buttons: [{
            text: 'Sign in',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            },
            scale: 'medium',
            ui: 'round'
        }]
    },
    listeners: {
        show: function() {
            this.center();
        }
    }
});

window.onresize = function(){
    var w = Ext.query('.x-window');
    Ext.each(w, function(item){
        Ext.getCmp(item.id).center();
    })
}
