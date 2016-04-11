/**
 * This view is an example list of people.
 */
Ext.define('QsoftTrainingApp.view.topic.TopicList', {
    extend: 'QsoftTrainingApp.common.plugin.LiveSearchGridPanel',
    xtype: 'topicslist',
    
    requires: [
        'QsoftTrainingApp.store.Topics',
        'QsoftTrainingApp.view.topic.TopicController',
        'QsoftTrainingApp.common.plugin.LiveSearchGridPanel'
    ],
    
    id: "topiclistall",
    controller: 'topic',
    height: 700,
    alias   : 'widget.topicslist',
    
    title: 'Topic List',

    store: {
        type: 'Topics'
    },
    
    listeners: {
        itemdblclick: 'onTopicSelected'
    },
    
    initComponent: function () {        
        this.columns = [
            {header: 'Name', dataIndex: 'name', flex: 1},
            {header: 'Team name', dataIndex: 'team_name', flex: 1}
        ];
        
    
        if (localStorage.getItem('role') == 'admin') { 
            var actionColumn = {header: '', width: 50, xtype:'actioncolumn',
                items : [{
                        iconAlign: 'center',
                        textAlign: 'center',
                    icon: 'resources/images/remove-btn.png',
                    tooltip : 'Delete Topic',
                    handler : function(gView, rowIndex, colIndex) {
                        var grid = gView.up('grid');
                        grid.deleteTopic(grid, grid.getStore().getAt(rowIndex));
                    }
                }]                
            };
            
            this.columns.push(actionColumn);
            
            this.bbar = [{
                xtype: 'button',
                text: 'Create New Topic',
                action: 'add',
                ui: 'round',
                iconCls: 'fa fa-plus-circle'
            }];
        }
        this.callParent(arguments);        
    },
    
    deleteTopic: function (grid, record) {
        var data = record.getData();
        
        var deleteUrl = QsoftTrainingApp.common.variable.Global.baseApiURL + 'topics/' + data._id;
        var topicName = data.name;
        var topicParams = new Object();          
            topicParams.token = localStorage.getItem("tokenKey");
        if (grid) {
            Ext.Msg.confirm(
                'Remove Selected Topic',
                'Are you sure you want to delete?',
                function (button) {
                    if (button == 'yes') {  
                        Ext.Ajax.request({
                            url: deleteUrl,
                            method: 'DELETE',
                            params: topicParams,
                            success: function (response) {
                                if (response.status == '200') {
                                    var messageShow = 'Successfully delete selected topic named: ' + topicName;
                                    Ext.Msg.show({
                                        title: 'Delete topic successfully',
                                        msg: messageShow,
                                        buttons: Ext.Msg.OK,
                                        icon: 'smiles-icon',
                                        fn: function (btn) {
                                            if (btn == 'ok') {
                                                grid.getStore().load();                           
                                                Ext.getCmp('teamtreelistall').getStore().load();
                                                Ext.getCmp('userlistall').getStore().load(); 
                                                Ext.getCmp('teamlistall').getStore().load();
                                            }
                                        }
                                    });
                                }                    
                            },
                            failure: function (response) {
                                Ext.Msg.show({
                                    title: 'Delete topic failed',
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
