Ext.define('QsoftTrainingApp.store.Teams', {
    extend: 'Ext.data.Store',

    alias: 'store.Teams',
    
    requires: [
        'QsoftTrainingApp.model.Team'
    ],

    autoLoad: true,
    
    model: 'QsoftTrainingApp.model.Team',   
    
    proxy: {
        type: 'ajax',
        url: QsoftTrainingApp.common.variable.Global.baseTeamApiURL,
        reader: {
            type: 'json',
            rootProperty: ''
        }
    }
});