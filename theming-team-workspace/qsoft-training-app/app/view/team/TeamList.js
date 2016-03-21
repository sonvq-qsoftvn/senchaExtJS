/**
 * This view is an example list of people.
 */
Ext.define('QsoftTrainingApp.view.team.TeamList', {
    extend: 'Ext.grid.Panel',
    xtype: 'teamslist',
    
    requires: [
        'QsoftTrainingApp.store.Teams'
    ],
    
    title: 'Team List',

    store: {
        type: 'Teams'
    },
    
    initComponent: function () {        
        this.columns = [
            {header: 'Name', dataIndex: 'name', flex: 1}
        ];
        this.bbar = [{
            xtype: 'button',
            text: 'Create New Team',
            action: 'add',
            ui: 'round',
            iconCls: 'fa fa-user-plus'
        }];
        this.callParent(arguments);        
    }
});
