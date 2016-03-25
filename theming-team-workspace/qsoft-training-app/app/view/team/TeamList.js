/**
 * This view is an example list of people.
 */
Ext.define('QsoftTrainingApp.view.team.TeamList', {
    extend: 'Ext.grid.Panel',
    xtype: 'teamslist',
    
    requires: [
        'QsoftTrainingApp.store.Teams',
        'QsoftTrainingApp.view.team.TeamController'
    ],
    
    id: "teamlistall",
    controller: 'team',
    
    alias   : 'widget.teamslist',
    
    title: 'Team List',

    store: {
        type: 'Teams'
    },
    
    initComponent: function () {        
        this.columns = [
            {header: 'Name', dataIndex: 'name', flex: 1},
            {header: 'Team Slogan', dataIndex: 'slogan', flex: 1},
            {header: '', width: 50, xtype:'actioncolumn',
                items : [{
                        iconAlign: 'center',
                        textAlign: 'center',
                    icon: 'resources/images/remove-btn.png',
                    tooltip : 'Delete Team',
                    handler : function(gView, rowIndex, colIndex) {
                        var grid = gView.up('grid');
                        grid.deleteTeam(grid, grid.getStore().getAt(rowIndex));
                    }
                }]                
            }
        ];
        this.bbar = [{
            xtype: 'button',
            text: 'Create New Team',
            action: 'add',
            ui: 'round',
            iconCls: 'fa fa-plus-circle'
        }];
        this.callParent(arguments);        
    },
    
    deleteTeam: function (grid, record) {
        var data = record.getData();
        console.log(data);
        if (grid) {
            Ext.Msg.confirm(
                'Remove Selected Team',
                'Are you sure you want to delete?',
                function (button) {
                    if (button == 'yes') {                        
                        Ext.Ajax.request({
                            url: 'books/delete/' + data.id,
                            success: function (response) {
                                grid.getStore().load();
                            },
                            failure: function (response) {
                                Ext.Msg.alert('Failure', 'Failed to delete Book details.');
                            }
                        });
                    }
                }
            );
        }
    }
});
