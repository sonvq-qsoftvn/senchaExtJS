/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('QsoftTrainingApp.Application', {
    extend: 'Ext.app.Application',

    name: 'QsoftTrainingApp',

    requires: [
        'QsoftTrainingApp.common.variable.Global' 
    ],
    
    stores: [
        // TODO: add global / shared stores here
    ],

    views: [
        'QsoftTrainingApp.view.login.Login',
        'QsoftTrainingApp.view.main.Main'
    ],
    launch: function () {
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
                            QsoftTrainingApp.common.variable.Global.userLoggedInID = result.sessions[0].user_id;
                            // The tokenKey is valid, allow user to logged in
                            Ext.create({ xtype: 'app-main' });                            
                        }
                    },
                    failure: function(response, opts) {                        
                        Ext.create({ xtype: 'login' });
                        if(response.status == '401') {
                            var message = Ext.decode(response.responseText);    
                            console.log('You are logged out because of: ' + message);    
                        }
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