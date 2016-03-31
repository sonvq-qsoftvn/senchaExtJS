/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('QsoftTrainingApp.view.main.MainController', {
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
    
    onLogoutClick: function () {
        var baseApiURL = QsoftTrainingApp.common.variable.Global.baseApiURL;
        
        var apiURL = baseApiURL + 'users/' + localStorage.getItem("userLoggedInID") + '/logout';                
        
        var logoutParams = new Object();
        logoutParams.token = localStorage.getItem("tokenKey");
        
        var that = this;
        Ext.Ajax.request({
            url: apiURL,
            method: 'POST',
            params: logoutParams,
            success: function(response, opts) {
                //locate the people connections entry point                        
                if(response.status == '202') {
                    // Remove the localStorage key/value
                    localStorage.removeItem('tokenKey');
                    localStorage.removeItem('userLoggedInID');
                    localStorage.removeItem('username');

                    // Remove Main View
                    that.getView().destroy();

                    // Add the Login Window
                    Ext.create({
                        xtype: 'login'
                    });                     
                }
            },
            failure: function(response, opts) {                 
                if(response.status == '401' || response.status == '403') {
                    Ext.Msg.show({
                        title: 'Logout failed',
                        msg: Ext.decode(response.responseText),
                        buttons: Ext.Msg.OK,
                        icon: Ext.Msg.ERROR
                    }); 
                }
            },
            headers: {
                'Accept': 'application/json'
            }
        });                       
    }
});
