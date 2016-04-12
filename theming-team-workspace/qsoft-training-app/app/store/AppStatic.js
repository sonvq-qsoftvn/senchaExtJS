Ext.define('QsoftTrainingApp.store.AppStatics', {
    extend: 'Ext.data.Store',

    alias: 'store.AppStatics',
    
    requires: [
        'QsoftTrainingApp.model.AppStatic'
    ],

    autoLoad: true,
    
    model: 'QsoftTrainingApp.model.AppStatic',   
    
    proxy: {
        type: 'ajax',
        url: QsoftTrainingApp.common.variable.Global.baseApiURL + 'commons/overview',
        reader: {
            type: 'json',
            rootProperty: ''
        }
    }
});