/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('QsoftTrainingApp.Application', {
    extend: 'Ext.app.Application',

    name: 'QsoftTrainingApp',

    requires: [
        'QsoftTrainingApp.common.variable.Global',
        'QsoftTrainingApp.common.function.CommonFunction'
    ],
    
    stores: [
        // TODO: add global / shared stores here
    ],

    views: [
        'QsoftTrainingApp.view.login.Login',
        'QsoftTrainingApp.view.main.Main'
    ],
    launch: function () {
        setTimeout(function(){
            $('.x-panel-body.x-panel-body-navigation').backstretch([
                "resources/images/main-background.jpg"
              , "resources/images/main-background1.jpg"
              , "resources/images/main-background2.jpg"
              , "resources/images/main-background3.jpg"
              , "resources/images/main-background4.jpg"
              , "resources/images/main-background5.jpg"
              , "resources/images/main-background7.jpg"
              , "resources/images/main-background8.jpg"
            ], {duration: 5000, fade: 750});
        }, 2000);
                
        var baseApiURL = QsoftTrainingApp.common.variable.Global.baseApiURL;
        
        // It's important to note that this type of application could use
        // any type of storage, i.e., Cookies, LocalStorage, etc.
        var tokenKey;

        // Check to see the current value of the localStorage key
        tokenKey = localStorage.getItem("tokenKey");

        // Check tokenKey is valid
        // Case 1, if tokenKey is null, then definitely loggedIn = false
        if(tokenKey == null) {
            Ext.create({ xtype: 'login' });
        }
        // Case 2, if tokenKey is not null, call sessions api to check tokenKey is valid or not
        if(tokenKey != null) {
            // Check length of tokenKey
            if(tokenKey.length <= 0) {
                Ext.create({ xtype: 'login' });
            } else {
                // Call api
                //create a request for the resourceIndex
                var apiURL = baseApiURL + 'users/sessions?token=' + tokenKey;
                Ext.Ajax.request({
                    url: apiURL,
                    method: 'GET',
                    success: function(response, opts) {
                        //locate the people connections entry point                        
                        if(response.status == '200') {
                            var result = Ext.decode(response.responseText);
                            localStorage.setItem("userLoggedInID", result._id);
                            localStorage.setItem("username", result.name);
                            localStorage.setItem("role", result.role);
                            // The tokenKey is valid, allow user to logged in
                            Ext.create({ xtype: 'app-main' });                            
                        }
                    },
                    failure: function(response, opts) {
                        var message = 'You are logged out because of: ' + Ext.decode(response.responseText);
                        Ext.Msg.show({
                            title: 'You are logged out',
                            msg: message,
                            buttons: Ext.Msg.OK,
                            icon: Ext.Msg.ERROR,
                            fn: function (btn) {
                                if (btn == 'ok') {
                                    Ext.create({ xtype: 'login' });
                                }
                            }
                        }); 
                        
                        localStorage.removeItem('tokenKey');
                        localStorage.removeItem('userLoggedInID');
                        localStorage.removeItem('username');
                        localStorage.removeItem('role');                                                
                    },
                    headers: {
                        'Accept': 'application/json'
                    }
                });                
            }
        }
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});