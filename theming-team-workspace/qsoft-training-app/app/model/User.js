Ext.define('QsoftTrainingApp.model.User', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'email'
        },
        {
            name: 'name'
        },
        {
            name: 'phone_number'
        },
        {
            name: 'team_name'
        },
        {
            name: 'role'
        },
        {
            name: 'final_score'
        }
    ]
});