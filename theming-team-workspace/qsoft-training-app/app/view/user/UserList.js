/**
 * This view is an example list of people.
 */
Ext.define('QsoftTrainingApp.view.user.UserList', {
    extend: 'Ext.grid.Panel',
    xtype: 'userslist',
    
    requires: [
        'QsoftTrainingApp.store.Users',
        'QsoftTrainingApp.view.user.UserController',
        'QsoftTrainingApp.view.user.UserForm',
        'QsoftTrainingApp.view.user.ChangePassForm'
    ],
    
    title: 'User List',
    id: "userlistall",
    store: {
        type: 'Users'
    },
    controller: 'user',
    alias   : 'widget.userslist',
    
    listeners: {
        itemdblclick: 'onUserSelected'
    },
    
    initComponent: function () {        
        this.columns = [
            {header: 'Email', dataIndex: 'email', flex: 1},
            {header: 'Name', dataIndex: 'name', flex: 1},
            {header: 'Role', dataIndex: 'role', flex: 1},
            {header: 'Phone Number', dataIndex: 'phone_number', flex: 1},
            {header: 'Team Name', dataIndex: 'team_name', flex: 1}
        ];
        
        if (localStorage.getItem('role') == 'admin') { 
            var actionColumn = {header: '', width: 80, xtype:'actioncolumn',
                items : [
                {
                    iconAlign: 'center',
                    textAlign: 'center',
                    icon: 'resources/images/change-password-btn.png',
                    tooltip : 'Change Password',
                    handler : function(gView, rowIndex, colIndex) {
                        var grid = gView.up('grid');
                        grid.changePasswordUser(grid, grid.getStore().getAt(rowIndex));
                    }
                },{
                    iconAlign: 'center',
                    textAlign: 'center',
                    icon: 'resources/images/remove-btn.png',
                    tooltip : 'Delete User',
                    handler : function(gView, rowIndex, colIndex) {
                        var grid = gView.up('grid');
                        grid.deleteUser(grid, grid.getStore().getAt(rowIndex));
                    }
                }]                
            };
            
            this.columns.push(actionColumn);
            
            this.bbar = [{
                xtype: 'button',
                text: 'Create New User',
                action: 'add',
                ui: 'round',
                iconCls: 'fa fa-user-plus'
            }];
        } else {
            var actionColumn = {header: '', width: 80, xtype:'actioncolumn',
                items : [
                {
                    iconAlign: 'center',
                    textAlign: 'center',
                    icon: 'resources/images/change-password-btn.png',
                    tooltip : 'Change Password',
                    handler : function(gView, rowIndex, colIndex) {
                        var grid = gView.up('grid');
                        grid.changePasswordUser(grid, grid.getStore().getAt(rowIndex));
                    },
                    isDisabled: function(view, rowIndex, colIndex, item, record) {
                        // Returns true if 'editable' is false (, null, or undefined)
                        var userData = record.getData();
                        if (userData._id != localStorage.getItem("userLoggedInID")) {
                            return true;
                        } else {
                            return false;
                        }
                        console.log(record.getData() );
                        
                    }
                }]                
            };
            
            this.columns.push(actionColumn);
        }
        this.callParent(arguments);        
    },
    
    deleteUser: function (grid, record) {
        var data = record.getData();
        var deleteUrl = QsoftTrainingApp.common.variable.Global.baseUserApiURL + '/' + data._id;
        var userName = data.name;
        var userParams = new Object();          
            userParams.token = localStorage.getItem("tokenKey");
        if (grid) {
            Ext.Msg.confirm(
                'Remove Selected User',
                'Are you sure you want to delete?',
                function (button) {
                    if (button == 'yes') {  
                        Ext.Ajax.request({
                            url: deleteUrl,
                            method: 'DELETE',
                            params: userParams,
                            success: function (response) {
                                if (response.status == '200') {
                                    var messageShow = 'Successfully delete selected user named: ' + userName;
                                    Ext.Msg.show({
                                        title: 'Delete user successfully',
                                        msg: messageShow,
                                        buttons: Ext.Msg.OK,
                                        icon: 'smiles-icon',
                                        fn: function (btn) {
                                            if (btn == 'ok') {
                                                grid.getStore().load();                                                       
                                                Ext.getCmp('teamtreelistall').getStore().load();
                                                Ext.getCmp('teamlistall').getStore().load();                                                
                                                Ext.getCmp('topiclistall').getStore().load();
                                            }
                                        }
                                    });
                                }                    
                            },
                            failure: function (response) {
                                Ext.Msg.show({
                                    title: 'Delete user failed',
                                    msg: Ext.decode(response.responseText),
                                    buttons: Ext.Msg.OK,
                                    icon: Ext.Msg.ERROR
                                }); 
                            }
                        });
                    }
                }
            );
        }
    },
    
    changePasswordUser: function (grid, record) {
        if (Ext.getCmp('changepasswindow') != null) {
            Ext.getCmp('changepasswindow').destroy();
        }
        var changePassUserForm = Ext.create('QsoftTrainingApp.view.user.ChangePassForm');
        changePassUserForm.setTitle('Change User Password');
        changePassUserForm.setAction('edit');
        changePassUserForm.setRecordIndex(record.getData());
        
        changePassUserForm.down('form').getForm().setValues(record.getData());
        
        changePassUserForm.show();
    }
});
