/**
 * This view is an example list of people.
 */
Ext.define('QsoftTrainingApp.view.team.TeamList', {
    extend: 'QsoftTrainingApp.common.plugin.LiveSearchGridPanel',
    xtype: 'teamslist',
    
    requires: [
        'QsoftTrainingApp.store.Teams',
        'QsoftTrainingApp.view.team.TeamController',
        'QsoftTrainingApp.common.plugin.LiveSearchGridPanel'
    ],
    
    id: "teamlistall",
    controller: 'team',
    
    alias   : 'widget.teamslist',
    height: 700,
    title: 'Team List',

    store: {
        type: 'Teams'
    },
    
    listeners: {
        itemdblclick: 'onTeamSelected'
    },
    
    initComponent: function () {        
        this.columns = [
            {header: 'Name', dataIndex: 'name', flex: 1},
            {header: 'Team Slogan', dataIndex: 'slogan', flex: 1}            
        ];
        
    
        if (localStorage.getItem('role') == 'admin') { 
            var actionColumn = {header: '', width: 50, xtype:'actioncolumn',
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
            };
            
            this.columns.push(actionColumn);
            
            this.bbar = [{
                xtype: 'button',
                text: 'Create New Team',
                action: 'add',
                ui: 'round',
                iconCls: 'fa fa-plus-circle'
            }];
        }
        this.callParent(arguments);        
    },
    
    deleteTeam: function (grid, record) {
        var data = record.getData();
        
        var deleteUrl = QsoftTrainingApp.common.variable.Global.baseApiURL + 'teams/' + data._id;
        var teamName = data.name;
        var teamParams = new Object();          
            teamParams.token = localStorage.getItem("tokenKey");
        if (grid) {
            Ext.Msg.confirm(
                'Remove Selected Team',
                'Are you sure you want to delete?',
                function (button) {
                    if (button == 'yes') {  
                        Ext.Ajax.request({
                            url: deleteUrl,
                            method: 'DELETE',
                            params: teamParams,
                            success: function (response) {
                                if (response.status == '200') {
                                    var messageShow = 'Successfully delete selected team named: ' + teamName;
                                    Ext.Msg.show({
                                        title: 'Delete team successfully',
                                        msg: messageShow,
                                        buttons: Ext.Msg.OK,
                                        icon: 'smiles-icon',
                                        fn: function (btn) {
                                            if (btn == 'ok') {
                                                grid.getStore().load();                           
                                                Ext.getCmp('teamtreelistall').getStore().load();
                                                Ext.getCmp('userlistall').getStore().load();  
                                                Ext.getCmp('topiclistall').getStore().load();
                                                Ext.getCmp('teamdashboardchart').getStore().load();
                                            }
                                        }
                                    });
                                }                    
                            },
                            failure: function (response) {
                                Ext.Msg.show({
                                    title: 'Delete team failed',
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
