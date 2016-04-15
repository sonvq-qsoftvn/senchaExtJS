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
        url: QsoftTrainingApp.common.variable.Global.baseApiURL + 'users',
        reader: {
            type: 'json',
            rootProperty: ''
        }
    },
     
    groupField: 'team_name'
});