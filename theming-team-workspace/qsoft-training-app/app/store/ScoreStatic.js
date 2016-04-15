Ext.define('QsoftTrainingApp.store.ScoreStatics', {
    extend: 'Ext.data.Store',

    alias: 'store.ScoreStatics',
    
    requires: [
        'QsoftTrainingApp.model.ScoreStatic'
    ],

    autoLoad: true,
    
    model: 'QsoftTrainingApp.model.ScoreStatic',   
    
    proxy: {
        type: 'ajax',
        url: QsoftTrainingApp.common.variable.Global.baseApiURL + 'commons/scorechart',
        reader: {
            type: 'json',
            rootProperty: ''
        }
    }
});