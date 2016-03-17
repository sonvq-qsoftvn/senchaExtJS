/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('QsoftTrainingApp.view.login.LoginController', { 
    extend: 'Ext.app.ViewController', 
    alias: 'controller.login',

    onLoginClick: function() {        
        var loginFormValue = this.lookupReference('loginForm').getValues();

        var loginParams = new Object();;
        loginParams.email = loginFormValue.email;
        loginParams.password = loginFormValue.password;
        loginParams.device_id = 'desktop_client_' + Math.round(new Date().getTime()/1000);
        loginParams.device_type = 'Desktop';
        
        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.

        var baseApiURL = QsoftTrainingApp.common.variable.Global.baseApiURL;
        
        var apiURL = baseApiURL + 'users/auth';                
        
        var that = this;
        Ext.Ajax.request({
            url: apiURL,
            method: 'POST',
            params: loginParams,
            success: function(response, opts) {
                //locate the people connections entry point                        
                if(response.status == '202') {
                    // The tokenKey is valid, allow user to logged in
                    // Set the localStorage value to tokenKey
                    var result = Ext.decode(response.responseText);

                    localStorage.setItem("tokenKey", result.key);

                    Ext.Msg.show({
                        title: 'Login success',
                        msg: 'Successfully logged in, have fun!!!',
                        buttons: Ext.Msg.OK,
                        icon: 'smiles-icon'
                    });
                    // Remove Login Window
                    that.getView().destroy();

                    // Add the main view to the viewport
                    Ext.create({
                        xtype: 'app-main'
                    });                       
                } else if (response.status == '200') {
                    Ext.Msg.show({
                        title: 'Login failed',
                        msg: Ext.decode(response.responseText),
                        buttons: Ext.Msg.OK,
                        icon: Ext.Msg.ERROR
                    });
                }
            },
            failure: function(response, opts) {                 
                if(response.status == '412') {
                    Ext.Msg.show({
                        title: 'Login failed',
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