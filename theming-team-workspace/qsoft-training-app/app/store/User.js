Ext.define('QsoftTrainingApp.store.Users', {
    extend: 'Ext.data.Store',

    alias: 'store.Users',
    
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
    }
});