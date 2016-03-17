/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ThemeTeamApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    
    onLoginClick: function(){
        Ext.Msg.show({
            title: 'Login success',
            msg: 'WHOOHOO, YOU LOGGED IN!!!',
            buttons: Ext.Msg.OK,
            icon: 'smiles-icon'
        });
    }
});
