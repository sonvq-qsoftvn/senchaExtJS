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
    },
    
    onUserSelected: function(me, record, item, index) {
        if (localStorage.getItem('role') == 'admin') { 
            if (Ext.getCmp('adduserwindow') != null) {
                Ext.getCmp('adduserwindow').destroy();
            }
            var editUserForm = Ext.create('QsoftTrainingApp.view.user.UserForm');
            editUserForm.setTitle('Edit User');
            editUserForm.setAction('edit');
            editUserForm.setRecordIndex(record.getData());

            editUserForm.down('form').getForm().setValues(record.getData());
            editUserForm.down('form').getForm().findField('password').hide();
            editUserForm.down('form').getForm().findField('passcfrm').hide();

            editUserForm.show();
        }
    },
    
    doAddOrUpdateUser: function () {          
        var userFormValue = this.lookupReference('adduserform').getValues();        

        var that = this;       
        var validated = true;
        
        var formAction = Ext.getCmp('adduserwindow').getAction();
                        
        if (formAction == 'add') {
            if (userFormValue.email == '' || userFormValue.name == '' || userFormValue.passcfrm == ''
                || userFormValue.password == '' || userFormValue.role == '') {
                validated = false;
            }
        } else if (formAction == 'edit') {
            if (userFormValue.email == '' || userFormValue.name == '' || userFormValue.role == '') {
                validated = false;
            }
        }

        if (validated == false) {
            Ext.Msg.show({
                title: 'Form error',
                msg: 'Please fill in required fields',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.ERROR
            });
        } else {
            
            var userParams = new Object();
            userParams.email                    = userFormValue.email;
            userParams.name                     = userFormValue.name;
            userParams.password                 = userFormValue.password;
            userParams.password_confirmation    = userFormValue.passcfrm;
            userParams.role                     = userFormValue.role;
            
            if(userFormValue.phone_number != '') {
                userParams.phone_number         = userFormValue.phone_number;
            }
            if(userFormValue.team_id != '') {
                userParams.team_id              = userFormValue.team_id;
            }
                        
            userParams.token = localStorage.getItem("tokenKey");

            var ajaxUrl = '';
            var method = '';
            var textMessage = '';
            if (formAction == 'add') {
                textMessage = 'create';    
                ajaxUrl = QsoftTrainingApp.common.variable.Global.baseUserApiURL;
                method = 'POST';
            } else if (formAction == 'edit') {
                var objectEdit = Ext.getCmp('adduserwindow').getRecordIndex();
                ajaxUrl = QsoftTrainingApp.common.variable.Global.baseUserApiURL + '/' + objectEdit._id;
                method = 'PUT';
                textMessage = 'update';    
            }
            Ext.Ajax.request({
                url: ajaxUrl,
                method: method,
                params: userParams,
                success: function (response) {
                    if (response.status == '200') {
                        var messageShow = 'Successfully ' + textMessage + ' a user named: ' + userFormValue.name;
                        Ext.Msg.show({
                            title: 'User info',
                            msg: messageShow,
                            buttons: Ext.Msg.OK,
                            icon: 'smiles-icon',
                            fn: function (btn) {
                                if (btn == 'ok') {
                                    Ext.getCmp('teamlistall').getStore().load();
                                    Ext.getCmp('teamtreelistall').getStore().load();
                                    Ext.getCmp('userlistall').getStore().load(); 
                                    Ext.getCmp('topiclistall').getStore().load();
                                    Ext.getCmp('adduserwindow').close();                                    
                                }
                            }
                        });
                    }                    
                },
                failure: function (response) {
                    var messageShow = 'Error, ' + textMessage + ' user failed';
                    if (response.status == '412') {
                        var textReturn = Ext.decode(response.responseText);
                        var validationObject = textReturn.validation;
                        var messageError = validationObject[Object.keys(validationObject)[0]];
                        
                        Ext.Msg.show({
                            title: messageShow,
                            msg: messageError,
                            buttons: Ext.Msg.OK,
                            icon: Ext.Msg.ERROR
                        });                         
                    } else {
                        Ext.Msg.show({
                            title: messageShow,
                            msg: Ext.decode(response.responseText),
                            buttons: Ext.Msg.OK,
                            icon: Ext.Msg.ERROR
                        }); 
                    }
                }
            });
        }                
    },
    
    doChangePasswordUser: function() {
        var userFormValue = this.lookupReference('changepassform').getValues();        
        
        var that = this;       
        var validated = true;
        var validateMessage = '';
        
        var formAction = Ext.getCmp('changepasswindow').getAction();
         
        if (userFormValue.oldpassword == userFormValue.newpassword) {
            validated = false;
            validateMessage = 'The old and new password are the same';
        }
        
        if (userFormValue.oldpassword == '' || userFormValue.newpassword == '' || userFormValue.passcfrm == '') {
            validated = false;
            validateMessage = 'Please fill in required fields';
        }        

        if (validated == false) {
            Ext.Msg.show({
                title: 'Form error',
                msg: validateMessage,
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.ERROR
            });
        } else {
            
            var userParams = new Object();
            userParams.old_password                 = userFormValue.oldpassword;
            userParams.new_password                 = userFormValue.newpassword;
            userParams.new_password_confirmation    = userFormValue.passcfrm;            
                        
            userParams.token = localStorage.getItem("tokenKey");

            var ajaxUrl = '';
            var method = '';
            var textMessage = '';
            var objectEdit = Ext.getCmp('changepasswindow').getRecordIndex();
            
            ajaxUrl = QsoftTrainingApp.common.variable.Global.baseUserApiURL + '/password/' + objectEdit._id;
            method = 'PUT';
            textMessage = 'change';    
            Ext.Ajax.request({
                url: ajaxUrl,
                method: method,
                params: userParams,
                success: function (response) {
                    if (response.status == '200') {
                        var messageShow = 'Successfully ' + textMessage + ' password of user named: ' + objectEdit.name;
                        Ext.Msg.show({
                            title: 'Change user password',
                            msg: messageShow,
                            buttons: Ext.Msg.OK,
                            icon: 'smiles-icon',
                            fn: function (btn) {
                                if (btn == 'ok') {
                                    Ext.getCmp('teamlistall').getStore().load();
                                    Ext.getCmp('teamtreelistall').getStore().load();
                                    Ext.getCmp('userlistall').getStore().load(); 
                                    Ext.getCmp('topiclistall').getStore().load();
                                    Ext.getCmp('changepasswindow').close();                                    
                                }
                            }
                        });
                    }                    
                },
                failure: function (response) {
                    var messageShow = 'Error, ' + textMessage + ' user password failed';
                    if(response.status == '401' || response.status == '404' || response.status == '500') {
                        Ext.Msg.show({
                            title: messageShow,
                            msg: Ext.decode(response.responseText),
                            buttons: Ext.Msg.OK,
                            icon: Ext.Msg.ERROR
                        }); 
                    } else if (response.status == '412') {
                        var textReturn = Ext.decode(response.responseText);
                        var validationObject = textReturn.validation;
                        var messageError = validationObject[Object.keys(validationObject)[0]];
                        
                        Ext.Msg.show({
                            title: messageShow,
                            msg: messageError,
                            buttons: Ext.Msg.OK,
                            icon: Ext.Msg.ERROR
                        }); 
                    }
                }
            });
        }        
    }
   
});
