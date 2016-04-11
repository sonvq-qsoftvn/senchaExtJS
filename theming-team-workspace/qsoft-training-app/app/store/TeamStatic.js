Ext.define('QsoftTrainingApp.store.TeamStatics', {
    extend: 'Ext.data.Store',

    alias: 'store.TeamStatics',
    
    requires: [
        'QsoftTrainingApp.model.TeamStatic'
    ],

    autoLoad: true,
    
    model: 'QsoftTrainingApp.model.TeamStatic',   
    
    proxy: {
        type: 'ajax',
        url: QsoftTrainingApp.common.variable.Global.baseApiURL + 'teams/static',
        reader: {
            type: 'json',
            rootProperty: ''
        }
    }
});