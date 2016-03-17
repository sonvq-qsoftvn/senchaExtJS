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

        console.log(loginFormValue);
        var loginParams = new Object();;
        loginParams.email = loginFormValue.email;
        loginParams.password = loginFormValue.password;
        loginParams.device_id = 'desktop_client_' + Math.round(new Date().getTime()/1000);
        loginParams.device_type = 'Desktop';
        
        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.

        var baseApiURL = QsoftTrainingApp.common.variable.Global.baseApiURL;
        
        var apiURL = baseApiURL + 'users/auth';                
        
        Ext.Ajax.request({
            url: apiURL,
            method: 'POST',
            params: loginParams,
            success: function(response, opts) {
                //locate the people connections entry point                        
                if(response.status == '202') {
                    // The tokenKey is valid, allow user to logged in
                    // Set the localStorage value to true
                    localStorage.setItem("tokenKey", true);

                    // Remove Login Window
                    this.getView().destroy();

                    // Add the main view to the viewport
                    Ext.create({
                        xtype: 'app-main'
                    });                       
                } else if (response.status == '200') {
                    Ext.Msg.show({
                        title: 'Login failed',
                        msg: 'Login failed please contact the development team',
                        buttons: Ext.Msg.OK,
                        icon: Ext.Msg.ERROR
                    });
                }
            },
            failure: function(response, opts) { 
                Ext.Msg.show({
                    title: 'Login failed',
                    msg: 'Login failed please contact the development team',
                    buttons: Ext.Msg.OK,
                    icon: Ext.Msg.ERROR
                });
                if(response.status == '412') {
                    console.log(response);
                    var message = Ext.decode(response.responseText);    
                    console.log('Login error: ' + message);    
                }
            },
            headers: {
                'Accept': 'application/json'
            }
        });                
                        
    }
});