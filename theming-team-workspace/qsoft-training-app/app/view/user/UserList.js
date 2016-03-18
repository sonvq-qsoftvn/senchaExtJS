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
            {header: 'Phone Number', dataIndex: 'phone_number', flex: 1},
            {header: 'Team Name', dataIndex: 'team_name', flex: 1}         
        ];
        this.bbar = [{
            xtype: 'button',
            text: 'Create New User',
            action: 'add',
            ui: 'round',
            iconCls: 'fa fa-user-plus'
        }];
        this.callParent(arguments);        
    }
});
