/**
 * This view is an example list of people.
 */

var groupingFeature = Ext.create('Ext.grid.feature.Grouping',{
    groupHeaderTpl: '{name} ({rows.length} User{[values.rows.length > 1 ? "s" : ""]})'
});

Ext.define('QsoftTrainingApp.view.teamtree.TeamTreeList', {
    extend: 'Ext.grid.Panel',
    xtype: 'teamtreelist',
    
    requires: [
        'QsoftTrainingApp.store.TeamsTree'
    ],
    height: 600,
    title: 'Team Member List',
    
    id: "teamtreelistall",
    
    store: {
        type: 'TeamsTree'
    },
    features: [groupingFeature],
    collapsible: true,
    fbarCfg:{
          buttonAlign:'center'  //for center align
         // buttonAlign:'left' //for left align
         // buttonAlign:'right' //for right align 
    },
    buttonAlign: 'left',
    fbar: [
        {
            xtype: 'button',
            text: 'Clear Grouping',
            handler : function(){
                groupingFeature.disable();
            },
            ui: 'round',
            iconCls: 'fa fa-unlock'
        }
//        {
//            xtype: 'button',
//            text: 'Enable Grouping',
//            handler : function(){
//                groupingFeature.enable();
//            },
//            ui: 'round',
//            iconCls: 'fa fa-unlock-alt'
//        }
    ],
    columns: [
        {header: 'Email', dataIndex: 'email', flex: 1, sortable:false},
        {header: 'Name', dataIndex: 'name', flex: 1, sortable:false},
        {header: 'Role', dataIndex: 'role', flex: 1, sortable:false},
        {header: 'Phone Number', dataIndex: 'phone_number', flex: 1, sortable:false},        
        {header: 'Team Name', dataIndex: 'team_name', flex: 1, sortable:false}         
    ]
});