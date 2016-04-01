/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('QsoftTrainingApp.view.user.UserController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.user',

    
    init: function () {
        this.control({
            'userslist > toolbar > button[action=add]': {
                click: this.showAddForm
            }
        });
    }, 
    
    showAddForm: function () {
        if (Ext.getCmp('adduserwindow') != null) {
            Ext.getCmp('adduserwindow').destroy();
        }
        var createUserForm = Ext.create('QsoftTrainingApp.view.user.UserForm');
        createUserForm.setAction('add');
        createUserForm.show();
    }
   
});
