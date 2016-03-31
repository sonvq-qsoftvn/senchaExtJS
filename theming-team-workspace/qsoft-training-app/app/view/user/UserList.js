/**
 * This view is an example list of people.
 */
Ext.define('QsoftTrainingApp.view.user.UserList', {
    extend: 'Ext.grid.Panel',
    xtype: 'userslist',
    
    requires: [
        'QsoftTrainingApp.store.Users'
    ],
    
    title: 'User List',

    store: {
        type: 'Users'
    },
    
    initComponent: function () {        
        this.columns = [
            {header: 'Email', dataIndex: 'email', flex: 1},
            {header: 'Name', dataIndex: 'name', flex: 1},
            {header: 'Role', dataIndex: 'role', flex: 1},
            {header: 'Phone Number', dataIndex: 'phone_number', flex: 1},
            {header: 'Team Name', dataIndex: 'team_name', flex: 1},
            {header: '', width: 50, xtype:'actioncolumn',
                items : [{
                        iconAlign: 'center',
                        textAlign: 'center',
                    icon: 'resources/images/remove-btn.png',
                    tooltip : 'Delete User',
                    handler : function(gView, rowIndex, colIndex) {
                        var grid = gView.up('grid');
                        grid.deleteUser(grid, grid.getStore().getAt(rowIndex));
                    }
                }]                
            }
        ];
        this.bbar = [{
            xtype: 'button',
            text: 'Create New User',
            action: 'add',
            ui: 'round',
            iconCls: 'fa fa-user-plus'
        }];
        this.callParent(arguments);        
    },
    
    deleteUser: function (grid, record) {
        var data = record.getData();
        console.log(data);
        var deleteUrl = QsoftTrainingApp.common.variable.Global.baseUserApiURL + '/' + data._id + '?token=' + localStorage.getItem("tokenKey");
        var userName = data.name;
        var userParams = new Object();          
            userParams.token = localStorage.getItem("tokenKey");
        if (grid) {
            Ext.Msg.confirm(
                'Remove Selected Team',
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
    }
});
