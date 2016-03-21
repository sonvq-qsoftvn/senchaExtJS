Ext.define('QsoftTrainingApp.store.TeamsTree', {
    extend: 'Ext.data.TreeStore',

    alias: 'store.TeamsTree',
    
    requires: [
        'QsoftTrainingApp.model.User'
    ],

    autoLoad: true,
    
    model: 'QsoftTrainingApp.model.User',   
    
    proxy: {
        type: 'ajax',
        url: QsoftTrainingApp.common.variable.Global.baseUserApiURL,
        reader: {
            type: 'json',
            rootProperty: ''
        }
    },
    
    groupField: 'team_name'
});

var groupingFeature = Ext.create('Ext.grid.feature.Grouping',{
    groupHeaderTpl: '{name} ({rows.length} User{[values.rows.length > 1 ? "s" : ""]})'
});
