Ext.define('QsoftTrainingApp.model.Topic', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'name'
        },
        {
            name: 'team_id'
        },
        {
            name: 'team_name', mapping: 'children.name'
        }
    ]
});