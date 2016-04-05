Ext.define('QsoftTrainingApp.store.Topics', {
    extend: 'Ext.data.Store',

    alias: 'store.Topics',
    
    requires: [
        'QsoftTrainingApp.model.Topic'
    ],

    autoLoad: true,
    
    model: 'QsoftTrainingApp.model.Topic',   
    
    proxy: {
        type: 'ajax',
        url: QsoftTrainingApp.common.variable.Global.baseTopicApiURL,
        reader: {
            type: 'json',
            rootProperty: ''
        }
    }
});