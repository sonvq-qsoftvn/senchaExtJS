/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('QsoftTrainingApp.view.team.TeamController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.team',

    init: function () {
        this.control({
            'teamslist > toolbar > button[action=add]': {
                click: this.showAddForm
            }
        });
    },
    
    showAddForm: function () {
        var createTeamForm = Ext.create('QsoftTrainingApp.view.team.TeamForm');
        
        createTeamForm.show();
    }
});
